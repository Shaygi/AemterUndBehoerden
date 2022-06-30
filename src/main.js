const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');
console.log(navBtn);
navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "images/nav-close.svg";
    } else {
        navBtnImg.src = 'images/nav-open.png';
    }
};

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if(pos > 100){
        scrollProgress.style.display = "grid";
    }else{
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () =>{
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#5f9ea0 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

const indikatoren = document.getElementsByClassName("indikator");
indikatoren[0].classList.add("aktiv");

const cards = document.getElementsByClassName("card");
cards[0].classList.add("aktiv");

var aktuellerIndex = 0;

function umschalten(anzahl){

    var neuerIndex = aktuellerIndex + anzahl;

    if(neuerIndex < 0){
        neuerIndex = cards.length -1
    }
    if(neuerIndex > cards.length -1){
        neuerIndex = 0;
    }

    springZuEintrag(neuerIndex);
}

function springZuEintrag(neuerIndex){
    indikatoren[aktuellerIndex].classList.remove("aktiv");
    cards[aktuellerIndex].classList.remove("aktiv");


    indikatoren[neuerIndex].classList.add("aktiv");
    cards[neuerIndex].classList.add("aktiv");

    aktuellerIndex = neuerIndex;
}