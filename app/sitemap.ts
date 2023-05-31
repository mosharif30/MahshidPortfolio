export default async function sitemap() {
  const routes = [
    "",
    "/about",
    "/Illustration",
    "/Illustration/book",
    "/Illustration/practical",
    "/GraphicDesign",
  ].map((route) => ({
    url: `https://mahshidasoudehkhah.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));
  return [...routes];
}
