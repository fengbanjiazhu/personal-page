const body = document.querySelector(".body");

const loadMarkup = function () {
  return `
  <div id="loader-wrapper">
    <div id="loader"> </div>
    <div class="loader-section section-left"> </div>
    <div class="loader-section section-right"> </div>
    <div id="load_title"> Loading </div>
  </div>`;
};

const loading = function () {
  const loadHtml = loadMarkup();
  body.insertAdjacentHTML("afterbegin", loadHtml);

  window.onload = function () {
    body.className += " loaded";
  };
};
loading();
