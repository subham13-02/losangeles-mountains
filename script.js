const section2image = document.getElementById("section2-img");
const mountain1 = document.getElementById("mountain1");
mountain1.setAttribute("class", "isActive");
mountain1.className === "isActive"
  ? (section2image.src = "./assets/images/photo-1417021423914-070979c8eb34.png")
  : "";

mountain1.addEventListener("click", handleClick);
const mountain2 = document.getElementById("mountain2");
mountain2.removeAttribute("class");
mountain2.addEventListener("click", handleClick);

function handleClick(e) {
  console.log(e.target.innerText);
  let element = e.target.innerText;
  if (element === "MOUNTAIN 1") {
    mountain1.setAttribute("class", "isActive");
    section2image.src = "./assets/images/photo-1417021423914-070979c8eb34.png";
    mountain2.removeAttribute("class");
  } else {
    mountain2.setAttribute("class", "isActive");
    section2image.src = "./assets/images/photo-1414449381078-c7768b8f19b8.png";
    mountain1.removeAttribute("class");
  }
}
