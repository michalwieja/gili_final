setTimeout(function () {
    this.document.querySelector('.logo').classList.remove('banner')
}, 2700);

const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
    const links = document.querySelectorAll('.nav-link')

    menu.addEventListener('click', () => {
        nav.classList.toggle('navActive');
        menu.classList.toggle('menuActive')

    })
    links.forEach((link, index) => {


        link.style.animation = `navLinkFade 1.5s ease forwards ${index / 5}s`;

        link.addEventListener('click', () => {
            menu.classList.toggle('menuActive')

            nav.classList.toggle('navActive')

        })
    })
}

navSlide();


// cennik

const priceBtn = document.querySelector('.priceBtn');
const closeBtn = document.querySelector('.closeBtn');
const modal = document.querySelector('.modal-bg')

priceBtn.addEventListener('click', function () {
    modal.classList.add('modal-active')
})

closeBtn.addEventListener('click', function () {
    modal.classList.remove('modal-active')
})