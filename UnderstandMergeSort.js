/*Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

What is the resulting list that will be sorted after 3 recursive calls to mergesort?

a) 21, 1, 

What is the resulting list that will be sorted after 16 recursive calls to mergesort?

a) 16, 49, 39, 27, 43, 34, 46, 40

What are the first 2 lists to be merged?

a) left [ 21 ] right [ 1 ]

Which two lists would be merged on the 7th merge?

a) left [ 1, 21, 26, 45 ] right [ 2, 9, 28, 29 ]
*/

function mSort (array){
    if (array.length <= 1){
        return array
    }

    const middle = Math.floor(array.length/2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mSort(left);
    right = mSort(right);

    return merge(left, right, array)
}

function merge (left, right, array){
    console.log('left',left,'right',right)
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            array[outputIndex++] = left[leftIndex++]
        }
        else {
            array[outputIndex++] = right[rightIndex++]
        }
    }
    for (let i = leftIndex; i < left.length; i++){
        array[outputIndex++] = left[i]
    }
    for (let i = rightIndex; i < right.length; i++){
        array[outputIndex++] = right[i]
    }
    return array
}

mSort([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40])