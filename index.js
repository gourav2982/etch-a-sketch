let gridSize = Number(prompt("Input size sketch square:"));
if (gridSize > 100) {
  gridSize = 100;
}

const gridCo = document.querySelector(".grid-containers");
gridCo.style.gridTemplateColumns = `repeat(${gridSize},auto)`;
gridCo.style.gridTemplateRows = `repeat(${gridSize},auto)`;


function changecolorBlack(e) {
  e.target.style.backgroundColor = "black";
}

function changecolorRed(e){
  e.target.style.backgroundColor = "red";
}

function changecolorBlue(e){
  e.target.style.backgroundColor = "blue";
}

function changecolorWarm(e){
  let rand = Math.floor(Math.random()*4);
  if(rand == 0){
    e.target.style.backgroundColor = "red";
  }
  else if(rand == 1){
    e.target.style.backgroundColor = "#E63D18";
  }
  else if(rand == 2){
    e.target.style.backgroundColor = "#F56445";
  }
  else if(rand == 3){
    e.target.style.backgroundColor = "#D07866";
  }
  else if(rand == 4){
    e.target.style.backgroundColor = "#F79985";
  }
  
}

function changecolorCold(e){
  let rand = Math.floor(Math.random()*4);
  if(rand == 0){
    e.target.style.backgroundColor = "#0D8295";
  }
  else if(rand == 1){
    e.target.style.backgroundColor = "#23E1FF";
  }
  else if(rand == 2){
    e.target.style.backgroundColor = "#065483";
  }
  else if(rand == 3){
    e.target.style.backgroundColor = "#15426F";
  }
  else if(rand == 4){
    e.target.style.backgroundColor = "#1030D5";
  }
}


let erasebtn=document.querySelector(".erasebtn");
let blackbtn=document.querySelector(".blackbtn");

blackbtn?.addEventListener("click",setblack)
function setblack(){
  
  setErase()
  for (let i = 0; i < gridSize * gridSize; i++) {
    let gridelement = document.createElement("div");
    gridelement.setAttribute(
      "style",
      `width:${450 / gridSize}px;height:${450 / gridSize}px;border-radius:2px`
      );
        gridelement.addEventListener("mouseover", changecolorBlack);
      gridelement.classList.add("grid-element");
      gridCo.appendChild(gridelement);
    }
}

let redbtn=document.querySelector(".redbtn");
redbtn?.addEventListener("click",setred)
function setred(){
  
  setErase()
  for (let i = 0; i < gridSize * gridSize; i++) {
    let gridelement = document.createElement("div");
    gridelement.setAttribute(
      "style",
      `width:${450 / gridSize}px;height:${450 / gridSize}px;border-radius:2px`
      );
        gridelement.addEventListener("mouseover", changecolorRed);

      gridelement.classList.add("grid-element");
      gridCo.appendChild(gridelement);
    }
}


let bluebtn=document.querySelector(".bluebtn");
bluebtn?.addEventListener("click",setblue)
function setblue(){
  
  setErase()
  for (let i = 0; i < gridSize * gridSize; i++) {
    let gridelement = document.createElement("div");
    gridelement.setAttribute(
      "style",
      `width:${450 / gridSize}px;height:${450 / gridSize}px;border-radius:2px`
      );
        gridelement.addEventListener("mouseover", changecolorBlue); 
      gridelement.classList.add("grid-element");
      gridCo.appendChild(gridelement);
    }
}


let warmbtn=document.querySelector(".warmbtn");
warmbtn?.addEventListener("click",setwarm)
function setwarm(){
  
  setErase()
  for (let i = 0; i < gridSize * gridSize; i++) {
    let gridelement = document.createElement("div");
    gridelement.setAttribute(
      "style",
      `width:${450 / gridSize}px;height:${450 / gridSize}px;border-radius:2px`
      );
        gridelement.addEventListener("mouseover", changecolorWarm); 
      gridelement.classList.add("grid-element");
      gridCo.appendChild(gridelement);
    }
}



let coldbtn=document.querySelector(".coldbtn");
coldbtn?.addEventListener("click",setcold)
function setcold(){
  
  setErase()
  for (let i = 0; i < gridSize * gridSize; i++) {
    let gridelement = document.createElement("div");
    gridelement.setAttribute(
      "style",
      `width:${450 / gridSize}px;height:${450 / gridSize}px;border-radius:2px`
      );
        gridelement.addEventListener("mouseover", changecolorCold); 
      gridelement.classList.add("grid-element");
      gridCo.appendChild(gridelement);
    }
}

erasebtn?.addEventListener("click",setErase)
function setErase(){
   while(gridCo.firstChild){
    gridCo?.removeChild(gridCo.lastChild)
   }
}


