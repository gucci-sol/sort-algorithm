let roopNum = 0;

function cocktailSort(numbers) {
  const lenNumbers = numbers.length;
  let swap = true;
  let startLimit = 0;
  let endLimit = lenNumbers - 1;

  while (swap) {
    swap = false;
    for (let i = 0; i < lenNumbers - 1; i++) {
      if (numbers[i] > numbers[i + 1]) {
        [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
        swap = true;
      }
      roopNum++;
    }

    endLimit--;
    if (!swap) break;

    swap = false;
    for (let i = endLimit; i > 0; i--) {
      if (numbers[i - 1] > numbers[i]) {
        [numbers[i], numbers[i - 1]] = [numbers[i - 1], numbers[i]];
        swap = true;
      }
      roopNum++;
    }

    startLimit++;
    if (!swap) break;
  }
}

/********** Main Routine **********/
const numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 100));
}
console.log('Before:', numbers);
cocktailSort(numbers);
console.log('After:', numbers);
console.log('roop: ', roopNum);
/**********************************/
