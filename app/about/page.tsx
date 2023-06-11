import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Mahshid Asoudehkhah",
};

export default function AboutPage() {
  return (
    <section className="w-full md:w-1/2 bg-customBlue ml-auto h-full justify-center">
      <div className="grid  place-items-center mt-auto h-full p-5">
        <span className="px-5">
          <h1 className=" text-3xl text-white ">personal view</h1>
          <p className="my-5 text-white dark:text-neutral-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            delectus at, ab exercitationem incidunt, tempore quidem asperiores
            quisquam architecto rerum quia! Ipsa soluta expedita, porro, debitis
            doloribus aperiam odio corrupti exercitationem architecto numquam
            quaerat doloremque officia obcaecati iusto reprehenderit maiores
            veritatis ullam. Nobis hic animi porro laboriosam, eaque eum ullam!
          </p>
        </span>
      </div>
    </section>
  );
}
