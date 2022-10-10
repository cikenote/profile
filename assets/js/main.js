
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
    name: "CDM",
    description:
      "E-commerce website development.",
    technologies: ["HTML5", "CSS3", "Javascript"],
    github: null,
    preview: "https://byvinci.io/",
    image: "",
  },
  // {
  //   name: "Herconomy Savings",
  //   description:
  //     "Savings platform that encourages women to earn interests while they save.",
  //   technologies: ["ReactJs", "Redux", "Sass"],
  //   github: null,
  //   preview: "https://dashboard.herconomy.com/",
  //   image: "",
  // },
  // {
  //   name: "Lite CMS",
  //   description:
  //     "A mini content management system that allows users to create articles and upload pictures, audios and videos.",
  //   technologies: ["ReactJs", "Redux", "Sass", "Express"],
  //   github: "https://github.com/devchux/uto-foundation",
  //   preview: "https://lite-cms.netlify.app/",
  //   image: "",
  // },
  // {
  //   name: "Playstation 4 UI",
  //   description:
  //     "An interactive play station 4 landing page clone.",
  //   technologies: ["ReactJs", "Sass"],
  //   github: "https://github.com/devchux/playstation",
  //   preview: "https://playstation4.netlify.app/",
  //   image: "",
  // },
  // {
  //   name: "My Dream Job",
  //   description:
  //     "A job placement website where users can search for jobs as well as create new jobs",
  //   technologies: ["Node", "Express", "MongoDB", "EJS"],
  //   github: "https://github.com/devchux/jobboard",
  //   preview: "https://mydreamjob-alpha.herokuapp.com/",
  //   image: "",
  // },
  // {
  //   name: "DevHunt",
  //   description:
  //     "A web application that provides a list of developers and their details by consuming Github graphql Api.",
  //   technologies: [
  //     "React",
  //     "SCSS",
  //     "Material UI",
  //     "Github GraphQL API",
  //     "Apollo Client",
  //   ],
  //   github: "https://github.com/devchux/devhunt",
  //   preview: "https://devhunt-github.netlify.app/",
  //   image: "",
  // },
  // {
  //   name: "MiniCrm",
  //   description: "A mini customer relationship management dashboard",
  //   technologies: ["React", "Redux"],
  //   github: "https://github.com/devchux/easycrm-frontend",
  //   preview: "https://easycrmui.netlify.app/",
  //   image: "",
  // },
  // {
  //   name: "Balance",
  //   description: "A mern stack app to track a user's expenses.",
  //   technologies: ["React", "Express", "MongoDB"],
  //   github: "https://github.com/devchux/balance/",
  //   preview: "https://mybalance-app.netlify.app/",
  //   image: "",
  // },
  // {
  //   name: "Luno Page Clone",
  //   description: "A clone of luno's official landing page.",
  //   technologies: ["React", "Tailwind CSS"],
  //   github: "https://github.com/devchux/luno-landing-page",
  //   preview: "https://luno-page.netlify.app",
  //   image: "",
  // },
  // {
  //   name: "Breaking News",
  //   description: "News application that displays latest new in Nigeria",
  //   technologies: ["Next", "News Data API"],
  //   github: "https://github.com/devchux/breaking-news",
  //   preview: "https://breaking-news-alpha.vercel.app/",
  //   image: "",
  // },
  // {
  //   name: "EasyCrm",
  //   description:
  //     "A landing page for a customer relationship management software.",
  //   technologies: ["React"],
  //   github: "https://github.com/devchux/Team-067-A-Frontend",
  //   preview: "https://sdgcrm.netlify.app/",
  //   image: "",
  // },
  // {
  //   name: "Scala Page",
  //   description: "A landing page for an online investment trading platform",
  //   technologies: ["HTML", "CSS", "JavaScript"],
  //   github: "https://github.com/devchux/scala-landing-page",
  //   preview: "https://scala-page.netlify.app/",
  //   image: "",
  // },
  // {
  //   name: "Instaclone",
  //   description:
  //     "An instagram-like web app built with JavaScript modularization practice and database management with IndexedDB",
  //   technologies: ["HTML", "CSS", "JavaScript", "IndexedDB"],
  //   github: "https://github.com/devchux/instaclone",
  //   preview: "https://devchux.github.io/instaclone/",
  //   image: "",
  // },
  // {
  //   name: "Cash Tracker",
  //   description: "Cash tracker app to estimate cash flow",
  //   technologies: ["React", "Redux"],
  //   github: "https://github.com/devchux/Cash-Tracker",
  //   preview: "https://cashtrackerv1.netlify.app/",
  //   image: "",
  // },
  // {
  //   name: "DevEvents",
  //   description:
  //     "A developer events app where developers can share details about upcoming events.",
  //   technologies: ["Angular"],
  //   github: "https://github.com/devchux/dev-events",
  //   preview: "https://devevents.netlify.app/",
  //   image: "",
  // },
  // {
  //   name: "Mini Calculator",
  //   description: "A simple calculator.",
  //   technologies: ["HTML", "CSS", "JavaScript"],
  //   github: "https://github.com/devchux/calculator-js",
  //   preview: "https://devchux.github.io/calculator-js/",
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
                              ${
                                project.github
                                  ? `<a href="${project.github}" target="_blank"><span class="fa fa-github"></span></a>`
                                  : ""
                              }
                              ${
                                project.preview
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
