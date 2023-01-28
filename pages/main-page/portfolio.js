export const cardMarkup = function (data) {
  return `
  <div class="project-card" id="cover">
    <div class="project-card-view card" >
      <img class="card-img-top" src="./img/${data.image}" alt="card-img">
      <div class="card-body">
        <div class="card-text">
          <h2>${data.name}</h2>
          <p >
          ${data.description}
          </p>
        </div>
          <div class="linkBtn">
            <a  href="${data.link.github}" target="_blank" class="btn btn-primary">
              GitHub
            </a>
            <a  href="${data.link.demo}" target="_blank" class="btn btn-primary" style="margin-left: 10px;">
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};
