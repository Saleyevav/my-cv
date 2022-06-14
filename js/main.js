setScrollListener = scrollListener();
scrollListener();

typeWriter("hi", 500, "hi", 0);
setTimeout(typeWriter, 1000, "my-name", 100, "my name is alex", 0);
setTimeout(typeWriter, 3200, "i-am", 100, "i am a web developer", 0);

const bubConnection = bubblesConnection("bubblesConnection", {
  colorSet: ["", "#000000"],
  minRadius: 1,
  maxRadius: 2,
  threshold: 150,
});
bubConnection();

const bubConnectionMini = bubblesConnection("bubblesConnectionMini", {
  colorSet: ["", "#000000"],
  minRadius: 1,
  maxRadius: 1,
  threshold: 30,
});
bubConnectionMini();

const canvasBub = canvasBubbles("canvasBubbles", {
  colorSet: ["", "#ffffff", "#ffffff", "#ffffff"],
  mouseRadius: 100,
  countBubbles: 500,
  minRadius: 1,
  maxRadius: 1,
  trail: true,
});
canvasBub();

const canvasBubMini = canvasBubbles("canvasBubblesMini", {
  colorSet: ["", "#d32821", "#53a66f", "#5db5f8"],
  mouseRadius: 20,
  countBubbles: 100,
  minRadius: 1,
  maxRadius: 3,
  maxSpeed: 0.5,
  resizeMaxRadius: 5,
});
canvasBubMini();

const matrix = matrixRain("canvasRain");
const matrixMini = matrixRain("canvasRainMini", { fontSize: 8, fps: 14 });
matrix();
matrixMini();
