new fullpage('#fullpage', {
    //options here
    autoScrolling:true,

    sectionsColor: ['#8a2be2', '#448aff', '#ff5722', '#ec407a', "#4caf50"],
    anchors: ['Home', 'About', 'Skills', 'Portfolio', 'Links'],
});


const nav = document.querySelector('.collapsable');
const navLinks = document.querySelectorAll('.collapsable li');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    nav.classList.toggle('navActive');

    navLinks.forEach((link, index) => {
        if (link.style.animation)
            link.style.animation = '';
        else
            link.style.animation = `navLinksAnim 0.5s ease forwards ${index / 7 + 0.2}s`
    });

    burger.classList.toggle('toggle');
});