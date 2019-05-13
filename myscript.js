jQuery('document').ready(function() { //указываем область действия скрипта
    jQuery('button').on('click', function() { //указываем событие и условие события (кнопка всего одна поэтому селектор не нужен)
        var value1, value2, value3; //обозначаем переменные
        value1 = jQuery('#v1').val(); //через метод val и селектор будем доставать число с первой строки ввода
        value2 = jQuery('#v2').val();
        value1 = parseFloat(value1); //метод val является строковым, поэтому мы переконвертируем его с помощью функции parseFloat (аналог parceInt для дробных чисел)
        value2 = parseFloat(value2);
        value3 = value1 + value2;
        alert(value3); //вывод суммы сделал с помощью alert, но так же его можно вывести в строку, для этого в HTML нужно указать еще 1 селектор
    });

});