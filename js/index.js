// index.js -
// Author: Manuel S Marshutz <mmarshut@ucsc.edu>, ...
// Date: 26 May 2024
// Background Nodes (CONTORLS for background) source: https://github.com/rohanrhu/nodes.js/blob/master/js/nodes.js
var nodesjs = new NodesJs({
  id: "nodes",
  width: window.innerWidth,
  height: window.innerHeight,
  particleSize: 2,
  lineSize: 1,
  particleColor: [255, 255, 255, 0.3],
  lineColor: [255, 255, 255],
  backgroundFrom: [45, 106, 79],
  backgroundTo: [82, 183, 136],
  backgroundDuration: 8000,
  nobg: false,
  number: window.hasOwnProperty("orientation") ? 30 : 100,
  speed: 20,
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

// JavaSCript for Hover popup content
document.getElementById("element").addEventListener("mouseover", function () {
  document.getElementById("popup").style.display = "block";
});

document.getElementById("element").addEventListener("mouseout", function () {
  document.getElementById("popup").style.display = "none";
});
