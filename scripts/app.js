new fullpage('#fullpage', {
	autoScrolling: true,

	sectionsColor: ['#845ec2', '#51c2d5', '#ff5e78', '#16c79a'],
	anchors: ['Home', 'About', 'Skills', 'Links'],
});

const nav = document.querySelector('.collapsable');
const navLinks = document.querySelectorAll('.collapsable li');
const burger = document.querySelector('.burger');
const image = document.querySelector('.avatar');

burger.addEventListener('click', () => {
	nav.classList.toggle('nav-active');

	navLinks.forEach((link, index) => {
		if (link.style.animation) link.style.animation = '';
		else
			link.style.animation = `navLinksAnim 0.5s ease forwards ${
				index / 7 + 0.2
			}s`;
	});

	if (image.style.animation) image.style.animation = '';
	else
		image.style.animation = `navLinksAnim 0.5s ease forwards ${4 / 7 + 0.3}s`;

	burger.classList.toggle('toggle');
});
