//Взаимодействие: alert, prompt, confirm

// let userName = prompt('Как тебя зовут?',"Ваше имя");

// alert(userName);

// let notBot = confirm ("ты бот?", "");
// alert (notBot);

/*
//Преобразование типов

let value = true;
alert(typeof value); // boolean

value = String(value); // теперь value это строка "true"
alert(typeof value); // string
*/
/*
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert (+a + +b);
*/

// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

// if (year == 2015) {
//     alert( "Правильно!" );
//     alert( "Вы такой умный!" );
//   }
/*
  let company = prompt('Какое "официальное" название JavaScript?', '');

if (company == 'ECMAScript') {
  alert('Верно!');
} else {
  alert('Не знаете? “ECMAScript”!');
}
*/

// let value = prompt('Введите число', 0);

// if (value > 0 ) {
//   alert(1);
// } else if (value < 0 ) {
//     alert(-1);
// } else {
//     alert(0);
// }

/*
Перепишите конструкцию if с использованием условного оператора '?':

let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
*/
// let a = prompt("Первое число?", 0);
// let b = prompt("Первое число?", 0);

// if (a + b < 4 ) {
//   alert('мало');
// } else {
//     alert('много');
// }
// решение с выводом на экран

let a = prompt("Первое число?", 0);
let b = prompt("Первое число?", 0);

result = (a + b < 4) ? alert('Мало') : alert('Много'); //само решение

