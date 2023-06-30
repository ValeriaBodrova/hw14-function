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
  