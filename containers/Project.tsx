"use client";

import { useIntersectionObserver } from "utils/useIntersectionObserver";
import { useRef, useState } from "react";
import list from "../lib/List";
import { ImageData } from "Interfaces";

const Project = () => {
  const numElements = list.reduce((acc, item) => acc + item.subs.length, 1);
  const refs = Array.from({ length: numElements }, () =>
    useRef<HTMLDivElement | null>(null)
  );
  const entries = refs.map((ref) => useIntersectionObserver(ref, {}));
  const isVisible = entries.map((entry) => !!entry?.isIntersecting);

  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

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
  return (
    <div className="flex flex-row-reverse h-full overflow-hidden">
      <section className="w-full md:w-1/2 bg-customGray ml-auto overflow-y-scroll justify-center">
        <div className="grid  place-items-center mt-auto p-1">
          {list.map((category) =>
            category.subs.map((subcategory) => (
              <div
                key={subcategory.id}
                className="my-5 relative"
                ref={getReferenceById(subcategory.id)}
              >
                <span className="flex justify-center">
                  <h1
                    id={subcategory.id.toString()}
                    className="text-3xl text-customBlue"
                  >
                    {subcategory.title}
                  </h1>
                </span>
                <div className="flex flex-wrap justify-center">
                  {subcategory.imagesTitle.map((image) => (
                    <div key={image.id} className="m-3 cursor-pointer relative">
                      <img
                        className="object-fill"
                        width={200}
                        height={200}
                        src={image.thumbnail}
                        alt={image.title}
                        onClick={() => openModal(image)}
                      />
                      <div
                        className="absolute top-0 left-0 w-full h-full bg-customBlue bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity hover:opacity-100"
                        onClick={() => openModal(image)}
                      >
                        <span className="text-white text-4xl">+</span>
                      </div>
                    </div>
                  ))}
                </div>
                {selectedImage && (
                  <div
                    onClick={handleModalClick}
                    className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center  bg-black bg-opacity-80"
                    ref={modalRef}
                  >
                    <img
                      className="max-w-5xl max-h-5xl"
                      src={selectedImage.fullSize}
                      alt={selectedImage.title}
                    />
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </section>
      <section className="collapse md:visible w-0 md:w-1/2 bg-customBlue ml-auto h-full justify-center overflow-hidden">
        <div className="grid  place-items-center mt-auto h-full p-5">
          <span className="px-5">
            <h1 className="text-3xl text-white py-5">Project</h1>
            {list.map((category) => (
              <div key={category.id}>
                <h1
                  className={`text-xl text-white py-5 ${
                    category.subs.some(
                      (subcategory) => isVisible[subcategory.id]
                    ) && "line-through"
                  }`}
                >
                  {category.title}
                </h1>
                {category.subs.map((subcategory) => (
                  <a key={subcategory.id} href={`#${subcategory.id}`}>
                    <h1
                      className={`text-xl text-white pl-5 ${
                        isVisible[subcategory.id] && "line-through"
                      }`}
                    >
                      {subcategory.title}
                    </h1>
                  </a>
                ))}
              </div>
            ))}
          </span>
        </div>
      </section>
    </div>
  );
};

export default Project;
