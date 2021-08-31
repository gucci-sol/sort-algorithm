let roopNum = 0;

function gnomeSort(numbers) {
  const lenNumbers = numbers.length;
  let index = 0;
  while (index < lenNumbers - 1) {
    if (index === 0) {
      // indexが負の数になるのを防ぐため
      index++;
    }

    if (numbers[index] < numbers[index - 1]) {
      [numbers[index - 1], numbers[index]] = [numbers[index], numbers[index - 1]];
      index--;
    } else {
      index++;
    }
    roopNum++;
  }
}

/********** Main Routine **********/
const numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 100));
}
console.log('Before:', numbers);
gnomeSort(numbers);
console.log('After:', numbers);
console.log('roop: ', roopNum);
/**********************************/
