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

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert (+a + +b);