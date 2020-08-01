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
  .pauseFor(3200)
  .typeString("Front-end devlp")
  .deleteChars(2)
  .pauseFor(250)
  .typeString("eloper")
  .start();

function scrollFunction() {
  if (
    document.body.scrollTop >= 350 ||
    document.documentElement.scrollTop >= 350
  ) {
    document.querySelector("nav").style.animationName = "fadeInNav";
    document.querySelector("nav").style.display = "grid";
  } else {
    document.querySelector("nav").style.animationName = "fadeOutNav";
    setTimeout(() => {
      document.querySelector("nav").style.display = "";
    }, 500);
  }
}

window.onscroll = () => {
  scrollFunction();
};
