export default function About(about){
    return `
    <section id="about">
        <header>
            <h1 id="name" class="animated infinite pulse slower delay-3s">${about.name}</h1>
        </header>
        <div class="row">
            <div class="col-6">
                <img src="${about.photo}" alt="profile picture" style="width:auto; height:350px"/>
                <p>
                    <strong>${about.title}</strong><br>
                    ${about.email}<br>
                    ${about.address}<br>
                    <a href="${about.resume}" target="_blank"><i class="fas fa-file"></i>Resume</a> | 
                    <a href="${about.twitter}" target="_blank"><i class="fab fa-twitter"></i></a> |
                    <a href="${about.linkedin}" target="_blank"><i class="fab fa-linkedin-in"></i></a> |
                    <a href="${about.github}" target="_blank"><i class="fab fa-github"></i></a> |
                </p>
            </div>
            <div class="col-6">
                <p>
                    ${about.description}
                </p>
            </div>
        </div>
    </section>`;
  }