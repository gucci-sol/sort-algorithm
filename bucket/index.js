let roopNum = 0;

function bucketSort(numbers) {
  const maxNum = Math.max(...numbers);

  // バケットを用意
  const bucket = [];
  for (let i = 0; i < maxNum; i++) {
    bucket[i] = 0;
    roopNum++;
  }

  // バケットの振り分け
  for (const num of numbers) {
    bucket[num - 1]++;
    roopNum++;
  }

  const sortedNumebers = [];
  for (let i = 0; i < maxNum; i++) {
    if (bucket[i] === 0) {
      continue;
    }
    for (let j = 0; j < bucket[i]; j++) {
      sortedNumebers.push(i + 1);
      roopNum++;
    }
  }
  return sortedNumebers;
}

// 挿入ソートを利用したバージョン
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

function bucketSortByInsertion(numbers) {
  const maxNum = Math.max(...numbers);
  const lenNumbers = numbers.length;

  // バケットの用意
  const bucketsSize = Math.floor(maxNum / lenNumbers);
  const buckets = [];
  for (let i = 0; i < bucketsSize; i++) {
    buckets.push([]);
    roopNum++;
  }

  // バケットの割り振り
  for (let i = 0; i < lenNumbers; i++) {
    let quotient = Math.floor(numbers[i] / lenNumbers)
    if (quotient === bucketsSize) {
      quotient--;
    }
    buckets[quotient].push(numbers[i]);
    roopNum++;
  }

  // 各バケットごとに挿入ソートし、結合
  const sortedNumebers = [];
  for (let i = 0; i < bucketsSize; i++) {
    insertionSort(buckets[i]);
    sortedNumebers.push(...buckets[i]);
    roopNum++;
  }
  return sortedNumebers;
}

/********** Main Routine **********/
const numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 100));
}
console.log('Before:', numbers);
const args = process.argv[2];
console.log(args === 'insertion' ? 'By Insertion Sort' : 'Normal');
const sortedNumebers = args === 'insertion' 
  ? bucketSortByInsertion(numbers) 
  : bucketSort(numbers);
console.log('After:', sortedNumebers);
console.log('roop: ', roopNum);
/**********************************/

// 挿入ソートを用いたバケットソートの方が計算量が少ない。