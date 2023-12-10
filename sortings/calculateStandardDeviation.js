
// Insertion Sort Results
const insertionSortResults = {
    notSorted: [444.647, 1815, 4079, 7130, 11030],
    sorted: [1.818, 0.639, 1.389, 2.499, 0.921],
    inverselySorted: [917.249, 3556, 8078, 14196, 22648]
};

// Create arrays for selection sort results
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


// Merge Sort Average Times: {
//     notSorted: 4626.465200000001,
//     sorted: 3935.2322,
//     inverselySorted: 4007.7771999999995
//   }
//   Merge Sort Standard Deviation: {
//     notSorted: 3714.342032264956,
//     sorted: 3155.234845708978,
//     inverselySorted: 3159.904114656038
//   }
//   Insertion Sort Average Times: {
//     notSorted: 4899.7294,
//     sorted: 3935.2322,
//     inverselySorted: 4007.7771999999995
//   }
//   Insertion Sort Standard Deviation: {
//     notSorted: 3810.281774055226,
//     sorted: 3933.7790553426307,
//     inverselySorted: 9773.228439887758
//   }
//   Selection Sort Average Times: {
//     notSorted: 5699.330400000001,
//     sorted: 5049.3042000000005,
//     inverselySorted: 4952.823200000001
//   }
//   Selection Sort Standard Deviation: {
//     notSorted: 5670.7774240568315,
//     sorted: 4895.863884950904,
//     inverselySorted: 4954.312941233099
//   }