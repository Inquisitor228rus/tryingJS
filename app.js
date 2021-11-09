const btnReset = document.getElementById('reset')
const btnRun = document.getElementById('run')
const test = document.getElementById('test')
const ticketNumH = document.getElementById('ticketNumH')
const ticketNumM = document.getElementById('ticketNumM')

const workHourse = 480              // часы работы в минутах
// let workMinutes = 0               // минуты работы
// let timeHourse = 0
// let timeMinutes = 0

function addStylesTo(node, text, color = 'black', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'left'
    node.style.backgroundColor = undefined
    node.style.padding = undefined
    node.style.display = 'block'
    node.style.width = '100%'

    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

btnReset.addEventListener('click',() => {
    // проверка ввода минут
    if (ticketNumM.value < 60) {
        timeMinutes = (workHourse - ticketNumM.value) % 60
    }else {ticketNumM.value = 59
        timeMinutes = (workHourse - ticketNumM.value) % 60
    }
    // проверка ввода часов
    if (ticketNumH.value < 8) {
        timeHourse = Math.trunc((workHourse - (ticketNumH.value * 60 + timeMinutes)) / 60)
    }else {ticketNumH.value = 7
        timeHourse = Math.trunc((workHourse - (ticketNumH.value * 60 + timeMinutes)) / 60)
    }
    // текст над полем ввода
    addStylesTo(test, `Осталось: ${(timeHourse)} часов и ${timeMinutes} минут.`)
})
btnRun.addEventListener('click',() => {
    ticketNumH.value = 0
    ticketNumM.value = 0
    timeHourse = 8
    timeMinutes = 0
    addStylesTo(test, `Осталось: ${(timeHourse)} часов и ${timeMinutes} минут.`)
})