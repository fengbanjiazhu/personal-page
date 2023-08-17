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

particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      background_color: "#b61924",
      background_image: "",
      background_position: "50% 50%",
      background_repeat: "no-repeat",
      background_size: "cover",
    },
  }
);

init();
