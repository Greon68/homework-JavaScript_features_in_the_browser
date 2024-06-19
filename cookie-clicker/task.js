// Находим картинку-элемент с id="cookie":
const img = document.getElementById("cookie");
// Находим счётчик - элемент с id="clicker__counter"
const clicker_counter = document.getElementById("clicker__counter");


// Функция увеличения значения счётчика на 1 :
const counter_value =  ()=>{
   clicker_counter.textContent = Number(clicker_counter.textContent)+1;
   return clicker_counter.textContent
};

// Реакция на клик :

img.onclick = () => {
   // Запускаем функцию counter_value(), увеличиваем значение счётчика на 1,
   // результат сохраняем в переменную counter
   let counter = counter_value();
   
   // Если значение счётчика - число нечётное ,
   // то увеличиваем размер картинки :
   if (counter %2 == 1){
      img.width += 50;

   //Иначе уменьшаем размер картинки :
   } else {
      img.width -= 50;
   };      
}


