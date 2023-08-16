const adviceId = document.getElementById('id-advice')
const description = document.getElementById('id-description')
const btnDice = document.getElementById('dice-button')

btnDice.addEventListener('click', () => {
    newAdvice()
    rotate()
})
async function advice() {
    const response = await fetch('https://api.adviceslip.com/advice')
    return await response.json()
}
async function newAdvice() {
    const conselho = await advice()
    adviceId.innerHTML = conselho.slip.id;
    description.innerHTML = conselho.slip.advice;
}
function rotate() {
    btnDice.animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(180deg)' }
    ], {
        duration: 500,
    });
}