
// Insertion Sort Results
const insertionSortResults = {
    notSorted: [463.803, 1834, 4303, 7294, 11662],
    sorted: [2.152, 0.807, 1.169, 1.785, 1.344],
    inverselySorted: [991.654, 3712, 8400, 14628, 23283]
};

// Selection Sort Results
const selectionSortResults = {
    notSorted: [229.866, 898.424, 3562, 7941, 14081],
    sorted: [224.938, 883.317, 3005, 6852, 12127],
    inverselySorted: [188.248, 745.324, 2990, 4742, 12023]
};

// Merge Sort Results
const mergeSortResults = {
    notSorted: [219.919, 434.326, 7286, 9557, 9218],
    sorted: [263.823, 373.164, 4470, 6448, 7837],
    inverselySorted: [284.121, 402.837, 4477, 6516, 7817],
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


console.log("Standart Deviation Merge:", mergeSortStandardDeviation);
console.log("Standart Deviation Insertion:", insertionSortStandardDeviation);
console.log("Standart Deviation Selection:", selectionSortStandardDeviation);

// results as milliseconds
StandartDeviationMerge = {
    notSorted: 4168.685868684086,
    sorted: 3097.5859950804015,
    inverselySorted: 3092.701154022393
}
StandartDeviationInsertion = {
    notSorted: 4016.6932246973306,
    sorted: 0.4708853788343826,
    inverselySorted: 8011.239730625627
}
StandartDeviationSelection = {
    notSorted: 5141.451208616338,
    sorted: 4409.636171598016,
    inverselySorted: 4265.366007616303
}