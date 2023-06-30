'use strict'
//task1

function createSum() {
    let sum = 0; // Внутрішня приватна змінна 
  
    return function(num) {
      sum += num; // Додаємо переданий параметр до суми
      return sum; // Повертаємо поточну суму
    };
  }
  
  const sum = createSum();//тут утворюється замикання, sum запам'ятовує значення суми після кожного виклику
  
  console.log(sum(3)); // Виведе: 3
  console.log(sum(5)); //виведе 8
  console.log(sum(20)); // Виведе: 28

  //task2

  //1. визначити, чи елемент - число(за допомогою умови, в якій використовуємо typeof)
  //2. Пройтись циклом по числах, зібрати суму
  //3. порахувати кількість числових елементів
  //4. Якщо нема чисел - вивести 0

  let array = ["moon", 2, 5, 10, "sun"]

  function average(array){
    let sum = 0;
    let count = 0;

    
    for(let i = 0; i < array.length; i++){
        if (typeof array[i] === 'number'){
            sum += array[i];
            count++;
            }
        }
            const average = sum / count;

    if (count === 0) {
        return 0; 
          }

        return average;
  }

  
  console.log(average(array));

//task3
//1. Запитати через prompt х, у, знак
//2. у функції створити змінну, в яку покладемо результат
//3. перевірка знаків і відповідні математичні дії


function doMath(x, znak, y) {
    let result;
  
    if (znak === '+') {
      result = x + y;
    } else if (znak === '-') {
      result = x - y;
    } else if (znak === '*') {
      result = x * y;
    } else if (znak === '/') {
      result = x / y;
    } else if (znak === '%') {
      result = x % y;
    } else if (znak === '^') {
      result = Math.pow(x, y);
    } else {
      console.log('Невідомий оператор');
      return;
    }
  
    console.log('Результат: ' + result);
  }
  
  let x = parseFloat(prompt('Введіть перше число:'));
  let znak = prompt('Введіть математичний оператор (+, -, *, /, %, ^):');
  let y = parseFloat(prompt('Введіть друге число:'));
  
  doMath(x, znak, y);
  

//task4
//1. Запитати в юзера про кількість елементів у основному і внутрішніх масивах
//2. створити змінну з основним та зовнішнім масивами, в які будемо пушити значення
//3. запустивши цикл, запитати значення всіх елементів
//4. запушити значення в цикли


function fillArray() {
    var arr1 = parseInt(prompt('Скільки елементів буде в першому масиві?'));
    var arr2 = parseInt(prompt('Скільки елементів буде в другому масиві?'));
    var array = [];
  
    for (var i = 0; i < arr1; i++) {
      var innerArray = [];
      for (var j = 0; j < arr2; j++) {
        var value = prompt('Введіть значення для елемента [' + i + '][' + j + ']:');
        innerArray.push(value);
      }
      array.push(innerArray);
    }
  
    console.log(array);
  }
  
  fillArray();
  
//task5
//1. запитати в користувача два значення: рядок, символи для видалення, закинути їх в змінну
//2. за доп. filter перевірити чи  індекс символу не знаходиться у масиві symbolsToRemove. 
//Таким чином, лише символи, які не потрібно видаляти, залишаються в новому масиві.
//3. з'єднуємо елементи нового масиву у рядок за допомогою join, і повертаємо цей результат.

function removeSymbolsFromString(str, symbolsToRemove) {
    var resultArray = str.split('').filter(function(symbol) {
      return symbolsToRemove.indexOf(symbol) === -1;
    });
    var result = resultArray.join('');
    return result;
  }
  
  var inputString = prompt('Введіть рядок:');
  var symbolsToRemove = prompt('Введіть символи для видалення (через кому та пробіл):').split(', ');
  
  var outputString = removeSymbolsFromString(inputString, symbolsToRemove);
  console.log(outputString);
  