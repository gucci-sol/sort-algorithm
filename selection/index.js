let roopNum = 0;

function selectionSort(numbers) {
  const lenNumbers = numbers.length;
  for (let i = 0; i < lenNumbers - 1; i++) {
    let minNumIndex = i;
    for (let j = i + 1; j < lenNumbers; j++) {
      if (numbers[j] < numbers[minNumIndex]) {
        minNumIndex = j;
      }
      roopNum++;
    }
    [numbers[i], numbers[minNumIndex]] = [numbers[minNumIndex], numbers[i]];
  }
}

/********** Main Routine **********/
const numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 100));
}
console.log('Before:', numbers);
selectionSort(numbers);
console.log('After:', numbers);
console.log('roop: ', roopNum);
/**********************************/
