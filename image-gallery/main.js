const current = document.getElementById("current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.5;

imgs[0].style.opacity = opacity;

const imgClick = e => {
  imgs.forEach(img => {
    img.style.opacity = 1;
  });
  current.src = e.target.src;
  current.classList.add("fade-in");
  e.target.style.opacity = opacity;
  setTimeout(() => current.classList.remove("fade-in"), 500);
};

imgs.forEach(img => {
  img.addEventListener("click", imgClick);
});
