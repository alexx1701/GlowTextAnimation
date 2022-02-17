const tl = gsap.timeline({defaults: {duration: 1, ease: "Power3.easeOut"}})

tl.fromTo(".hero-img", {scale: 1.3, borderRadius: "0rem"}, {
    scale: 1, borderRadius: '2rem', delay: 0.35, duration: 2.5, ease: 'elastic.out(1,1)' 
});

tl.fromTo('.cta1', {y:'-100%', opacity: 0}, { y:0, opacity: 1, delay: 1}, "<25%");
tl.fromTo('.cta2', {y:'-100%', opacity: 0}, { y:0, opacity: 1}, "<25%");
tl.fromTo('.cta3', {y:'-100%', opacity: 0}, { y:0, opacity: 1}, "<25%");
tl.fromTo('.cta4', {y:'100%', opacity: 0}, { y:0, opacity: 1}, "<25%");
tl.fromTo('.cta5', {y:'100%', opacity: 0}, { y:0, opacity: 1}, "<25%");
tl.fromTo('.cta6', {y:'100%', opacity: 0}, { y:0, opacity: 1}, "<25%");
tl.fromTo('.cta-btn', { y: 20, opacity: 0}, {y:0, opacity: 1, delay: 1}, "<");

//split text
const logo = document.querySelector('.logo');
const letters = logo.textContent.split('');

logo.textContent = "";

letters.forEach((letter) => {
    logo.innerHTML += '<span class="letter">' + letter + '</span>';
});

gsap.set('.letter', {display: 'inline-block'});
gsap.fromTo(".letter", { opacity: 0}, { opacity:1, stagger: 0.05, delay: .5});
