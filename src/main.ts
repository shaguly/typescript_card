const balance: HTMLElement= document.querySelector('#balance')!
const plau: HTMLElement    = document.querySelector('#play')!
const bet: HTMLInputElement     = document.querySelector('#bet')!

const cards: NodeListOf<HTMLElement> = document.querySelectorAll('.card')
let cash = 100
let counter = 0

//balansni chikarish
balance.innerHTML = `Balanse: $${cash}`

//onclink larni uladik
cards.forEach(card => {
    card.onclick = () => {
// agar kartochka ochilgan bolsa gayat ochmaymiz
if(card.classList.contains('is-flipped')){
    return
}
        
        if (counter < 3) {
            card.classList.add('is-flipped')
            counter++
            let number = card.querySelector('.number')!
            if(number.innerHTML == '$') {
// stavkani olip balanska goshamiz
                let amound =  +bet.value
                cash += amound * 1.5
                balance.innerHTML = `Balanse: $${cash}`
                setTimeout(() => {
                    alert('Yutding')
                }, 1000)
                // oyinni toxtadamiz
                counter = 4
            }

            // yutguzgan xalot
            else if (counter ===2) {
                let amound = +bet.value
                cash -= amound
                balance.innerHTML = `Balance: $${cash}`

                setTimeout(()=>{
                    alert('Yutqazding!')
                }, 1000)
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