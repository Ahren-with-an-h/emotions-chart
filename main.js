import { chart } from "./chart";

const main = document.getElementById("main");

// For each key in object create a div with a head and a list
for (const [key, value] of Object.entries(chart)) {
  // Create elements
  let div = document.createElement("div");
  let head = document.createElement("h2");
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
