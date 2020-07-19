import { chart } from "./chart.js";


function buildHTML() {
  // Construct HTML elements
  const main = document.getElementById("main");
  // For each key in object create a div with a head and a list
  for (const [key, value] of Object.entries(chart)) {
    // Create elements
    let div = document.createElement("div");
    let head = document.createElement("h2");
    head.classList.add("subheader");
    let ul = document.createElement("ul");

    // Create header from key
    head.appendChild(document.createTextNode(key));

    // For each item in list create a li and add to the ul
    for (const subItem of value) {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(subItem));
      ul.appendChild(li);
    }

    // Add the head and the ul to the div
    div.appendChild(head);
    div.appendChild(ul);
    main.appendChild(div);
  }
}


function setBackground() {
  // Get window dimensions
  const width =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const height =
    window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  // Request random image with those dimensions
  document.body.style.background =
    `linear-gradient( rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.92) ), ` +
    `url('https://source.unsplash.com/featured/${width}x${height}/?nature/') ` +
    `no-repeat fixed center`;
}


buildHTML();
setBackground();
