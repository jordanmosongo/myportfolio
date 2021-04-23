window.onscroll = () => {
  let scrollPoint =
    document.body.scrollTop || document.documentElement.scrollTop;

  if (scrollPoint <= 799) {
    activateLinkOnScroll(0);
  } else if (scrollPoint >= 800 && scrollPoint <= 1915) {
    activateLinkOnScroll(1);
  } else if (scrollPoint >= 1916 && scrollPoint <= 3047) {
    activateLinkOnScroll(2);
  } else if (scrollPoint >= 3050 && scrollPoint <= 4099) {
    activateLinkOnScroll(3);
  } else if (scrollPoint > 4099) {
    activateLinkOnScroll(4);
  }
};
function activateLinkOnScroll(i) {
  let itemsLink = document.getElementsByClassName("menu-link__item");
  for (let itemLink of itemsLink) {
    itemLink.classList.remove("active");
  }
  itemsLink[i].classList.add("active");
}

$(document).ready(function () {
  $("select").formSelect();
  $(".sidenav").sidenav();
  $(".modal").modal();
  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
  });
});
(function () {
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
})();
(function () {
  window.addEventListener("scroll", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
})();
//Animmation with gsap
const tl = gsap.timeline({ default: { ease: "power1.out" } });
tl.to(".banner-text__title__span", {
  y: "0%",
  duration: 1,
  stagger: 0.75,
});
tl.fromTo(
  ".banner-text__description",
  { opacity: 0 },
  { opacity: 1, duration: 1 }
);
tl.fromTo(".banner-text__bouton", { opacity: 0 }, { opacity: 1, duration: 1 });
function activateLink(event) {
  let linkStrigger = event.target;
  let itemsLink = document.getElementsByClassName("menu-link__item");
  for (let item of itemsLink) {
    item.classList.remove("active");
  }
  linkStrigger.classList.add("active");
}
let cardLinks = document.getElementsByClassName("card-link");
let cardProjects = document.getElementsByClassName("card");

for (let i = 0; i < cardProjects.length; i++) {
  cardProjects[i].addEventListener("mouseenter", (event) => {
    event.preventDefault();
    console.log(cardLinks);
    cardLinks[i].style.display = "inherit";
  });
  cardProjects[i].addEventListener("mouseleave", (event) => {
    event.preventDefault();
    cardLinks[i].style.display = "none";
  });
}

// {
//     "title" : "Formulaire de contact",
//     "description" : "Une application frontEnd qui gère les contacts",
//     "image" : "../images/realisation/formulaireOne.png",
//     "technologies" : [
//         "Html5",
//         "css3",
//         "javascript"
//     ],
//     "lienSite" : "https://lien-vers-le-site.com",
//     "lienGitHub" : "https://lien-vers-le-repo-git"
// }
