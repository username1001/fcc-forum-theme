/**
** To change the colors to your preference, modify wherever you see color being set. 
** For example: 
** title[i].style.color = "gold"; 
** Simply edit where it says gold, to whatever color you'd like.
** 
** Written by: Matt Fay. 2017.
**
** NOTE: I've commented out the calls to the functions which change the colors to gold.
**
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

// These colors aren't really "nice", and a little buggy. 
// For example, they don't change the color of newly rendered elements.
// You can remove these following lines if that bothers you.
// Changes the color of the numbers for: Replies/Views
const changeNumberColor = () => {
  const number = document.getElementsByClassName("number");
  for (let i = 0; i < number.length; i++) {
    number[i].style.color = "gold";
  }
};
// changeNumberColor();

// Changes the color of the topic's title
const changeLinkColor = () => {
  const title = document.getElementsByClassName("title");
  for (let i = 0; i < title.length; i++) {
    title[i].style.color = "gold";
  }
};
// changeLinkColor();

// When new data is rendered, the functions don't target those elements.
// This scroll event accomplishes that.
window.addEventListener("scroll", () => {
//  changeNumberColor();
//  changeLinkColor();
});
