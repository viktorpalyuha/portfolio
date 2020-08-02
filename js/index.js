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
    document.body.scrollTop >= 400 ||
    document.documentElement.scrollTop >= 400
  ) {
    document.querySelector("nav").classList.remove("hidden");
    document.querySelector("nav").classList.add("visible");
  } else {

    document.querySelector("nav").classList.remove("visible");
    document.querySelector("nav").classList.add("hidden");
  }
}

window.onscroll = () => {
  scrollFunction();
};
