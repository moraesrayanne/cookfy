let left = document.getElementById("left-button");
let right = document.getElementById("right-button");
let leftImg = document.getElementById("left-btn")
let rightImg = document.getElementById("right-btn")

function toggle(hover, img) {
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

toggle(left, leftImg);
toggle(right, rightImg);

let btn1 = document.getElementById('check-1');
let btn2 = document.getElementById('check-2');
let btn3 = document.getElementById('check-3');

function toggles(btn) {
    btn.onclick = function () {
        if(btn.id === 'check-1') {
            this.classList.toggle('checked-cozinha')
            if(btn2.classList.contains('checked-patisserie')){
                btn2.classList.remove('checked-patisserie')
            }
            if(btn3.classList.contains('checked-drinks')){
                btn3.classList.remove('checked-drinks')
            }
        }
        if(btn.id === 'check-2') {
            this.classList.toggle('checked-patisserie')
            if(btn1.classList.contains('checked-cozinha')){
                btn1.classList.remove('checked-cozinha')
            }
            if(btn3.classList.contains('checked-drinks')){
                btn3.classList.remove('checked-drinks')
            }
        }
        if(btn.id === 'check-3') {
            this.classList.toggle('checked-drinks')
            if(btn1.classList.contains('checked-cozinha')){
                btn1.classList.remove('checked-cozinha')
            }
            if(btn2.classList.contains('checked-patisserie')){
                btn2.classList.remove('checked-patisserie')
            }
        }
}
}

toggles(btn1);
toggles(btn2);
toggles(btn3);