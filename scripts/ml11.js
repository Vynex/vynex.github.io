// Wrap every letter in a span
//taken from ml11
var textWrapper = document.querySelector('.moving-letters .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.moving-letters .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.moving-letters .line',
    translateX: [0, document.querySelector('.moving-letters .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.moving-letters .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.moving-letters',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });