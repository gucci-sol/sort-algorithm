let roopNum = 0;

function insertionSort(numbers) {
  const lenNumbers = numbers.length;
  for (let i = 0; i < lenNumbers - 1; i++) {
    const tmp = numbers[i + 1];
    let j = i;

    while (j >= 0 && numbers[j] > tmp) {
      numbers[j + 1] = numbers[j]
      j--;
      roopNum++;
    }
    numbers[j + 1] = tmp;
  }
}

/********** Main Routine **********/
const numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 100));
}
console.log('Before:', numbers);
insertionSort(numbers);
console.log('After:', numbers);
console.log('roop: ', roopNum);
/**********************************/
