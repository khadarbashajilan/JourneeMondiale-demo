
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideContainer = document.getElementById('slideContainer');
const totalSlides = slides.length;

function showSlide(index) {
currentSlide = index;
const translateX = -index * 100;
slideContainer.style.transform = `translateX(${translateX}%)`;
}

function nextSlide() {
const nextIndex = (currentSlide + 1) % totalSlides;
showSlide(nextIndex);
}

function previousSlide() {
const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
showSlide(prevIndex);
}

// Auto-play functionality (optional)
setInterval(nextSlide, 10000); // Change slide every 10 seconds

// Testimonial data
const testimonials = [
    {
    img: 'images/Landing A/Photo Emilie 3.png',
    label: 'ÉMILIE T, 40 ANS, TOUCHÉE PAR UN CANCER DU CÔLON MÉTASTATIQUE',
    quote: "Tout va très vite, je suis passée de l'autre côté de la barrière.",
    text: `« Une prise de sang de routine révèle que mon taux de fer est bas. Rien d'alarmant, je prends des comprimés, mais mes analyses restent inchangées. Je dois faire une coloscopie et une fibroscopie que je repousse. Presque un an après mes analyses, je fais ces examens et le diagnostic tombe : j'ai un cancer du côlon métastatique de stade 4 à 39 ans. Je suis suivie à Gustave Roussy par le Dr Cristina Smolenschi qui me parle des traitements et des nouvelles recherches sur ce cancer. Je savais que j'étais au bon endroit. Mon protocole comprend 4 séances de chimiothérapie puis une opération des métastases hépatiques et du côlon. Je ne sais plus si j'ai eu peur. J'ai surtout pensé à mes enfants de 14 et 10 ans, et à mes parents. Je ne connais pas mon avenir, mais j'ai espoir et c'est grâce aux dons et à la recherche. »`,
    thumb: 'images/Landing A/Photo Emilie 3.png',
    },
    {
    img: 'images/Landing A/medium-shot-woman-with-delicious-food.png',
    label: 'AXELLE D, 29 ANS TOUCHÉE PAR UN CANCER DU SEIN',
    quote: "Je pleure, je pense immédiatement à mes enfants de 13 et 8 ans.",
    text: `« Au cours du premier trimestre de grossesse, mon médecin me soigne pour une gastro-entérite. Les symptômes ne passant pas, mon mari m'emmène aux urgences. On m'annonce que j'ai une occlusion intestinale. Après l'opération, d'autres examens sont réalisés : <span class='font-bold'>j'ai un cancer du côlon métastasé au foie.</span> J'ai 39 ans et une bonne hygiène de vie : <span class='font-bold'>j'ai les jambes sciées.</span> Mon dossier est transféré à Gustave Roussy et je suis reçue par le Dr Cristina Smolenschi. Elle me dit que l'on va me traiter et <span class='font-bold'>ce sera sans séquelle pour mon bébé.</span> J'ai eu 11 séances de chimiothérapie et <span class='font-bold'>j'ai pu profiter de ma grossesse !</span> Après l'accouchement de mon fils, j'ai été opérée et j'ai pris une chimiothérapie orale. J'ai quelques séquelles neurologiques, mais j'ai la chance d'avoir pu être soignée. <span class='font-bold'>Le cancer peut toucher n'importe qui, il faut faire progresser la recherche.</span> »`,
    thumb: 'images/Landing A/medium-shot-woman-with-delicious-food.png',
    },
    {
    img: 'images/Landing A/unnamed.png',
    label: 'ZAHIA B, 42 ANS TOUCHÉE PAR UN CANCER DU CÔLON',
    quote: "J'ai retrouvé l'espoir grâce à la recherche.",
    text: `« Après des mois de fatigue et de douleurs abdominales, le diagnostic tombe : cancer du côlon. Grâce à la recherche et à l'équipe médicale, j'ai pu bénéficier d'un traitement innovant qui m'a permis de retrouver une vie normale. Merci à tous les donateurs ! »`,
    thumb: 'images/Landing A/unnamed.png',
    },
];
// Render thumbnails
const thumbnailsContainer = document.getElementById('testimonial-thumbnails');
testimonials.forEach((t, idx) => {
    const thumbDiv = document.createElement('div');
    thumbDiv.className = `relative cursor-pointer group`;
    thumbDiv.innerHTML = `
    <img src="${t.thumb}" alt="${t.label}" class="rounded-[20px] w-20 h-20 object-cover border-2 border-[#00ACA8] group-hover:opacity-80 transition">
    <div class="absolute bottom-2 left-1 right-1 bg-[#00ACA8] bg-opacity-90 text-white text-xs font-bold px-2 py-1 rounded">${t.label.split(',')[0]}</div>
    `;
    thumbDiv.onclick = () => setTestimonial(idx);
    thumbnailsContainer.appendChild(thumbDiv);
});
// Set main testimonial
function setTestimonial(idx) {
    const t = testimonials[idx];
    document.getElementById('main-testimonial-img').src = t.img;
    document.getElementById('main-testimonial-label').textContent = t.label;
    document.getElementById('main-testimonial-quote').textContent = t.quote;
    document.getElementById('main-testimonial-text').innerHTML = t.text;
}


// Initialize
// showSlide(0);
