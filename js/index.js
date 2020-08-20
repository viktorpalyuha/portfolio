window.addEventListener("load", function showPage() {
  let srcHeader = window.getComputedStyle(document.querySelector("header"), "")
    .backgroundImage;
  let urlHeader = srcHeader.match(/\((.*?)\)/)[1].replace(/('|")/g, "");
  let backgroundImgHeader = new Image();

  backgroundImgHeader.onload = function () {
    document.querySelector(".preloader").style.display = "none";
    document.querySelector(".wrapper").style.display = "block";

    let typewriter = new Typewriter("#animated-text", {
      autoStart: true,
      delay: 75,
      cursor: "",
    });
    
    typewriter
      .pauseFor(1000)
      .typeString("Front-end devil")
      .pauseFor(250)
      .deleteChars(2)
      .typeString("eloper")
      .start();
  };

  backgroundImgHeader.src = urlHeader;
});

// let srcSkills = window.getComputedStyle(document.querySelector(".skills__flip-card-front"), "").backgroundImage;
// let urlSkills = srcSkills.match(/\((.*?)\)/)[1].replace(/('|")/g,'');
// let imgSkills = new Image();
// imgSkills.src = urlSkills;

let sections = document.querySelectorAll("#home, #about, #skills, #portfolio, #contact");
let menuLinks = document.querySelectorAll(".nav__item");
let navHeight = 100;
let makeActive = link => menuLinks[link].classList.add("active");
let removeActive = link => menuLinks[link].classList.remove("active");
let removeAllActive = () => [...Array(sections.length).keys()].map( link => removeActive(link));
let currentActive = 0;

window.addEventListener("scroll", () => {

  // SCROLL SPY

  let current = sections.length - [...sections].reverse().findIndex( section => window.scrollY >= section.offsetTop - navHeight) - 1;

  if (current !== currentActive) {
    removeAllActive();
    currentActive = current;
    makeActive(current);
  }

  // SHOW NAVBAR ONSCROLL

  if (
    document.body.scrollTop >= 500 ||
    document.documentElement.scrollTop >= 500
  ) {
    document.querySelector("nav").classList.remove("hidden");
    document.querySelector("nav").classList.add("visible");
  } else {
    document.querySelector("nav").classList.remove("visible");
    document.querySelector("nav").classList.add("hidden");
  }
});

document.querySelector(".header__logo > svg").addEventListener("click", () => {
  document.querySelector(".header__logo > svg").classList.toggle("active");
  if (document.querySelector("nav ul").style.height == "221px") {
    document.querySelector("nav ul").style.height = "0px";
  } else {
    document.querySelector("nav ul").style.height = "221px";
  }
});


// ADD ACTIVE ON CLICK FUNCTION

// let navItems = document.getElementsByClassName("nav__item");

// for (let i = 0; i < navItems.length; i++) {
//   navItems[i].addEventListener("click", () => {
//     for (let j = 0; j < navItems.length; j++) {
//       if (navItems[j].classList.contains("active")) {
//         navItems[j].classList.remove("active");
//       }
//     }
//     navItems[i].classList.add("active");
//   });
// }
