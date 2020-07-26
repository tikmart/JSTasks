
function secondLargest(values) {
    let secondLargest = 0;
    let slIndex = 0;
    for (let i = 0; i < values.length; i++) {
        if (values[i] > values[slIndex]) {
            slIndex = i;
        }

    }
    for (let i = 0; i < values.length; i++) {
        if (values[i] > secondLargest && values[i] !== values[slIndex]) {
            secondLargest = values[i]
        }
    }

    return secondLargest;

}
let nums = [4, 3, 7, 5, 6, 2, 1];

alert('The second largest is equal to ' + secondLargest(nums));