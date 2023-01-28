import { cardMarkup } from "./pages/main-page/portfolio.js";

const projectContainer = document.querySelector(".card-wrapper");
const aboutContainer = document.querySelector(".about-section");
const aboutMe = document.querySelector(".about-body");

const downArrow = document.querySelector(".down-arrow");

const renderCard = async function () {
  const res = await fetch("./pages/data/portfolio-data.json");
  const datas = await res.json();
  const data = [];
  datas.data.forEach((el) => {
    data.push(cardMarkup(el));
  });
  const html = data.join("");
  projectContainer.insertAdjacentHTML("afterbegin", html);
};

const fadeIn = function (entry) {
  const target = entry[0];
  if (!target.isIntersecting) return;
  downArrow.classList.add("none");
  aboutMe.classList.add("fade-in");

  observerFade.unobserve(aboutContainer);
};
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.8,
};
const observerFade = new IntersectionObserver(fadeIn, options);

const init = function () {
  observerFade.observe(aboutContainer);
  renderCard();
};
init();
