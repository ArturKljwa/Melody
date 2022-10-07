$(document).ready(function () {
    var currentFloor = 2; // Переменная где хранится текущий этаж
    var counterUP = $(".counter-up"); // Кнопка увеличения этажа
    var counterDown = $(".counter-down"); // Кнопка уменьшения этаэа
    var floorPath = $(".home-image path"); // Каждый отдельный этаж в свг
    
    
    // функция наведения мышью на этаж
    floorPath.on("mouseover", function() {
        floorPath.removeClass("current-floor") //удаляем активный класс у этажей
        currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
    $(".counter").text(currentFloor);  // Записываем текущий этаж в счетчик справа
    
  })
  // функция клика на кнопку Вверх
  counterUP.on("click", function(){
    if (currentFloor < 18) { // проверяем значение этажа оно не должно быть больше 18
        currentFloor++; // прибавляем этаж
    usCurrentFloor = currentFloor.toLocaleString("en-US",{ minimumIntegerDigits: 2,
         useGrouping: false}); // форматируем переменную, чтобы было 01 а не 1
    $(".counter").text(usCurrentFloor); // Записываем текущий этаж в счетчик справа
    floorPath.removeClass("current-floor")//удаляем активный класс у этажей
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // Добавляем класс у элементов 
    //path, подсвечиваем текущий этаж
    }
  })
  // функция клика на кнопку вниз
  counterDown.on("click", function(){
    if (currentFloor > 2) { // проверяем значение этажа оно не должно быть меньше 2
        currentFloor--; // отнимаем один 1
    usCurrentFloor = currentFloor.toLocaleString("en-US",{ minimumIntegerDigits: 2, 
         useGrouping: false});// форматируем переменную, чтобы было 01 а не 1
    $(".counter").text(usCurrentFloor); // Записываем текущий этаж в счетчик справа
    floorPath.removeClass("current-floor") //удаляем активный класс у этажей
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");// Добавляем класс у элементов 
    //path, подсвечиваем текущий этаж
    }
  })
});