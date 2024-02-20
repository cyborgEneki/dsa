let arr = [];

for (let i = 1; i <= 1024; i++) {
    arr.push(i);
}

function binarySearch(arr, target) {
    // loop through
    // find the midpoint
    // if the target the midpoint
    // Y: return
    // else if the target larger than the midpoint?
    // Y: end stays, start migrates to the right; continue
    // else
    // start stays, end migrates to the left
    // return false
    let startIndex = 0;
    let endIndex = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
        let midIndex = Math.floor((startIndex + endIndex) / 2);

        if (target === arr[midIndex]) return true;
        else if (target > arr[midIndex]) {
            startIndex = midIndex + 1;
        } else {
            endIndex = midIndex - 1;
        }
    }

    return false;
}

console.log(binarySearch(arr, 4));
console.log(binarySearch(arr, 4000));
console.log(binarySearch(arr, -4000));
console.log(binarySearch(arr, 76));
