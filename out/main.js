"use strict";
const balance = document.querySelector('#balance');
const plau = document.querySelector('#play');
const bet = document.querySelector('#bet');
const cards = document.querySelectorAll('.card');
let counter = 0;
//onclink larni uladik
cards.forEach(card => {
    card.onclick = () => {
        if (counter < 3) {
            card.classList.add('is-flipped');
            counter++;
            let number = card.querySelector('.number');
            if (number.innerHTML == '$') {
                setTimeout(() => {
                    alert('Yutding');
                }, 1000);
                counter = 4;
            }
        }
    };
});
// x ga aylantirish
cards.forEach(card => {
    let number = card.querySelector('.number');
    number.innerHTML = 'X';
});
// random card alib unga $ berish
let r = random(0, 8);
let card = cards[r];
let number = card.querySelector('.number');
number.innerHTML = '$';
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
