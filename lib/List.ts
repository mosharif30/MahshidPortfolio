import erfanImages from "./imagesJson/erfanImages.json";
import chichastImages from "./imagesJson/chichastImages.json";
import khayyamImages from "./imagesJson/khayyamImages.json";
import roostaImages from "./imagesJson/roostaImages.json";
import posterImages from "./imagesJson/posterImages.json";
const list = [
  {
    id: 1,
    title: "book illustration",
    subs: [
      { id: 1, title: "ye zarre erfan", imagesTitle: erfanImages },
      { id: 2, title: "chichast", imagesTitle: chichastImages },
      { id: 3, title: "khayyam", imagesTitle: khayyamImages },
      { id: 4, title: "roostaye pellekani", imagesTitle: roostaImages },
    ],
  },
  {
    id: 5,
    title: "Graphic design",
    subs: [{ id: 5, title: "posters", imagesTitle: posterImages }],
  },
];
export default list;
