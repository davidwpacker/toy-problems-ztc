// Write a function that takes an array of numbers as input. It should output an array of those same numbers sorted from lowest to highest.
// A function that takes an array like [5, 3, 1, 2, 4] and returns [1, 2, 3, 4, 5]

// The algorthm

const bubbleSort = function(numbers) {
    const length = numbers.length;

    for (let loop = 0; loop < length; loop++) {
        for (let position = 0; position < length; position++) {
            if (numbers[position] < numbers[position + 1]) {
              // swap
              const smallerNumber = numbers[position + 1];
              numbers[position + 1] = numbers[position];
              numbers[position] = smallerNumber;
            }
        }
    }

return numbers;
}


// Testing

let testArray = [ 420, 4, 69, 11, 62];

console.log("Sorted? ", bubbleSort(testArray));