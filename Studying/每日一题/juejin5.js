// 5. 哪个选项是不正确的 ?
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
// A: mouse.bird.size               //yes
// B: mouse[bird.size]
// C: mouse[bird["size"]]
// D: All of them are valid