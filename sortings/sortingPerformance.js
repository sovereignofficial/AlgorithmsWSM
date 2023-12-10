function insertionSort(inputArr) {
    let n = inputArr.length;
    for (let i = 1; i < n; i++) {
        let current = inputArr[i];
        let j = i - 1;
        while ((j > -1) && (current < inputArr[j])) {
            inputArr[j + 1] = inputArr[j];
            j--;
        }
        inputArr[j + 1] = current;
    }
    return inputArr;
}

function selectionSort(inputArr) {
    let n = inputArr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (inputArr[j] < inputArr[minIndex]) {
                minIndex = j;
            }
        }
        let temp = inputArr[minIndex];
        inputArr[minIndex] = inputArr[i];
        inputArr[i] = temp;
    }
    return inputArr;
}


function mergeSort(inputArr) {
    if (inputArr.length <= 1) {
        return inputArr;
    }
    const half = Math.floor(inputArr.length / 2);
    const left = inputArr.slice(0, half);
    const right = inputArr.slice(half);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}


function generateRandomNumbers(n) {
    let numbers = [];
    for (let i = 0; i < n; i++) {
        numbers.push(Math.random());
    }
    return numbers;
}
function generateSortedNumbers(n) {
    let numbers = [];
    for (let i = 0; i < n; i++) {
        numbers.push(i);
    }
    return numbers;
}

function generateInverselySortedNumbers(n) {
    let numbers = [];
    for (let i = 0; i < n; i++) {
        numbers.push(n - i);
    }
    return numbers;
}

function measureCallback(callback, inputArr, inputType) {
    const inputLength = inputArr.length
    console.log(`using ${inputType} ${ inputLength} inputs`);
    console.time(`${callback.name}`);
    callback(inputArr);
    console.timeEnd(`${callback.name}`);
}

const COMMONINP1 = 55_000;
const COMMONINP2 = 120_000;
const COMMONINP3 = 200_000;
const COMMONINP4 = 250_000;
const COMMONINP5 = 300_000;

const MERGEINPUT1 = 500_000;
const MERGEINPUT2 = 1_000_000;
const MERGEINPUT3 = 10_500_000;
const MERGEINPUT4 = 15_000_000;
const MERGEINPUT5 = 18_000_000;

const INSERTINPUT1 = 50_000;
const INSERTINPUT2 = 100_000;
const INSERTINPUT3 = 150_000;
const INSERTINPUT4 = 200_000;
const INSERTINPUT5 = 250_000;

const SELECTINPUT1 = 25_000;
const SELECTINPUT2 = 50_000;
const SELECTINPUT3 = 100_000;
const SELECTINPUT4 = 150_000;
const SELECTINPUT5 = 200_000;


// // Merge Sort
// measureCallback(mergeSort, generateRandomNumbers(MERGEINPUT1), "not sorted");
// measureCallback(mergeSort, generateRandomNumbers(MERGEINPUT2), "not sorted");
// measureCallback(mergeSort, generateRandomNumbers(MERGEINPUT3), "not sorted");
// measureCallback(mergeSort, generateRandomNumbers(MERGEINPUT4), "not sorted");
// measureCallback(mergeSort, generateRandomNumbers(MERGEINPUT5), "not sorted");

// measureCallback(mergeSort, generateSortedNumbers(MERGEINPUT1), "sorted");
// measureCallback(mergeSort, generateSortedNumbers(MERGEINPUT2), "sorted");
// measureCallback(mergeSort, generateSortedNumbers(MERGEINPUT3), "sorted");
// measureCallback(mergeSort, generateSortedNumbers(MERGEINPUT4), "sorted");
// measureCallback(mergeSort, generateSortedNumbers(MERGEINPUT5), "sorted");

// measureCallback(mergeSort, generateInverselySortedNumbers(MERGEINPUT1), "inversely sorted");
// measureCallback(mergeSort, generateInverselySortedNumbers(MERGEINPUT2), "inversely sorted");
// measureCallback(mergeSort, generateInverselySortedNumbers(MERGEINPUT3), "inversely sorted");
// measureCallback(mergeSort, generateInverselySortedNumbers(MERGEINPUT4), "inversely sorted");
// measureCallback(mergeSort, generateInverselySortedNumbers(MERGEINPUT5), "inversely sorted");

// // Insertion Sort
// measureCallback(insertionSort, generateRandomNumbers(INSERTINPUT1), "not sorted");
// measureCallback(insertionSort, generateRandomNumbers(INSERTINPUT2), "not sorted");
// measureCallback(insertionSort, generateRandomNumbers(INSERTINPUT3), "not sorted");
// measureCallback(insertionSort, generateRandomNumbers(INSERTINPUT4), "not sorted");
// measureCallback(insertionSort, generateRandomNumbers(INSERTINPUT5), "not sorted");

// measureCallback(insertionSort, generateSortedNumbers(INSERTINPUT1), "sorted");
// measureCallback(insertionSort, generateSortedNumbers(INSERTINPUT2), "sorted");
// measureCallback(insertionSort, generateSortedNumbers(INSERTINPUT3), "sorted");
// measureCallback(insertionSort, generateSortedNumbers(INSERTINPUT4), "sorted");
// measureCallback(insertionSort, generateSortedNumbers(INSERTINPUT5), "sorted");

// measureCallback(insertionSort, generateInverselySortedNumbers(INSERTINPUT1), "inversely sorted");
// measureCallback(insertionSort, generateInverselySortedNumbers(INSERTINPUT2), "inversely sorted");
// measureCallback(insertionSort, generateInverselySortedNumbers(INSERTINPUT3), "inversely sorted");
// measureCallback(insertionSort, generateInverselySortedNumbers(INSERTINPUT4), "inversely sorted");
// measureCallback(insertionSort, generateInverselySortedNumbers(INSERTINPUT5), "inversely sorted");

// Selection Sort
measureCallback(selectionSort, generateRandomNumbers(SELECTINPUT1), "not sorted");
measureCallback(selectionSort, generateRandomNumbers(SELECTINPUT2), "not sorted");
measureCallback(selectionSort, generateRandomNumbers(SELECTINPUT3), "not sorted");
measureCallback(selectionSort, generateRandomNumbers(SELECTINPUT4), "not sorted");
measureCallback(selectionSort, generateRandomNumbers(SELECTINPUT5), "not sorted");

measureCallback(selectionSort, generateSortedNumbers(SELECTINPUT1), "sorted");
measureCallback(selectionSort, generateSortedNumbers(SELECTINPUT2), "sorted");
measureCallback(selectionSort, generateSortedNumbers(SELECTINPUT3), "sorted");
measureCallback(selectionSort, generateSortedNumbers(SELECTINPUT4), "sorted");
measureCallback(selectionSort, generateSortedNumbers(SELECTINPUT5), "sorted");

measureCallback(selectionSort, generateInverselySortedNumbers(SELECTINPUT1), "inversely sorted");
measureCallback(selectionSort, generateInverselySortedNumbers(SELECTINPUT2), "inversely sorted");
measureCallback(selectionSort, generateInverselySortedNumbers(SELECTINPUT3), "inversely sorted");
measureCallback(selectionSort, generateInverselySortedNumbers(SELECTINPUT4), "inversely sorted");
measureCallback(selectionSort, generateInverselySortedNumbers(SELECTINPUT5), "inversely sorted");
