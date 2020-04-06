export default function NavBar(data){
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