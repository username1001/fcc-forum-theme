document.body.style.backgroundColor = "#333";
document.getElementsByClassName("d-header clearfix")[0].style.backgroundColor =
  "#444";

document.getElementById("reply-control").style.backgroundColor = "#555";

// Changes the color of the numbers for: Replies/Views
const changeNumberColor = () => {
  const number = document.getElementsByClassName("number");
  for (let i = 0; i < number.length; i++) {
    number[i].style.color = "gold";
  }
};
changeNumberColor();

// Changes the color of the topic's title
const changeLinkColor = () => {
  const title = document.getElementsByClassName("title");
  for (let i = 0; i < title.length; i++) {
    title[i].style.color = "gold";
  }
};
changeLinkColor();

// When new data is rendered, the functions don't target those elements.
// This scroll event accomplishes that.
window.addEventListener("scroll", () => {
  changeNumberColor();
  changeLinkColor();
});
