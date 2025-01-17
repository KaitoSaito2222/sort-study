function selectionSort(arr) {
    // Selection Sort: Repeatedly finds the minimum element from the unsorted portion
    // and places it at the beginning of the sorted portion.
    // Time Complexity: O(n²) - Quadratic (inefficient for large datasets)
    
    const n = arr.length;
    
    // Traverse through all array elements
    for (let i = 0; i < n - 1; i++) {
        // Find the minimum element in remaining unsorted array
        let minIndex = i;
        
        // Check the unsorted portion for a smaller element
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        // Swap the found minimum element with the first element of unsorted portion
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    
    return arr;
}

// Example usage with step-by-step visualization
const array = [64, 34, 25, 12, 22, 11, 90];
console.log('Original array:', array);

// Step-by-step sorting process:
// First pass (i=0):
// [64, 34, 25, 12, 22, 11, 90]
// Find minimum (11) and swap with first element
// [11, 34, 25, 12, 22, 64, 90]

// Second pass (i=1):
// [11, 34, 25, 12, 22, 64, 90]
// Find minimum in remaining array (12) and swap with second element
// [11, 12, 25, 34, 22, 64, 90]

// Third pass (i=2):
// [11, 12, 25, 34, 22, 64, 90]
// Find minimum (22) and swap with third element
// [11, 12, 22, 34, 25, 64, 90]

// Fourth pass (i=3):
// [11, 12, 22, 34, 25, 64, 90]
// Find minimum (25) and swap with fourth element
// [11, 12, 22, 25, 34, 64, 90]

// Fifth pass (i=4):
// [11, 12, 22, 25, 34, 64, 90]
// No swap needed as 34 is minimum of remaining elements

// Sixth pass (i=5):
// [11, 12, 22, 25, 34, 64, 90]
// No swap needed as 64 is minimum of remaining elements

console.log('Starting Selection Sort...');
const sortedArray = selectionSort(array);
console.log('Sorted array:', sortedArray);

// Let's visualize another example
const array2 = [38, 27, 43, 3, 9, 82, 10];
console.log('\nSorting another array:', array2);

// Step-by-step process for array2:
// Initial: [38, 27, 43, 3, 9, 82, 10]
// Pass 1: [3, 27, 43, 38, 9, 82, 10]  // 3 is smallest
// Pass 2: [3, 9, 43, 38, 27, 82, 10]  // 9 is next smallest
// Pass 3: [3, 9, 10, 38, 27, 82, 43]  // 10 is next smallest
// Pass 4: [3, 9, 10, 27, 38, 82, 43]  // 27 is next smallest
// Pass 5: [3, 9, 10, 27, 38, 82, 43]  // 38 is next smallest
// Pass 6: [3, 9, 10, 27, 38, 43, 82]  // 43 is next smallest
// Final:  [3, 9, 10, 27, 38, 43, 82]  // Array is sorted

const sortedArray2 = selectionSort(array2);
console.log('Final sorted array:', sortedArray2);