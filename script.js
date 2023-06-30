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