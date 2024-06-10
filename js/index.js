// index.js -
// Author: Manuel S Marshutz <mmarshut@ucsc.edu>, ...
// Date: 26 May 2024
// Background Nodes (CONTORLS for background) source: https://github.com/rohanrhu/nodes.js/blob/master/js/nodes.js
var nodesjs = new NodesJs({
  id: "nodes",
  width: window.innerWidth,
  height: window.innerHeight,
  particleSize: 1,
  lineSize: 0.5,
  particleColor: [255, 255, 255],
  lineColor: [255, 255, 255],
  backgroundFrom: [27, 45, 72],
  backgroundTo: [44, 69, 107],
  backgroundDuration: 8000,
  nobg: false,
  number: window.hasOwnProperty("orientation") ? 30 : 100,
  speed: 15,
  pointerCircleRadius: 150,
});

// old script which I edited to make both the "head" & "body" enlarge at the same time.
// document.addEventListener("DOMContentLoaded", function () {
//   const enlargeButtons = document.querySelectorAll(".enlarge");

//   enlargeButtons.forEach(function (button) {
//     button.addEventListener("mouseenter", function () {
//       const parentBox = button.closest(".box-1");
//       const overlay = parentBox.querySelector(".overlay");
//       overlay.classList.add("darken-background");
//     });

//     button.addEventListener("mouseleave", function () {
//       const parentBox = button.closest(".box-1");
//       const overlay = parentBox.querySelector(".overlay");
//       overlay.classList.remove("darken-background");
//     });
//   });
// });

// new script which has been simplified! (NOT WORKING, this was to darken everything that's not activley being hovered over)
document.addEventListener("DOMContentLoaded", function () {
  const box1 = document.querySelector(".box-1");
  const overlay = box1.nextElementSibling;

  console.log("box1:", box1);
  console.log("overlay:", overlay);

  box1.addEventListener("mouseenter", function () {
    console.log("mouseenter");
    overlay.classList.add("darken-background");
  });

  box1.addEventListener("mouseleave", function () {
    console.log("mouseleave");
    overlay.classList.remove("darken-background");
  });
});

// JavaSCript for Hover popup content; W3SCHOOLS
document.getElementById("element").addEventListener("mouseover", function () {
  document.getElementById("popup").style.display = "block";
});

document.getElementById("element").addEventListener("mouseout", function () {
  document.getElementById("popup").style.display = "none";
});

// slide animation for boxes source: https://www.youtube.com/watch?v=peFOHcbEUig&ab_channel=WebDevMadeEasy

const boxes = document.querySelectorAll(".information-section");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

/*tracery*/



var robot = tracery.createGrammar ({
  'fact': ['fact 1', 'fact 2', 'fact 3'],
  'buzzword': ['buzzword 1', 'buzzword 2', 'buzzword 3'],
  'robotnoise': ['noise 1', 'noise 2', 'noise 3'],
  'text' : ['Robots are #buzzword# because #fact#. #robotnoise# !']
});

console.log(robot);

