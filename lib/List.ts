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
      { id: 1, title: "A bit Theosophy", imagesTitle: erfanImages },
      { id: 2, title: "Secret of the Chichast`s Monster", imagesTitle: chichastImages },
      { id: 3, title: "khayyam", imagesTitle: khayyamImages },
      { id: 4, title: "Staircase Village", imagesTitle: roostaImages },
    ],
  },
  {
    id: 5,
    title: "Graphic design",
    subs: [{ id: 5, title: "posters", imagesTitle: posterImages }],
  },
];
export default list;
