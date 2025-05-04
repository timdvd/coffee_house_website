const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    effect: 'fade',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

let menu = document.querySelector('.menu');
let nums = document.querySelectorAll('.num');
let start = false;

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar')
    navbar.classList.toggle('sticky', window.scrollY > 0);

    if(window.scrollY >= menu.offsetTop){
        if(!start){
            nums.forEach(num => {
                startCount(num)
            })
        }
        start = true;
    }
})

const startCount = (el) => {
    let max = el.dataset.val;
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent === max){
            clearInterval(count)
        }
    }, 2000 / nums)
}

/* scroll reveal */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 300,
    // reset: true,
});

sr.reveal(`.banner .main-heading`, {delay: 100, distance: '50px', origin: 'top'});
sr.reveal(`.banner h1`, {delay: 200, distance: '50px', origin: 'bottom'});
sr.reveal(`.banner p`, {delay: 300, distance: '50px', origin: 'bottom'});
sr.reveal(`.banner .div`, {delay: 400, distance: '50px', origin: 'bottom'});
sr.reveal(`.details`, {delay: 500, distance: '100px', origin: 'bottom', interval: 200});
sr.reveal(`.about div`, {delay: 300, distance: '100px', origin: 'bottom', interval: 200});

sr.reveal(`.menu-left .main-heading`, {delay: 200, distance: '100px', origin: 'left'});
sr.reveal(`.menu-left h1`, {delay: 300, distance: '100px', origin: 'left'});
sr.reveal(`.menu-left p`, {delay: 400, distance: '100px', origin: 'left'});
sr.reveal(`.menu-left div`, {delay: 500, distance: '100px', origin: 'left'});

sr.reveal(`.menu-img-wrapper img`, {delay: 200, distance: '100px', origin: 'right', interval: 100});

sr.reveal(`.customers .main-heading`, {delay: 200, distance: '50px', origin: 'top'});
sr.reveal(`.customers h1`, {delay: 300, distance: '50px', origin: 'top'});
sr.reveal(`.customers p`, {delay: 400, distance: '50px', origin: 'bottom'});

sr.reveal(`.clients .client`, {delay: 400, distance: '50px', origin: 'bottom', interval: 100});
sr.reveal(`.client img`, {delay: 500, distance: '50px', origin: 'top', interval: 100});

sr.reveal(`.data .icon-wrapper`, {delay: 300, distance: '50px', origin: 'bottom', interval: 200});

sr.reveal(`.contact-right .input-group input`, {delay: 300, distance: '50px', origin: 'right', interval: 100});
sr.reveal(`.contact-right textarea`, {delay: 400, distance: '50px', origin: 'right'});
sr.reveal(`.contact-right .contact-btn`, {delay: 600, distance: '50px', origin: 'right'});



