
// Insertion Sort Results
const insertionSortResults = {
    notSorted: [444.647, 1815, 4079, 7130, 11030],
    sorted: [1.818, 0.639, 1.389, 2.499, 0.921],
    inverselySorted: [917.249, 3556, 8078, 14196, 22648]
};

// Selection Sort Results
const selectionSortResults = {
    notSorted: [230.03, 905.622, 3520, 8333, 15508],
    sorted: [242.661, 956.86, 3265, 7249, 13533],
    inverselySorted: [186.424, 746.692, 3177, 7056, 13598]
};

// Merge Sort Results
const mergeSortResults = {
    notSorted: [218.741, 429.585, 5524, 7633, 9327],
    sorted: [284.829, 377.332, 4481, 6460, 8073],
    inverselySorted: [285.242, 410.644, 4690, 6763, 7890]
};


function calculateStandardDeviation(arr) {
    // Step 1: Calculate the mean
    let mean = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
 
    // Step 2: Subtract the mean from each number and square the result
    let squaredDiffs = arr.map(val => Math.pow(val - mean, 2));
 
    // Step 3: Calculate the mean of these squared differences
    let variance = squaredDiffs.reduce((acc, curr) => acc + curr, 0) / squaredDiffs.length;
 
    // Step 4: Take the square root of the variance
    return Math.sqrt(variance);
 }
 
const mergeSortStandardDeviation = {
    notSorted: calculateStandardDeviation(mergeSortResults.notSorted),
    sorted: calculateStandardDeviation(mergeSortResults.sorted),
    inverselySorted: calculateStandardDeviation(mergeSortResults.inverselySorted)
};

const selectionSortStandardDeviation = {
    notSorted: calculateStandardDeviation(selectionSortResults.notSorted),
    sorted: calculateStandardDeviation(selectionSortResults.sorted),
    inverselySorted: calculateStandardDeviation(selectionSortResults.inverselySorted)
};

const insertionSortStandardDeviation = {
    notSorted: calculateStandardDeviation(insertionSortResults.notSorted),
    sorted: calculateStandardDeviation(insertionSortResults.sorted),
    inverselySorted: calculateStandardDeviation(insertionSortResults.inverselySorted)
};


console.log("Standart Deviation Merge:",mergeSortStandardDeviation);
console.log("Standart Deviation Insertion:",insertionSortStandardDeviation);
console.log("Standart Deviation Selection:",selectionSortStandardDeviation);


