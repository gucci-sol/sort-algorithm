let roopNum = 0;

function bubbleSort(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
      }
      roopNum++;
    }
    if (isSorted(numbers)) {
      break;
    }
  }

}

function isSorted(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers[i + 1]) {
      return false;
    }
  }
  return true;
}

/********** Main Routine **********/
const numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 100));
}
console.log('Before:', numbers);
bubbleSort(numbers);
console.log('After:', numbers);
console.log('roop: ', roopNum);
/**********************************/
