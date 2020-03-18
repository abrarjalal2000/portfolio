fetch('assets/data.json').then(response => response.json())
.then(data=>{
  console.log(data);
  const params = new URLSearchParams(window.location.search);
  console.log(params.get("project"));

  if (params.get("project") === null) {
    renderMainPage(data);
  } else {
    let project = data.projects.find(data => data.id === params.get("project"));
    renderProjectPage(project);
  }
});

function renderMainPage(data){
  document.querySelector('.container').innerHTML = `
  ${renderNavBar(data.nav)}
  ${renderAbout(data.about)}
  ${renderNews(data.news)}
  ${renderProjects(data.projects)}
`;
 }
function renderNavBar(data){
  return`
  <nav>
          <ul>
              <li>
                  <a href="#about">${data.item0}</a>
              </li>
              <li>
                  <a href="#news">${data.item1}</a>
              </li>
              <li>
                  <a href="#projects">${data.item2}</a>
              </li>
          </ul>
      </nav>`;
}

function renderAbout(data){
  return `
  <section id="about">
      <header>
          <h1 id="name" class="animated infinite pulse slower delay-3s">${data.name}</h1>
      </header>
      <div class="row">
          <div class="col-6">
              <img src="${data.photo}" alt="profile picture" style="width:auto; height:350px"/>
              <p>
                  <strong>${data.title}</strong><br>
                  ${data.email}<br>
                  ${data.address}<br>
                  <a href="assets/Abrar Jalal Resume.pdf" target="_blank"><i class="fas fa-file"></i>Resume</a> | 
                  <a href="https://twitter.com/azj3000" target="_blank"><i class="fab fa-twitter"></i></a> |
                  <a href="https://www.linkedin.com/in/abrar-jalal-6657b4184/" target="_blank"><i class="fab fa-linkedin-in"></i></a> |
                  <a href="https://github.com/abrarjalal2000" target="_blank"><i class="fab fa-github"></i></a> |
              </p>
          </div>
          <div class="col-6">
              <p>
                  ${data.description}
              </p>
          </div>
      </div>
  </section>
  `;
}

function renderNews(news){
  return `
  <section id="news">
  <header>
      <h1 class="title">News</h1>
  </header>
  <div class="news-list">
    ${renderNewsItems(news)}
  </div>
  </section>`;
}

function renderNewsItems(news){
return news.map(d=>`
  <div class="row">
    <div class="col-8">
        ${d.title}
    </div>
    <div class="col-4">
        ${d.date}
    </div>
  </div>
`).join('');
}

function renderProjects(projects){
  return `
  <section id="projects">
      <header>
        <h1 class="title">Projects</h1>
      </header>
      <div class="project-list">
        ${renderProjectItems(projects)}
      </div>
  </section>`;
}

function renderProjectItems(projects){
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

function renderProjectPage(d){
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
      <div class="project-description">
        ${d.description}<br>
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