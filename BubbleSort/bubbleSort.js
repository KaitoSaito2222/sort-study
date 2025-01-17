function bubbleSort(arr) {
// Bubble Sort: A simple sorting algorithm that repeatedly steps through the array,
// compares adjacent elements, and swaps them if they're in the wrong order
// Time Complexity: O(n^2) - Quadratic
    // length of array
    const n = arr.length;
    
    // Outer loop
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        
        // Inner loop:Comparison and exchange of adjacent elements
        for (let j = 0; j < n - 1 - i; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Element exchange
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        
        // if not a single exchange occurs,
        // the array is already sorted, so exit
        if (!swapped) {
            break;
        }
    }
    
    return arr;
}

const array = [64, 34, 25, 12, 22, 11, 90];
console.log('before sort:', array);
console.log('after sort:', bubbleSort(array));

// first pass (i=0)
// Initial array:
[64, 34, 25, 12, 22, 11, 90]
// Swap since 64 > 34:
[34, 64, 25, 12, 22, 11, 90]
// Swap since 64 > 25
[34, 25, 64, 12, 22, 11, 90]
// Swap since 64 > 12
[34, 25, 12, 64, 22, 11, 90]
// Swap since 64 > 22
[34, 25, 12, 22, 64, 11, 90] 
// Swap since 64 > 11
[34, 25, 12, 22, 11, 64, 90]
// No swap since 90 is largest
[34, 25, 12, 22, 11, 64, 90]  

// second pass (i=1)
// Initial array:
[34, 25, 12, 22, 11, 64, 90]
// Swap since 34 > 25:
[25, 34, 12, 22, 11, 64, 90]
// Swap since 34 > 12
[25, 12, 34, 22, 11, 64, 90]
// Swap since 34 > 22
[25, 12, 22, 34, 11, 64, 90]
// Swap since 34 > 11
[25, 12, 22, 11, 34, 64, 90]
// No swap since 34 is largest
[25, 12, 22, 11, 34, 64, 90]

// third pass (i=2)
// Initial array:
[25, 12, 22, 11, 34, 64, 90]
// Swap since 25 > 12:
[12, 25, 22, 11, 34, 64, 90]
// Swap since 25 > 22
[12, 22, 25, 11, 34, 64, 90]
// Swap since 25 > 11
[12, 22, 11, 25, 34, 64, 90]
// No swap since 25 is largest
[12, 22, 11, 25, 34, 64, 90]

// continue...


