function setBackground(bgLayer) {
  // Get window dimensions
  const width = document.documentElement.offsetWidth;
  const height = document.documentElement.offsetHeight;
  console.log(`width: ${width}, height: ${height}`)

  var randomBackground = new Image();
  // Wait for image to load then start fade in
  randomBackground.addEventListener("load", () => {
    bgLayer.style.background = `url('${randomBackground.src}') no-repeat center`;
    bgLayer.classList.add("fade-in");
  });
  // Get the background
  randomBackground.src = `https://source.unsplash.com/featured/${width}x${height*1.5}/?clouds`;
}

const bgLayer = document.getElementById("background");
setBackground(bgLayer);
