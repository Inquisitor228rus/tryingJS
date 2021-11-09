// сбор новых констант для оперирования из элементов.
const btnReset = document.getElementById('reset')           // кнопка сброса
const btnRun = document.getElementById('run')               // кнопка подсчета
const test = document.getElementById('test')                // элемент подсчета
const ticketNumH = document.getElementById('ticketNumH')    // элемент поля 1
const ticketNumM = document.getElementById('ticketNumM')    // элемент поля 2

const workHourse = 480              // часы работы в минутах

// функция оперирования элементов
function changedText(node, text) { 
    node.textContent = text
}
// оперирование элементами
btnRun.addEventListener('click',() => {
    // проверка ввода минут
    if (ticketNumM.value > 60) {
        ticketNumM.value = 59}
    timeMinutes = (workHourse - ticketNumM.value) % 60

    // проверка ввода часов
    if (ticketNumH.value > 8) {
        ticketNumH.value = 7}
    timeHourse = Math.trunc((workHourse - (ticketNumH.value * 60 + timeMinutes)) / 60)
    
    
    // проверка: часов или часа?
    if (timeHourse >= 5) {ruHourse = 'часов'}
    else if (timeHourse == 1) {ruHourse = 'час'}
    else {ruHourse = 'часа'}
    // текст над полем ввода
    changedText(test, `Осталось: ${timeHourse} ${ruHourse} и ${timeMinutes} минут.`)
})
btnReset.addEventListener('click',() => {
    // сброс всех значений
    ticketNumH.value = 0
    ticketNumM.value = 0
    timeHourse = 8
    timeMinutes = 0
    changedText(test, `Осталось: ${(timeHourse)} часов и ${timeMinutes} минут.`)
})
