
let close = document.getElementsByClassName("close");
function deleteElement() {
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

let isClick = false;
function change() {
  let sortButton = document.querySelector('.sortButton');
  if (isClick) {
    sortButton.src = "images/sortlowblack.svg";
  } else {
    sortButton.src = "images/sortupblack.svg";
  }
  isClick = !isClick;
}
function onHover() {
  let sortButton = document.querySelector('.sortButton');
  if (isClick) {
    sortButton.src = "images/sortupblack.svg";
  } else {
    sortButton.src = "images/sortlowblack.svg";
  }
}
function offHover() {
  let sortButton = document.querySelector('.sortButton');
  if (isClick) {
    sortButton.src = "images/sortupgrey.svg";
  } else {
    sortButton.src = "images/sortlowgrey.svg";
  }
}

function sortList() {
  let shouldSwitch;
  let i;
  let switching;
  let b;
  let dir;
  let switchcount = 0;
  let list = document.querySelector(".list-element");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("LI");
    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if (dir == "asc") {
        if (b[i].innerText.toLowerCase() > b[i + 1].innerText.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (b[i].innerText.toLowerCase() < b[i + 1].innerText.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function newElement() {
  let listElements = document.getElementById("myUL");
  let li = document.createElement("li");
  listElements.appendChild(li);
  let p = document.createElement("p");
  p.className = "element-text";
  li.appendChild(p)
  let input = document.createElement("input");
  input.className = "element-input";
  input.setAttribute("onmouseover", "reservation()");
  input.type = "text";
  li.appendChild(input);
  let span = document.createElement("span");
  let x = document.createElement("img");
  span.className = "close";
  span.setAttribute("onmouseover", "deleteElement()");
  x.src = 'images/cross.svg';
  x.className = "delete";
  span.appendChild(x);
  li.appendChild(span);
  console.log();
}

let el = document.getElementsByClassName("element-input");
function reservation() {
  for (let i = 0; i < el.length; i++) {
    el[i].onchange = function () {
      let x = el[i];
      let parentLi = this.parentElement;
      let p = parentLi.firstElementChild;
      p.append(this.value);
      p.style.display = "flex";
      x.style.display = "none";
    }
  }
}