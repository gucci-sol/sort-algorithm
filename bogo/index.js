let roopNum = 0;

function bogoSort(numbers) {
  while (!isSorted(numbers)) {
    shuffle(numbers)
    roopNum++
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

// ダステンフェルドのアルゴリズム（フィッシャー-イェーツの改良版）
function shuffle(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const k = Math.floor(Math.random() * (i + 1));
    [array[i], array[k]] = [array[k], array[i]];
  }
}

/********** Main Routine **********/
const numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 100))
}
console.log('Before:', numbers);
bogoSort(numbers);
console.log('After:', numbers);
console.log('roop: ', roopNum);
/**********************************/
