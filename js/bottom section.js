/*
*Author: Kai Pagan <kkpagan@ucsc.edu>>
*Created: June 4th
*/

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content*/
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = fucntion(event) {
if (!event.target.matches( '.dropbtn')) {
  var dropdowns = document.getElementsByClssName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns. lengths; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contain('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}
