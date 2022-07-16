let gridSize = Number(prompt("Input size sketch square:"));
if (gridSize > 100) {
  gridSize = 100;
}
function changecolor(e) {
  e.target.style.backgroundColor = "black";
}
const gridCo = document.querySelector(".grid-containers");
gridCo.style.gridTemplateColumns = `repeat(${gridSize},auto)`;
gridCo.style.gridTemplateRows = `repeat(${gridSize},auto)`;
for (let i = 0; i < gridSize * gridSize; i++) {
  let gridelement = document.createElement("div");
  gridelement.setAttribute(
    "style",
    `width:${450 / gridSize}px;height:${450 / gridSize}px`
  );
  gridelement.addEventListener("mouseover", changecolor);
  gridelement.classList.add("grid-element");
  gridCo.appendChild(gridelement);
}
