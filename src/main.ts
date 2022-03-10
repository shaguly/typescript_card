const balance: HTMLElement= document.querySelector('#balance')!
const plau: HTMLElement    = document.querySelector('#play')!
const bet: HTMLElement     = document.querySelector('#bet')!

const cards: NodeListOf<HTMLElement> = document.querySelectorAll('.card')

let counter = 0

//onclink larni uladik
cards.forEach(card => {
    card.onclick = () => {
        if (counter < 3) {
            card.classList.add('is-flipped')
            counter++

            let number = card.querySelector('.number')!
            if(number.innerHTML == '$') {
                setTimeout(() => {
                    alert('Yutding')
                }, 1000)
                counter = 4
            }
        }
    }
})
// x ga aylantirish
cards.forEach(card => {
    let number = card.querySelector('.number')!
    number.innerHTML = 'X'
})

// random card alib unga $ berish

let r = random(0 ,8)
let card = cards[r]
let number = card.querySelector('.number')!
number.innerHTML = '$'

function random(min: number, max: number){
    return Math.floor(Math.random() * (max - min)) + min
}