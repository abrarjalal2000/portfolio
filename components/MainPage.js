import NavBar from './NavBar.js';
import About from './About.js';
import News, {handleNewsSearch} from './News.js';
import Projects, {handleProjectsFilter} from './Projects.js';


export default function MainPage(data){
    document.querySelector('.container').innerHTML = `
    ${NavBar(data.nav)}
    ${About(data.about)}
    ${News(data.news)}
    ${Projects(data.projects)}
    <footer>Copyright © 2020 Abrar Jalal</footer> 
    `;
    handleNewsSearch(data);
    handleProjectsFilter(data);
   }