let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let startIndex = 0;
let endIndex = arr.length - 1;
let target = 8;
// let target = -8;

function binarySearch(arr, startIndex, endIndex, target) {
    if (startIndex > endIndex) return false;

    let midIndex = Math.floor((startIndex + endIndex) / 2);

    if (arr[midIndex] === target) return true;

    if (arr[midIndex] > target)
        return binarySearch(arr, startIndex, midIndex - 1, target);
    else return binarySearch(arr, midIndex + 1, endIndex, target);
}

console.log(binarySearch(arr, startIndex, endIndex, target));
