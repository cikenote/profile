
// Functione motion of Nav
gsap.from("nav", { duration: 1, y: -300, opacity: 0 });

// Motion of image3D
gsap.from("#header-image", {
  duration: 2,
  x: 300,
  opacity: 0,
  scale: 0.5,
  ease: "bounce",
});

// Function cursor
const cursor = document.querySelector(".custom-cursor");
document.onmousemove = (e) => {
  cursor.style.transform = `translate(${e.pageX + 10}px, ${e.pageY + 10}px)`;
};


let projects = [
  {
    name: "Game",
    description:
      "An inhibitory game for players",
    technologies: ["HTML5", "CSS3", "Javascript"],
    github: null,
    preview: "https://hnad372.github.io/game/",
    image: "",
  },
  // {
  //   name: "Herconomy Savings",
  //   description:
  //     "Savings platform that encourages women to earn interests while they save.",
  //   technologies: ["ReactJs", "Redux", "Sass"],
  //   github: null,
  //   preview: "https://hnad372.github.io/game/",
  //   image: "",
  // },
];

AOS.init();

let projectContent = document.querySelector(".all-projects");
var fragment = document.createDocumentFragment();

projects.forEach((project) => {
  let div = document.createElement("div");
  div.setAttribute("data-aos", "fade-up")
  div.innerHTML = `
  <div class="projects__card">
                        <div class="projects__card--content">
                            <div class="projects__card--content--header">
                                <h2>${project.name}</h2>
                            </div>
                            <div class="projects__card--content--about">
                                <p>${project.description}</p>
                            </div>
                            <div class="projects__card--content--tech">
                              ${project.technologies
      .map(
        (tool) => `
                                <span>${tool}</span>
                              `
      )
      .join("")}
                            </div>
                            <div class="projects__card--content--links">
                              ${project.github
      ? `<a href="${project.github}" target="_blank"><span class="fa fa-github"></span></a>`
      : ""
    }
                              ${project.preview
      ? `<a href="${project.preview}" target="_blank"><span class="fa fa-link"></span></a>`
      : ""
    }
                            </div>
                        </div>
                        <div class="projects__card--image">
                        </div>
                    </div>
  `;

  fragment.appendChild(div);
});

projectContent.appendChild(fragment);
