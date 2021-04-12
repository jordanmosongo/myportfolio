//skill variables
let description = document.getElementById('text-descriptif');
let telephone = document.getElementById('telephone');
let facebook = document.getElementById('facebook');
let firstRowOfSkills = document.getElementById("first-row-of-skills");
let secondRowOfSkills = document.getElementById("second-row-of-skills");
//project variables
let projectContainer = document.getElementById("projects-container");
let secondProjectContainer = document.getElementById('projects-container-second');

function createSkill(parent, skillTechnology, skillImage){
    let skillContainer = document.createElement('div');
    let firstBloc = document.createElement('div');
    let secondBloc = document.createElement('div');
    let skillTech = document.createElement('img');    
    let skillName = document.createElement('p');

    skillContainer.classList.add("col", "s4");    
    firstBloc.classList.add('skill__element');
    secondBloc.classList.add('skill__name');
    skillTech.setAttribute('src', skillImage);
    skillTech.setAttribute('alt', skillTechnology);
    skillName.textContent = skillTechnology;

    firstBloc.appendChild(skillTech);
    skillContainer.append(firstBloc, secondBloc, skillName);
    parent.appendChild(skillContainer);
}
function createProject(parent,projectTitle ,projectImage, technoList, siteWeb, gitHub){
    let element = document.createElement('div');
    let techno = document.createElement('div');    
    let titre = document.createElement('h3');   
    let list = document.createElement('p');   
    let technoLink = document.createElement('div');
    let webSiteLink = document.createElement('a');    
    let gitHubLink = document.createElement('a');
    let iconSite = document.createElement('i');
    let iconGit = document.createElement('i');
    
    element.classList.add('first-element');
    element.style.backgroundImage = `url(${projectImage})`;
    techno.classList.add('technos');
    titre.textContent = projectTitle;
    titre.classList.add('technos-title');
    list.textContent = "";
    technoList.forEach(item => {
       list.textContent += item + " "; 
     });
     list.classList.add('technos-list')
    technoLink.classList.add('technos-link');
    webSiteLink.setAttribute('href', siteWeb);
    
    iconSite.classList.add('fas', 'fa-link', 'fa-2x');
    webSiteLink.appendChild(iconSite);
    
    gitHubLink.setAttribute('href', gitHub);
    
    iconGit.classList.add('fab', 'fa-github', 'fa-2x');
    gitHubLink.appendChild(iconGit);
      
    technoLink.append(webSiteLink, gitHubLink);
    techno.append(titre, list, technoLink);
    element.appendChild(techno);
    element.setAttribute('data-aos', 'zoom-in');
    parent.appendChild(element);
    
}

//getting identity
//fetch("https://my-json-server.typicode.com/jordanmosongo/portfolio/identity")
fetch("http://localhost:3000/identity")  
.then(response => {
        return response.json();
    })
    .then(data => {
        //description.textContent = data.textDescriptif;
        telephone.textContent = data.telephone;
        facebook.setAttribute('href', data.facebook);
        
    })
    .catch(err => console.log(err));
//getting skills
//fetch("https://my-json-server.typicode.com/jordanmosongo/portfolio/skills")
fetch("http://localhost:3000/skills")     
    .then(response => {
            return response.json();
    })
    .then(arrayOfSkills => {
        for(let index in arrayOfSkills){
            if(index <= 2) {
                createSkill(firstRowOfSkills, arrayOfSkills[index].technology, 
                            arrayOfSkills[index].logo);
            } else if (index >2 && index <= 5) {
                createSkill(secondRowOfSkills, arrayOfSkills[index].technology, 
                    arrayOfSkills[index].logo);
            }else{
                alert("En attente d'algorithme");
            }
        }

    })
    .catch(err => console.log(err));
//getting projects
fetch("http://localhost:3000/projects")
    .then(response => {
        return response.json();
    })
    .then(data => {
        for(let index in data){
            if(index <= 2){
                createProject(projectContainer, data[index].title, data[index].image,
                    data[index].technologies, data[index].lienSite, data[index].lienGitHub);
            }else if(index >=3 && index <=5){
                createProject(secondProjectContainer, data[index].title, data[index].image,
                    data[index].technologies, data[index].lienSite, data[index].lienGitHub);
            }
            else{
                alert("En attente d'algorithme")
            }
            
        }
    })
    .catch(err => console.log(err));

    //Sending mails
    let submitButton = document.getElementById("bouton-submit");
    let email = document.getElementById("email");
    let objet = document.getElementById("sujet");
    let message = document.getElementById("message");
    let nom = document.getElementById("nom");
    let phone = document.getElementById("phone");
    submitButton.addEventListener('click', event => {
        event.preventDefault();
        Email.send({
            Host : "smtp.mailtrap.io",
            Username: "4b96413af87a4f",
            Password: "d2dc011c0cabbd",
            To : "jordan@gmail.com",
            From : email.value,
            Subject : objet.value,
            Body : message.value + '<br>' + nom.value + '<br>' + phone.value
 
        })
        .then(msg => {
            alert("Votre message est envoyé avec succès");
            let form = document.getElementById('form');
            form.reset();
        })
    })
    function unroll(){
        let email = document.getElementById('email-inscription');
        console.log(email.value);
        fetch('http://localhost:3000/newsletter',email.value, {
            method:'post'
        }).then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));
    }


