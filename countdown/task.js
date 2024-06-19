// Нашли элемент с id="timer":
const start = document.getElementById("timer");
// Задаём время остановки таймера
const stop = Number(start.textContent) * 1000;

// Запускаем таймер
const timerId = setInterval ( ()=>{
    start.textContent = Number(start.textContent)-1
},1000);

// Останавливаем таймер , выводим сообщение
setTimeout(() => { clearInterval(timerId); alert('Вы победили в конкурсе!'); }, stop);

