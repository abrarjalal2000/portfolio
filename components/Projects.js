export default function Projects(projects){
  return `
  <section id="projects">
      <header>
        <h1 class="title">Projects</h1>
      </header>
      <div class="filter">
        <label>
        <input type="radio" name="filter" value="all" checked>
          All
        </label>
        <label>
          <input type="radio" name="filter" value="frontend">
          Frontend
        </label>
        <label>
          <input type="radio" name="filter" value="backend">
          Backend
        </label>
        <label>
          <input type="radio" name="filter" value="full stack">
          Full Stack
        </label>
        <label>
        <input type="radio" name="filter" value="web development">
        Web Development
      </label>
      <label>
      <input type="radio" name="filter" value="game">
      Game
    </label>
    </div><br>
      <div class="project-list">
        ${ProjectItems(projects)}
      </div>
  </section>`;
}

export function ProjectItems(projects){
return projects.map(d=>`
  <div class="row">
    <div class="col-6">
      <div class="project-title">
        <a href="?project=${d.id}">${d.title}</a>
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
      <div class="project-description">
        ${d.description}<br>
      </div>
    </div>
    <div class="col-6">
      <img class="project-teaser" src="${d.teaser}">
    </div>
  </div>
`).join('');
}

export function handleProjectsFilter(data){
  let buttons = document.querySelectorAll('.filter input[name="filter"]');
  buttons.forEach(projects=>projects.addEventListener('change', function(event){
    if (event.target.value === "all"){
      document.querySelector('.project-list').innerHTML = ProjectItems(data.projects);
    }
    else{
      const filtered = data.projects.filter(project=>project.tags.map(tag=>tag.toLowerCase()).includes(event.target.value));
      console.log(filtered);
      document.querySelector('.project-list').innerHTML = ProjectItems(filtered);   
    }
     
  }));
}