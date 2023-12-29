const navbar = document.getElementById('corporate-business-navbar');
const marketName = document.getElementById('businessLogoName');
const marketSub = document.getElementById('businessLogoSub');
window.onscroll = () => {
    if (window.scrollY > 60) {
        navbar.classList.add('nav-active');
        marketName.style.color = "black";
        marketSub.style.color = "black";
    } else {
        navbar.classList.remove('nav-active');
        marketName.style.color = "white";
        marketSub.style.color = "white";
    }
};