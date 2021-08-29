let roopNum = 0;

function combSort(numbers) {
  const lenNumbers = numbers.length;
  let gap = lenNumbers;
  let swap = false;

  while (gap !== 1 || swap) {
    swap = false;
    gap = Math.floor(gap / 1.3);
    if (gap < 1) {
      gap = 1;
    }

    for (let i = 0; i < lenNumbers - gap; i++) {
      if (numbers[i] > numbers[i + gap]) {
        [numbers[i], numbers[i + gap]] = [numbers[i + gap], numbers[i]];
        swap = true;
      }
      roopNum++;
    }
  }
}

/********** Main Routine **********/
const numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 100));
}
console.log('Before:', numbers);
combSort(numbers);
console.log('After:', numbers);
console.log('roop: ', roopNum);
/**********************************/
