/**
** Written by: Matt Fay. 2017.
**/

"use strict";
// Changes the background color of the page.
(function darkTheme() {
  document.body.style.backgroundColor = "#333";
  document.getElementsByClassName(
    "d-header clearfix"
  )[0].style.backgroundColor =
    "#444";
  document.getElementById("reply-control").style.backgroundColor = "#555";
})();
