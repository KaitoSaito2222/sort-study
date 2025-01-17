function quickSort(arr, start = 0, end = arr.length - 1) {
    // Quick Sort: A divide-and-conquer algorithm that picks an element as a pivot,
    // partitions the array around the pivot, and recursively sorts the sub-arrays.
    // Time Complexity: Average O(n log n), Worst case O(n²)
    
    // Base case: if start index is greater than or equal to end index
    if (start >= end) {
        return arr;
    }

    // Get pivot index by partitioning the array
    let pivotIndex = partition(arr, start, end);

    // Recursively sort elements before and after pivot
    quickSort(arr, start, pivotIndex - 1);  // Sort left part
    quickSort(arr, pivotIndex + 1, end);    // Sort right part
    
    return arr;
}

function partition(arr, start, end) {
    // Choose the last element as pivot
    let pivot = arr[end];
    
    // Index of smaller element and indicates
    // the right position of pivot found so far
    let i = start - 1;

    // Traverse through all elements
    // compare each element with pivot
    for (let j = start; j < end; j++) {
        // If current element is smaller than pivot
        if (arr[j] < pivot) {
            i++;  // Increment index of smaller element
            // Swap elements
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // Place pivot in its correct position
    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
    return i + 1;  // Return the pivot's position
}

// Example usage with step-by-step visualization
const array = [64, 34, 25, 12, 22, 11, 90];
console.log('Original array:', array);

// Step-by-step partitioning process:
// First partition (pivot = 90):
// [64, 34, 25, 12, 22, 11] | [90]
// All elements less than 90 stay left, 90 is in final position

// Second partition (pivot = 11):
// [11] | [64, 34, 25, 12, 22] | [90]
// 11 moves to its final position

// Third partition (pivot = 22):
// [11] | [12] | [22] | [64, 34, 25] | [90]
// 22 finds its position

// Fourth partition (pivot = 25):
// [11] | [12] | [22] | [25] | [64, 34] | [90]
// 25 is placed correctly

// Final partitions:
// [11] | [12] | [22] | [25] | [34] | [64] | [90]
// Array is now sorted

const sortedArray = quickSort(array);
console.log('Sorted array:', sortedArray);