let left = document.getElementById("left-button");
let right = document.getElementById("right-button");
let leftImg = document.getElementById("left-btn")
let rightImg = document.getElementById("right-btn")

const directionHover = (hover, img) => {
    hover.onmouseover = () => {
        if (hover) {
            if (img.id === 'left-btn') {
                img.src = "./assets/Seta_esquerda-branca.svg"
            } else {
                img.src = "./assets/Seta_direita-branca.svg"
            }
            hover.style.backgroundColor = "#e82147"
        }
    }
    
    hover.onmouseout = () => {
        if (hover) {
            if (img.id === 'left-btn') {
                img.src = "./assets/Seta_esquerda.svg"
            } else {
                img.src = "./assets/Seta_direita.svg"
            }
            hover.style.backgroundColor = "#fff"
        }
    };
}

directionHover(left, leftImg);
directionHover(right, rightImg);

let btn1 = document.getElementById('check-1');
let btn2 = document.getElementById('check-2');
let btn3 = document.getElementById('check-3');

const toggle = (btn) => {
    btn.onclick = function () {
        if (btn.id === 'check-1') {
            this.classList.toggle('checked-cozinha')
            if (btn2.classList.contains('checked-patisserie')) {
                btn2.classList.remove('checked-patisserie')
            }
            if (btn3.classList.contains('checked-drinks')) {
                btn3.classList.remove('checked-drinks')
            }
        }
        if (btn.id === 'check-2') {
            this.classList.toggle('checked-patisserie')
            if (btn1.classList.contains('checked-cozinha')) {
                btn1.classList.remove('checked-cozinha')
            }
            if (btn3.classList.contains('checked-drinks')) {
                btn3.classList.remove('checked-drinks')
            }
        }
        if (btn.id === 'check-3') {
            this.classList.toggle('checked-drinks')
            if (btn1.classList.contains('checked-cozinha')) {
                btn1.classList.remove('checked-cozinha')
            }
            if (btn2.classList.contains('checked-patisserie')) {
                btn2.classList.remove('checked-patisserie')
            }
        }
    }
}

toggle(btn1);
toggle(btn2);
toggle(btn3);

let firstImg = document.getElementById("image")
let effect = document.getElementById('effect');

let firstTxt = document.getElementById("first-txt");
let title = document.getElementById("title");
let rate = document.getElementById("rate");

const recipe = (click, img) => {
    click.onclick = () => {
        if (click) {
            if (click.id === 'right-button') {
                effect.classList.toggle('fade-in');
                img.src = "./assets/iogurte.png";
                firstTxt.innerHTML = "Adicionado a 2 dias"
                title.innerHTML = "Iogurte de fruta crocante"
                rate.innerHTML = "Dificil"
            } else {
                effect.classList.toggle('fade-in');
                img.src = "./assets/sanduiche.png"
                firstTxt.innerHTML = "Adicionado ontem"
                title.innerHTML = "Sanduíche de tomate com salada de ovos"
                rate.innerHTML = "Fácil"
            }
        }
    }
}

recipe(left, firstImg)
recipe(right, firstImg);

let facebook = document.getElementById("facebook");
let instagram = document.getElementById("instagram");
let twitter = document.getElementById("twitter");
let linkedin = document.getElementById("linkedin");
let pinterest = document.getElementById("pinterest");

const social = (hover) => {
    hover.onmouseover = () => {
        if (hover) {
            if (hover.id === 'facebook') {
                hover.src = "./assets/facebook-aceso.svg"
            } 
            if (hover.id === 'instagram') {
                hover.src = "./assets/instagram-aceso.svg"
            } 
            if (hover.id === 'twitter') {
                hover.src = "./assets/twitter-aceso.svg"
            } 
            if (hover.id === 'linkedin') {
                hover.src = "./assets/linkedin-aceso.svg"
            } 
            if (hover.id === 'pinterest') {
                hover.src = "./assets/pinterest-aceso.svg"
            } 
        }
    }

    hover.onmouseout = () => {
        if (hover) {
        if (hover.id === 'facebook') {
            hover.src = "./assets/facebook.svg"
        } 
        if (hover.id === 'instagram') {
            hover.src = "./assets/instagram.svg"
        } 
        if (hover.id === 'twitter') {
            hover.src = "./assets/twitter.svg"
        } 
        if (hover.id === 'linkedin') {
            hover.src = "./assets/linkedin.svg"
        } 
        if (hover.id === 'pinterest') {
            hover.src = "./assets/pinterest.svg"
        } 
    }
    };
}

social(facebook)
social(instagram)
social(twitter)
social(linkedin)
social(pinterest)