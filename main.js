window.onscroll = () => {
  let scrollPoint =
    document.body.scrollTop || document.documentElement.scrollTop;
  if (scrollPoint <= 799) {
    activateLinkOnScroll(0);
  } else if (scrollPoint >= 800 && scrollPoint <= 1915) {
    activateLinkOnScroll(1);
  } else if (scrollPoint >= 1916 && scrollPoint <= 2718) {
    activateLinkOnScroll(2);
  } else if (scrollPoint >= 2720 && scrollPoint <= 3320) {
    activateLinkOnScroll(3);
  } else if (scrollPoint >= 3325 && scrollPoint <= 4040) {
    activateLinkOnScroll(4);
  } else if (scrollPoint >= 4045) {
    activateLinkOnScroll(5);
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
    cardLinks[i].style.display = "inherit";
  });
  cardProjects[i].addEventListener("mouseleave", (event) => {
    event.preventDefault();
    cardLinks[i].style.display = "none";
  });
}
