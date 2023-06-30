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
        return average;
    
   
  }

  

  console.log(average(array));