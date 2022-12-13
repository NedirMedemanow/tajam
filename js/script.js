let menuBar = document.getElementById("menu");

document.addEventListener("click", (e) => {
  const target = e.target;
  toggleIcon(target);
  showMenu(target);
});

function toggleIcon(target) {
  if (target.id == "menu") {
    target.classList.add("hide");
  }
  if (target.id == "close") {
    let previousElement = target.previousElementSibling;
    previousElement.classList.remove("hide");
  }
}

function showMenu(target) {
  let parent = target.parentElement;
  let nextElement = parent.nextElementSibling;
  if (target.id == "menu") {
   nextElement.classList.add("show");
  }
  if (target.id == "close") {
   nextElement.classList.remove("show");
  }
}
