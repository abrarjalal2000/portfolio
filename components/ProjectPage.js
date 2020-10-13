export default function ProjectPage(d){
  document.querySelector('.container').innerHTML = `
  <a href=".">Go Back</a><br><br>
  <div class="row">
    <div class="col-6">
      <div class="project-title">
        <strong>${d.title}</strong>
      </div>
      <div class="project-authors">
        ${d.authors}<br>
      </div>
      <div class="project-source">
        <em>${d.source}</em><br>
      </div>
      <div class="project-tags">
        <span class="tag set">${d.tags[0]}</span>
        <span class="tag design">${d.tags[1]}</span>
      </div>
      <div class="project-desc">
        ${d.summary}<br>
      </div>
    </div>
    <div class="col-6">
      <img class="project-teaser" src="${d.teaser}">
    </div>
  </div>`
;
}