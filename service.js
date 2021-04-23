//skill variables
let description = document.getElementById("text-descriptif");
let telephone = document.getElementById("telephone");
let facebook = document.getElementById("facebook");
let firstRowOfSkills = document.getElementById("first-row-of-skills");
let secondRowOfSkills = document.getElementById("second-row-of-skills");
//project variables
let projectContainer = document.getElementById("projects-container");
let secondProjectContainer = document.getElementById(
  "projects-container-second"
);

function createSkill(parent, skillTechnology, skillImage) {
  let skillContainer = document.createElement("div");
  let firstBloc = document.createElement("div");
  let secondBloc = document.createElement("div");
  let skillTech = document.createElement("img");
  let skillName = document.createElement("p");

  skillContainer.classList.add("col", "s4");
  firstBloc.classList.add("skill__element");
  secondBloc.classList.add("skill__name");
  skillTech.setAttribute("src", skillImage);
  skillTech.setAttribute("alt", skillTechnology);
  skillName.textContent = skillTechnology;

  firstBloc.appendChild(skillTech);
  skillContainer.append(firstBloc, secondBloc, skillName);
  parent.appendChild(skillContainer);
}
const createCardImage = (image, index) => {
  let cardImage = document.getElementsByClassName("card-image");
  let imageForCard = document.createElement("img");
  imageForCard.setAttribute("src", `${image}`);
  imageForCard.setAttribute("alt", "image projet");
  cardImage[index].appendChild(imageForCard);
};
const createCardContent = (title, description, index) => {
  let cardContent = document.getElementsByClassName("card-content");
  let titre = document.createElement("h3");
  let descriptionText = document.createElement("p");
  descriptionText.textContent = description;
  titre.classList.add("card-title");
  titre.textContent = title;
  cardContent[index].append(titre, descriptionText);
};
const createCardAction = (arrayOfTechnologies) => {
  let technologiesListElement = document.createElement("ul");
  arrayOfTechnologies.forEach((technology) => {
    let technologyElement = document.createElement("li");
    technologyElement.textContent = technology;
    technologiesListElement.appendChild(technologyElement);
  });
  return technologiesListElement;
};
const createCardLink = (lienSite, index) => {
  let cardLink = document.getElementsByClassName("card-link__bloc");
  let lien = document.createElement("a");
  lien.classList.add("card-image__link");
  lien.setAttribute("href", `${lienSite}`);
  lien.textContent = "visiter";
  cardLink[index].appendChild(lien);
};

function createProject(project, index) {
  const { title, description, image, technologies, lienSite } = project;
  createCardImage(image, index);
  createCardContent(title, description, index);
  let cardAction = document.getElementsByClassName("card-action");
  cardAction[index].appendChild(createCardAction(technologies));
  createCardLink(lienSite, index);
}

//getting identity
//fetch("https://my-json-server.typicode.com/jordanmosongo/portfolio/identity")
fetch("http://localhost:3000/identity")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    telephone.textContent = data.telephone;
    facebook.setAttribute("href", data.facebook);
  })
  .catch((err) => console.log(err));
//getting skills
//fetch("https://my-json-server.typicode.com/jordanmosongo/portfolio/skills")
fetch("http://localhost:3000/skills")
  .then((response) => {
    return response.json();
  })
  .then((arrayOfSkills) => {
    for (let index in arrayOfSkills) {
      if (index <= 2) {
        createSkill(
          firstRowOfSkills,
          arrayOfSkills[index].technology,
          arrayOfSkills[index].logo
        );
      } else if (index > 2 && index <= 5) {
        createSkill(
          secondRowOfSkills,
          arrayOfSkills[index].technology,
          arrayOfSkills[index].logo
        );
      } else {
        alert("En attente d'algorithme");
      }
    }
  })
  .catch((err) => console.log(err));
//getting projects
fetch("http://localhost:3000/projects")
  .then((response) => {
    return response.json();
  })
  .then((projects) => {
    // projects.forEach((project) => {
    //   createProject(project);
    // });
    projects.map((project, index) => {
      createProject(project, index);
    });
  })
  .catch((err) => console.log(err));
