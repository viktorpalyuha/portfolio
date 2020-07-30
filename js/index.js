let typewriter = new Typewriter('#animated-text', {
  autoStart: true,
  delay: 75,
  cursor: ""
});

typewriter.typeString("Front-end devlp").deleteChars(2).pauseFor(250).typeString("eloper").start()
