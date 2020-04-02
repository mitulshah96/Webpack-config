import _ from "lodash";
import "./style.css";
import printMe from "./print";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  btn.innerHTML = "click me and check the console";
  btn.onclick = printMe;
  element.classList.add("hello");

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
