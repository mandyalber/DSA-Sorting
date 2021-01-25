/*Imagine that I gave you 20 books to sort in alphabetical order. Express this as an algorithm and then implement your algorithm.*/

function sortBooks(array) { 
    if (array.length < 2) {
        return array
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = sortBooks(left);
    right = sortBooks(right);
    function merge(left, right, array) {
        let leftIndex = 0;
        let rightIndex = 0;
        let outputIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                array[outputIndex++] = left[leftIndex++]
            }
            else {
                array[outputIndex++] = right[rightIndex++]
            }
        }
        for (let i = leftIndex; i < left.length; i++) {
            array[outputIndex++] = left[i]
        }
        for (let i = rightIndex; i < right.length; i++) {
            array[outputIndex++] = right[i]
        }
        return array
    }
    return merge(left, right, array)
}


const books = [
    'Goodnight Moon',
    'B Book',
    'I Can Read With My Eyes Shut',
    'Mr. Brown Can Moo',
    'Cat In The Hat',
    'Inside Outside Upside Down',
    'Clean Up Book'
]

console.log(sortBooks(books))