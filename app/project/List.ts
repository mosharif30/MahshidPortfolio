import erfanImages from "./erfanImages.json";
import chichastImages from "./chichastImages.json";
import khayyamImages from "./khayyamImages.json";
import roostaImages from "./roostaImages.json";
import posterImages from "./posterImages.json";
const list = [
  {
    id: 1,
    title: "book ill",
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
