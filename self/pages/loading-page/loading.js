const body = document.querySelector(".body");
const markup = function () {
  return `
  <div id="loader-wrapper">
    <div id="loader"> </div>
    <div class="loader-section section-left"> </div>
    <div class="loader-section section-right"> </div>
    <div id="load_title"> Loading </div>
  </div>`;
};

body.insertAdjacentHTML("afterbegin", markup);

window.onload = function () {
  body.className += " loaded";
};
