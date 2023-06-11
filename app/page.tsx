import { name } from "lib/info";

export default async function HomePage() {
  return (
    <section className="h-screen flex items-center justify-center">
      <h1 className="text-3xl md:text-5xl text-customBlue">{name}</h1>
    </section>
  );
}
