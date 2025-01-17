function mergeSort(arr) {
    // Merge Sort: A divide-and-conquer algorithm that divides the array into halves,
    // recursively sorts each half, and then merges the sorted halves.
    // Time Complexity: O(n log n) - Log-linear
    
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Find the middle point to divide the array into two halves
    const mid = Math.floor(arr.length / 2);
    
    // Recursively sort the two halves
    const leftHalf = mergeSort(arr.slice(0, mid));
    const rightHalf = mergeSort(arr.slice(mid));
    
    // Merge the sorted halves
    return merge(leftHalf, rightHalf);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Add remaining elements from left array, if any
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    // Add remaining elements from right array, if any
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

// Example usage with step-by-step visualization
const array = [38, 27, 43, 3, 9, 82, 10];
console.log('Original array:', array);

// Step-by-step division process:
// First level of recursion:
// [38, 27, 43, 3] | [9, 82, 10]

// Second level:
// [38, 27] | [43, 3] | [9, 82] | [10]

// Third level (base cases):
// [38] | [27] | [43] | [3] | [9] | [82] | [10]

// Merging process:
// [27, 38] | [3, 43] | [9, 82] | [10]
// [3, 27, 38, 43] | [9, 10, 82]
// [3, 9, 10, 27, 38, 43, 82]

const sortedArray = mergeSort(array);
console.log('Sorted array:', sortedArray);