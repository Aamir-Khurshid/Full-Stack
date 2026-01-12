const navbar = document.getElementById('navbar');
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const bars = burger.querySelector('i');

/* Smooth scroll + auto close menu */
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const targetId = link.getAttribute('data-target');
        const section = document.getElementById(targetId);

        section.scrollIntoView({ behavior: 'smooth' });

        // 🔥 CLOSE MENU AFTER CLICK
        menu.classList.remove('translate-x-0');
        bars.classList.remove('fa-xmark');
        bars.classList.add('fa-bars');
    });
});

/* Navbar style on scroll */
document.addEventListener('scroll', () => {
    navbar.classList.toggle('navbar-styling', window.scrollY > 0);
});

/* Hamburger toggle */
burger.addEventListener('click', () => {
    menu.classList.toggle('translate-x-0');

    bars.classList.toggle('fa-bars');
    bars.classList.toggle('fa-xmark');
});


var typed = new Typed('#typing', {
    strings: ['Developer', 'Designer', ' Coder '],
    typeSpeed: 100,
    loop: true,
    backDelay: 2000,
    showCursor: false,

});