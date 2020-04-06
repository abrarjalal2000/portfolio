import MainPage from './components/MainPage.js';
import ProjectPage from './components/ProjectPage.js';
fetch('assets/data.json').then(response => response.json())
.then(data=>{
  console.log(data);
  const params = new URLSearchParams(window.location.search);
  console.log(params.get("project"));

  if (params.get("project") === null) {
    MainPage(data);
  } else {
    let project = data.projects.find(data => data.id === params.get("project"));
    ProjectPage(project);
  }
});