
// Находим счётчик общего количества кликов - элемент с id="count_click"
const clicker_counter = document.getElementById("count_click");

// Пишем функцию увеличения значения у счётчика count_click
function counter_value() {
    clicker_counter.textContent = Number(clicker_counter.textContent)+1;
    if (clicker_counter.textContent>25){
      alert('Игра окончена');
      // Обнуляем счётчик пойманных кротов:
    caught.textContent = 0;
    // Обнуляем счётчик промахов:
    lost.textContent = 0; 
    // Обнуляем счётчик общего количества кликов:  
    clicker_counter.textContent = 0
    };
    return clicker_counter.textContent
 };

//  Находим элемент, считающий пойманных кротов:
let caught = document.getElementById("caught");

// Функция - счётчик пойманных кротов:
function caught_count() {
  caught.textContent = Number(caught.textContent)+1;

  if (caught.textContent >=10){
    alert('Победа');
    // Обнуляем счётчик пойманных кротов:
    caught.textContent = 0;
    // Обнуляем счётчик промахов:
    lost.textContent = 0; 
    // Обнуляем счётчик общего количества кликов:  
    clicker_counter.textContent = 0
  };

  return caught.textContent
};
 


//  Находим элемент, считающий промахи:
let lost = document.getElementById("lost");

// Функция - счётчик пойманных кротов:
function lost_count() {
  lost.textContent = Number(lost.textContent)+1;

  if (lost.textContent >= 5){
    alert('Вы проиграли');

    // Обнуляем счётчик пойманных кротов:
    caught.textContent = 0;
    // Обнуляем счётчик промахов:
    lost.textContent = 0; 
    // Обнуляем счётчик общего количества кликов:  
    clicker_counter.textContent = 0   
  };

  return lost.textContent
};



// Выделяем массив элементов , описывающих лунки
let hole = document.querySelectorAll("div.hole")
// console.log(hole); // NodeList(9):0:div#hole1.hole
                                // 1:div#hole2.hole
                                // 2:div#hole3.hole
                                // 3:div#hole4.hole
                                // 4:div#hole5.hole.hole_has-mole
                                // 5:div#hole6.hole
                                // 6:div#hole7.hole
                                // 7:div#hole8.hole
                                // 8: div#hole9.hole
                                // length: 9


// Проходим циклом по всем лункам и реагируем на клик:
for (let i = 0; i < 9; i++) { 
  // console.log(hole[i].id);
 
  hole[i].onclick = () => {
    counter_value()
    console.log(`Попал в лунку ${i+1}`);
    
    if (hole[i].classList.contains( 'hole_has-mole' )){
      caught_count();
      console.log('Поймал крота !!!');

    } else {
      lost_count();
      console.log('Пусто!')
    }   
  }
};

