export default function News(news){
  return `
  <section id="news">
  <header>
      <h1 class="title">News</h1>
  </header>
  <div class = "search">
    <input type = "search" name = "news" placeholder = "Search...">
  </div>
  <div class="news-list">
    ${NewsItems(news)}
  </div>
  </section>`;
}

export function NewsItems(news){
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

export function handleNewsSearch(data){
  let input = document.querySelector('.search input[name="news"]');
  console.log(input);
  input.addEventListener('input', (event)=>{  
    const filtered = data.news.filter(news=>news.title.toUpperCase().includes(event.target.value.toUpperCase()));
    document.querySelector('.news-list').innerHTML = NewsItems(filtered);
  });
}