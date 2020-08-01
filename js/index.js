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

setTimeout(function showPage() {
  document.querySelector(".preloader").style.display = "none";
  document.querySelector(".wrapper").style.display = "block";
}, 3000);
