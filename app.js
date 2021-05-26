document.addEventListener("DOMContentLoaded", button);
function button() {
  let button = document.createElement("button");

  let btnText = document.createTextNode("Add square!");

  button.className = "button";

  button.appendChild(btnText);

  document.body.appendChild(button);

  let id = 0;

  button.addEventListener("click", buttonClick);
  function buttonClick() {
    id++;
    let square = document.createElement("div");
    square.id = id;
    square.className = "box";

    let p = document.createElement("p");
    let squareText = document.createTextNode(id);
    p.appendChild(squareText);
    square.appendChild(p);
    document.body.appendChild(square);
    p.style.opacity = "0";

    square.addEventListener("mouseenter", hover);
    function hover() {
      p.style.opacity = "1";
    }

    square.addEventListener("mouseleave", noHover);
    function noHover() {
      p.style.opacity = "0";
    }

    square.addEventListener("click", squareClick);
    function squareClick() {
      let num = Math.floor(Math.random() * 21);
      if (num === 0) {
        square.style.backgroundColor = "Teal";
      } else if (num === 1) {
        square.style.backgroundColor = "Aqua";
      } else if (num === 2) {
        square.style.backgroundColor = "Purple";
      } else if (num === 3) {
        square.style.backgroundColor = "Green";
      } else if (num === 4) {
        square.style.backgroundColor = "Indigo";
      } else if (num === 5) {
        square.style.backgroundColor = "Violet";
      } else if (num === 6) {
        square.style.backgroundColor = "SpringGree";
      } else if (num === 7) {
        square.style.backgroundColor = "Fuchsia";
      } else if (num === 8) {
        square.style.backgroundColor = "CadetBlue";
      } else if (num === 9) {
        square.style.backgroundColor = "AquaMarine";
      } else if (num === 10) {
        square.style.backgroundColor = "DarkMagenta";
      } else if (num === 11) {
        square.style.backgroundColor = "FireBrick";
      } else if (num === 12) {
        square.style.backgroundColor = "DarkOrange";
      } else if (num === 13) {
        square.style.backgroundColor = "DeepPink";
      } else if (num === 14) {
        square.style.backgroundColor = "Gold";
      } else if (num === 15) {
        square.style.backgroundColor = "LawnGreen";
      } else if (num === 16) {
        square.style.backgroundColor = "LightSeaGreen";
      } else if (num === 17) {
        square.style.backgroundColor = "MediumBlue";
      } else if (num === 18) {
        square.style.backgroundColor = "OrangeRed";
      } else if (num === 19) {
        square.style.backgroundColor = "SkyBlue";
      } else if (num === 20) {
        square.style.backgroundColor = "tomato";
      }
    }

    square.addEventListener("dblclick", squareDoubleClick);
    function squareDoubleClick() {
      if (square.id % 2 === 0) {
        let elementID = parseInt(square.id) + 1;
        let element = document.getElementById(elementID);
        if (element == null) {
          alert("Square with ID " + elementID + " does not exist.");
        } else {
          element.parentNode.removeChild(element);
        }
      } else {
        let elementID = parseInt(square.id) - 1;
        let element = document.getElementById(elementID);
        if (element == null) {
          alert("Square with ID " + elementID + " does not exist.");
        } else {
          element.parentNode.removeChild(element);
        }
      }
    }
  }
}
