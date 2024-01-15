const contents = document.querySelectorAll("body .contents .content");

window.addEventListener("scroll", toDo);
toDo();
function toDo() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  contents.forEach((content) => {
    const contentTop = content.getBoundingClientRect().top;
    if (contentTop < triggerBottom) {
      content.classList.add("show");
    } else {
      content.classList.remove("show");
    }
  });
}
