/*
*Author: Kai Pagan <kkpagan@ucsc.edu>>
*Created: June 4th
*/

function toggleText(elementId) {
  var element = document.getElementById(elementId);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
