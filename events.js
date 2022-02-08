let left = document.getElementById("left-button");
let right = document.getElementById("right-button");
let leftImg = document.getElementById("left-btn")
let rightImg = document.getElementById("right-btn")

function directionHover(hover, img) {
    hover.onmouseover = function () {
        if (hover) {
            if (img.id === 'left-btn') {
                img.src = "./assets/Seta_esquerda-branca.svg"
            } else {
                img.src = "./assets/Seta_direita-branca.svg"
            }
            hover.style.backgroundColor = "#e82147"
        }
    }
    hover.onmouseout = function (e) {
        if (hover) {
            if (img.id === 'left-btn') {
                img.src = "./assets/Seta_esquerda@2x.png"
            } else {
                img.src = "./assets/Seta_direita@2x.png"
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

function toggle(btn) {
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

let leftBtn = document.getElementById("left-button");
let rightBtn = document.getElementById("right-button");
let firstImg = document.getElementById("image")
let effect = document.getElementById('effect');

let firstTxt = document.getElementById("first-txt");
let title = document.getElementById("title");
let rate = document.getElementById("rate");


function recipe(click, img) {
    click.onclick = function () {
        if (click) {
            if (click.id === 'right-button') {
                effect.classList.toggle('fade-in');
                img.src = "./assets/iogurte.png";
                adicionado.innerHTML = "Adicionado a 2 dias"
                titulo.innerHTML = "Iogurte de fruta crocante"
                rate.innerHTML = "Dificil"
            } else {
                effect.classList.toggle('fade-in');
                img.src = "./assets/patrick-kalkman-HkdQ0zoHT5E-unsplash.png"
                adicionado.innerHTML = "Adicionado ontem"
                titulo.innerHTML = "Sanduíche de tomate com salada de ovos"
                rate.innerHTML = "Fácil"
            }
        }
    }
}

recipe(leftBtn, firstImg)
recipe(rightBtn, firstImg)