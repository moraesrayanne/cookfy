let left = document.getElementById("left-button");
let right = document.getElementById("right-button");
let leftImg = document.getElementById("left-btn")
let rightImg = document.getElementById("right-btn")

function toggle(hover, img) {
    hover.onmouseover = function (e) {
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