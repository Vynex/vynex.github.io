var textWrapper = document.querySelector('.content .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.content .letter',
    scale: [0, 1],
    duration: 2000,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  });