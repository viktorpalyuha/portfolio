setTimeout(function showPage() {
  document.querySelector(".preloader").style.display = "none";
  document.querySelector(".wrapper").style.display = "block";
}, 3000);

let typewriter = new Typewriter("#animated-text", {
  autoStart: true,
  delay: 75,
  cursor: "",
});

typewriter
  .pauseFor(3400)
  .typeString("Front-end devlp")
  .deleteChars(2)
  .pauseFor(250)
  .typeString("eloper")
  .start();

window.addEventListener("scroll",function scrollFunction() {
  if (
    document.body.scrollTop >= 400 ||
    document.documentElement.scrollTop >= 400
  ) {
    document.querySelector("nav").classList.remove("hidden");
    document.querySelector("nav").classList.add("visible");
  } else {
    document.querySelector("nav").classList.remove("visible");
    document.querySelector("nav").classList.add("hidden");
  }
});

let navItems = document.getElementsByClassName("nav__item");

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", () => {
    for (let j = 0; j < navItems.length; j++) {
      if (navItems[j].classList.contains("active")) {
        navItems[j].classList.remove("active");
      }
    }
    navItems[i].classList.add("active");
  });
}

document.querySelector(".header__logo > svg").addEventListener("click", () => {
  document.querySelector(".header__logo > svg").classList.toggle('active');
  if(document.querySelector("nav ul").style.display == "flex"){
    document.querySelector("nav ul").style.display = "none";
  } else {
    document.querySelector("nav ul").style.display = "flex";
  }
})