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

// Sav's random fact generator
// var personFacts = {
//   fact1: "True",
//   fact2: "True",
//   fact3: "True",
// };

// var robotFacts = {
//   fact1: "False",
//   fact2: "False",
//   fact3: "False",
// };

// function getRandomFact() {
//   var values = Object.values(personFacts);
//   return values[Math.floor(Math.random() * values.length)];
// }

// $(document).ready(function () {
//   $(".element").hover(
//     function (event) {
//       var randomFact = getRandomFact();
//       // debug
//       console.log("Random Fact:", randomFact);
//       $("#popup").text(randomFact).css({
//         display: "block",
//       });
//     },
//     function () {
//       $("#popup").hide();
//     }
//   );
// });

var personFacts = {
  fact1:
    "AI is only as good as the data it is trained on, so if the data is biased, the AI will also be biased.",
  fact2:
    "Self-driving cars rely on AI to navigate and make decisions on the road.",
  fact3:
    "AI algorithms can analyse images and create new artwork based on patterns and styles that it has learned.",
  fact4:
    "Many people prefer to talk to AI bots with female voices, such as Alexa and Siri.",
  fact5:
    "Some say that AI could become smarter than humans and surpass human intelligence by 2045.",
  fact6:
    "AI could affect the wealth gap, economic disparity, and consumer choices, and have a huge impact on society's economic progress.",
  fact7:
    "AI robots can rebuild themselves quickly and easily if they malfunction or have a fault.",
  fact8: "WesBot is a digital copy of Wes' brain.",
  fact9:
    "AI-powered “animals” are now joining the growing list of robots on the market.",
};

//this function takes all parts of an object's values and puts them into an array
function splitObjectValues(obj) {
  return Object.values(obj).flatMap((value) =>
    typeof value === "string" ? value.split(" ") : []
  );
}

//var robotFacts performs this function with personFacts
var robotFacts = splitObjectValues(personFacts);

//getRandomFact cycles through personFacts' values
function getRandomFact(facts) {
  var values = Object.values(facts);
  return values[Math.floor(Math.random() * values.length)];
}

//when person or robot is hovered over by a mouse, a popup with facts will appear
$(document).ready(function () {
  $(".element").hover(
    function (event) {
      var randomFact = getRandomFact(personFacts);
      // debug
      console.log("Random Fact (Person):", randomFact);
      $("#popup").text(randomFact).css({
        display: "block",
      });
    },
    function () {
      $("#popup").hide();
    }
  );

  /*  $(".elementRobot").hover(
    function (event) {
      var randomFact = getRandomFact(robotFacts);
      // debug
      console.log("Random Fact (Robot):", randomFact);
      $("#popup").text(randomFact).css({
        display: "block",
      });
    },
    function () {
      $("#popup").hide();
    }
  ); */

  $(".elementRobot").hover(
    function (event) {
      const shuffled = robotFacts.sort(() => 0.5 - Math.random());

      // Get sub-array of first n elements after shuffled
      let selected = shuffled.slice(0, 10);

      robotString = selected.toString();

      robotWord = robotString.replace(/,/g, " ");
      console.log("Random Robot String: ", robotWord);

      $("#popup").text(robotWord).css({
        display: "block",
      });
    },
    function () {
      $("#popup").hide();
    }
  );
});
