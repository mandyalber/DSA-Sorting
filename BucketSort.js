/*Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are. You can't use arr.splice(), shift() or unshift() for this exercise.*/

function bucketSort(array, min, max) {
    let n = max / min;
    for (let i = 0; i < n; i++) {
        array[i] = i + 1;
    }
    return array
}

let nums = [5, 6, 2, 1, 3, 7, 4, 9, 8];
console.log(bucketSort(nums, Math.min(...nums), Math.max(...nums)))