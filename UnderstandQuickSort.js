/*1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.

The pivot could have been 17, but could not have been 14
The pivot could have been either 14 or 17
Neither 14 nor 17 could have been the pivot
The pivot could have been 14, but could not have been 17

a) could have been either 14 or 17, all values before are less, all values after are greater

2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the quicksort algorithm.

a)  3,  9, 10, 12, 19, 14, 17, 16, 13, 15

When using the last item on the list as a pivot

a) 10,  3,  9, 12, 19, 14, 17, 16, 13, 15

When using the first item on the list as a pivot

a) 3,  9, 10, 12, 13, 14, 15, 16, 19, 17
*/
function qSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    console.log('array', array)
    array = qSort(array, start, middle);
    array = qSort(array, middle + 1, end);

    return array;
};

function partition(array, start, end) {

    const pivot = array[end - 1];
    console.log('pivot', pivot)
    let j = start;

    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end - 1, j);

    return j;
}

function swap(array, i, j){
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

console.log(qSort([14, 17, 13, 15, 19, 10, 3, 16, 9, 12]))
