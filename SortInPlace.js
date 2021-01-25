/*Write an algorithm to shuffle an array into a random order in place (i.e., without creating a new array).*/

function randomOrder(array) {
    for (let i = 0; i < array.length; i++) {
        let newIndex = Math.floor(Math.random() * array.length);
        let temp = array[i];
        array[i] = array[newIndex];
        array[newIndex] = temp;
    }
    return array;
}

let nums = [5, 6, 2, 1, 3, 7, 4, 9, 8];
console.log(randomOrder(nums))