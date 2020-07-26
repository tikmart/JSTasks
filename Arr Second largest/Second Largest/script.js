
function secondLargest(values) {
    let largest
    let secondLargest
    for (let i = 0; i < values.length; i++)
        if (values[i] > largest) {
            secondLargest = largest
            largest = values[i]
        }
        else if (secondLargest < values[i] && values[i] < largest) {
            secondLargest = values[i]
        }
    return secondLargest;

}
let nums = [4, 3, 7, 5, 6, 2, 1];

alert('The second largest is equal to ' + secondLargest(nums));