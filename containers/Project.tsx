"use client";

import { useIntersectionObserver } from "utils/useIntersectionObserver";
import { useEffect, useMemo, useRef, useState } from "react";
import list from "../lib/List";
import { ImageData } from "Interfaces";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const Project = () => {
  const numElements = list.reduce((acc, item) => acc + item.subs.length, 1);
  const refs = Array.from({ length: numElements }, () =>
    useRef<HTMLDivElement | null>(null)
  );
  const entries = refs.map((ref) => useIntersectionObserver(ref, {}));
  const isVisible = entries.map((entry) => !!entry?.isIntersecting);

  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useReducedMotion();

  // برای اینکه انیمیشن ورود هر سکشن فقط یک بار اجرا بشه (بدون تغییر فانکشنالیتی)
  const seenRef = useRef<boolean[]>([]);
  useEffect(() => {
    isVisible.forEach((v, i) => {
      if (v) seenRef.current[i] = true;
    });
  }, [isVisible]);

  const openModal = (image: ImageData) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) {
      closeModal();
    }
  };

  function getReferenceById(id: number): React.RefObject<HTMLDivElement> {
    return refs[id];
  }

  // پیدا کردن اولین subcategory قابل‌مشاهده (همان منطق قبلی، فقط تمیزتر)
  const currentVisible = useMemo(() => {
    for (const category of list) {
      const firstVisibleSubcategory = category.subs.find(
        (subcategory) => isVisible[subcategory.id]
      );
      if (firstVisibleSubcategory) {
        return { category, subcategory: firstVisibleSubcategory };
      }
    }
    return null;
  }, [isVisible]);

  const sectionEnter = prefersReducedMotion
    ? { opacity: 1 }
    : { opacity: 1, transition: { duration: 0.35 } };

  const subcategoryVariants = {
    hidden: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 },
    show: prefersReducedMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 260, damping: 26 },
        },
  } as const;

  const titleVariants = {
    hidden: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 },
    show: prefersReducedMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 320, damping: 28 },
        },
  } as const;

  const imageItemVariants = {
    hidden: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 },
    show: prefersReducedMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 420, damping: 30 },
        },
  } as const;

  const modalBackdropVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: prefersReducedMotion ? { duration: 0 } : { duration: 0.22 },
    },
    exit: {
      opacity: 0,
      transition: prefersReducedMotion ? { duration: 0 } : { duration: 0.18 },
    },
  } as const;

  const modalContentVariants = {
    hidden: prefersReducedMotion
      ? { opacity: 1 }
      : { opacity: 0, scale: 0.965, y: 16 },
    show: prefersReducedMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { type: "spring", stiffness: 260, damping: 24 },
        },
    exit: prefersReducedMotion
      ? { opacity: 1 }
      : { opacity: 0, scale: 0.985, y: 10, transition: { duration: 0.18 } },
  } as const;

  return (
    <div className="flex flex-row-reverse h-full overflow-hidden">
      <motion.section
        className="w-full md:w-1/2 bg-customGray ml-auto overflow-y-scroll justify-center"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={sectionEnter}
      >
        <div className="grid place-items-center mt-auto p-1">
          {list.map((category) =>
            category.subs.map((subcategory) => {
              const hasEntered =
                seenRef.current[subcategory.id] || isVisible[subcategory.id];

              return (
                <motion.div
                  key={subcategory.id}
                  className="my-5 relative"
                  ref={getReferenceById(subcategory.id)}
                  variants={subcategoryVariants}
                  initial="hidden"
                  animate={hasEntered ? "show" : "hidden"}
                >
                  <span className="flex justify-center">
                    <motion.h1
                      id={subcategory.id.toString()}
                      className="text-3xl text-customBlue"
                      variants={titleVariants}
                      initial="hidden"
                      animate={hasEntered ? "show" : "hidden"}
                    >
                      {subcategory.title}
                    </motion.h1>
                  </span>

                  <div className="flex flex-wrap justify-start mt-8 sm:ml-20 md:ml-1 lg:ml-14 xl:ml-14">
                    {subcategory.imagesTitle.map((image, idx) => (
                      <motion.div
                        key={image.id}
                        className="m-1 cursor-pointer relative image-container"
                        variants={imageItemVariants}
                        initial="hidden"
                        animate={hasEntered ? "show" : "hidden"}
                        transition={
                          prefersReducedMotion
                            ? undefined
                            : { delay: Math.min(0.35, idx * 0.03) }
                        }
                        whileHover={
                          prefersReducedMotion
                            ? undefined
                            : { scale: 1.02, y: -2 }
                        }
                        whileTap={
                          prefersReducedMotion ? undefined : { scale: 0.99 }
                        }
                        onClick={() => openModal(image)}
                      >
                        {/* Shared-element feel بدون دست زدن به استایل */}
                        <motion.div layoutId={`img-${image.id}`}>
                          <div className="square-image-container">
                            <img
                              className="mainImage"
                              width={250}
                              height={250}
                              src={image.thumbnail}
                              alt={image.title}
                            />
                          </div>
                        </motion.div>

                        <div className="absolute top-0 left-0 w-full h-full bg-customBlue bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity hover:opacity-100">
                          <motion.span
                            className="text-white text-4xl"
                            initial={false}
                            animate={
                              prefersReducedMotion
                                ? { opacity: 1 }
                                : { opacity: 1 }
                            }
                            whileHover={
                              prefersReducedMotion ? undefined : { scale: 1.06 }
                            }
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 30,
                            }}
                          >
                            +
                          </motion.span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </motion.section>

      <motion.section
        className="collapse md:visible w-0 md:w-1/2 bg-customBlue ml-auto h-full justify-center overflow-hidden"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={sectionEnter}
      >
        <div className="grid place-items-center h-44 p-1 mt-44">
          <motion.h1
            className="text-3xl text-white py-5"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={
              prefersReducedMotion
                ? { opacity: 1 }
                : {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 260, damping: 26 },
                  }
            }
          >
            Illustration Projects
          </motion.h1>

          <span className="px-5 w-96">
            <AnimatePresence mode="wait" initial={false}>
              {currentVisible ? (
                <motion.div
                  key={`${currentVisible.category.id}-${currentVisible.subcategory.id}`}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                  animate={
                    prefersReducedMotion
                      ? { opacity: 1 }
                      : {
                          opacity: 1,
                          y: 0,
                          transition: {
                            type: "spring",
                            stiffness: 280,
                            damping: 26,
                          },
                        }
                  }
                  exit={
                    prefersReducedMotion
                      ? { opacity: 1 }
                      : { opacity: 0, y: -8, transition: { duration: 0.14 } }
                  }
                >
                  <h1 className="text-xl text-white py-5">
                    {currentVisible.category.title}
                  </h1>
                  <div key={currentVisible.category.id}>
                    <a
                      key={currentVisible.subcategory.id}
                      href={`#${currentVisible.subcategory.id}`}
                    >
                      <h1 className="text-xl text-white pl-5">
                        {currentVisible.subcategory.title}
                      </h1>
                    </a>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </span>
        </div>
      </motion.section>

      {/* مودال فقط یک‌بار رندر می‌شه (ظریف/زیبا با AnimatePresence) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            onClick={handleModalClick}
            className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-black bg-opacity-80"
            ref={modalRef}
            variants={modalBackdropVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <motion.div
              variants={modalContentVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              layoutId={`img-${selectedImage.id}`}
            >
              <Image
                width={450}
                height={450}
                className="max-w-5xl max-h-5xl"
                src={selectedImage.fullSize}
                alt={selectedImage.title}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Project;
