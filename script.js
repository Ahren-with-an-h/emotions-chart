function setBackground(bgLayer) {
  // Get window dimensions
  const width = document.getElementById("content").scrollWidth;
  const height = document.getElementById("title").scrollHeight + document.getElementById("content").scrollHeight

  var randomBackground = new Image();
  // Wait for image to load then start fade in
  randomBackground.addEventListener("load", () => {
    bgLayer.style.background = `url('${randomBackground.src}') no-repeat center`;
    bgLayer.classList.add("fade-in");
  });
  // Get the background
  randomBackground.src = `https://source.unsplash.com/featured/${width}x${height}/?clouds`;
}

const bgLayer = document.getElementById("background");
setBackground(bgLayer);
