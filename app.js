// сбор новых констант для оперирования из элементов.
const btnReset = document.getElementById('reset')           // кнопка сброса
const btnRun = document.getElementById('run')               // кнопка подсчета
const test = document.getElementById('test')                // элемент подсчета
const ticketNumH = document.getElementById('ticketNumH')    // элемент поля 1
const ticketNumM = document.getElementById('ticketNumM')    // элемент поля 2

const workHourse = 480              // часы работы в минутах

// функция оперирования элементов
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
// оперирование элементами
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
