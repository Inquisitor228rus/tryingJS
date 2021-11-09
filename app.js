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

// функция склонения минут
function declOfMin(n, minforms) {
    n = Math.abs(n) % 100
    let n1 = n % 10
    if (n > 10 && n < 20) {return minforms[2] }
    if (n1 > 1 && n1 < 5) {return minforms[1] }
    if (n1 == 1) {return minforms[0] }
    return minforms[2]
}

// функция склонения часов
function declOfHourse () {
    if (timeHourse >= 5 || timeHourse == 0) {return hourseForm[0]}
    if (timeHourse == 1) {return hourseForm[2]}
    if (timeHourse <= 4) {hourseForm[1]}
    return hourseForm[1]
}

const hourseForm = ['часов', 'часа', 'час']         // справочник слов
const minForms = ['минута', 'минуты', 'минут']      // тоже справочник слов

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
    
    // текст над полем ввода
    changedText(test, `Осталось: ${timeHourse} ${declOfHourse()} и ${timeMinutes} ${declOfMin(timeMinutes, minForms)}.
     `)
})
btnReset.addEventListener('click',() => {
    // сброс всех значений
    ticketNumH.value = 0
    ticketNumM.value = 0
    timeHourse = 8
    timeMinutes = 0
    changedText(test, `Осталось: ${(timeHourse)} часов и ${timeMinutes} минут.`)
})
