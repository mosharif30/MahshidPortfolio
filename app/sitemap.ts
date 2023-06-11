export default async function sitemap() {
  const routes = ["", "/about", "/project", "contact"].map((route) => ({
    url: `https://mahshidasoudehkhah.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));
  return [...routes];
}
