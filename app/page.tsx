import { name } from "lib/info";

export default async function HomePage() {
  return (
    <section className="flex items-center justify-center h-screen   ">
      <div className="flex justify-start  flex-col">
        <h1 className="text-3xl md:text-7xl  text-customBlue">{name}</h1>
        <h1 className="text-2xl md:text-4xl text-customBlue mt-4">
          Graphic designer and Illustrator
        </h1>
      </div>
    </section>
  );
}
