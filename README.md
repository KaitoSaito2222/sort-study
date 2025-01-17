# sort-study
# Sorting Algorithms in JavaScript

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)](https://www.javascript.com/)

A collection of sorting algorithms implemented in JavaScript with detailed explanations and visualizations.

## Table of Contents
- [Algorithms Overview](#algorithms-overview)
- [Complexity Comparison](#complexity-comparison)
- [Usage](#usage)
- [Implementation Details](#implementation-details)

## Complexity Comparison

| Algorithm      | Time (Average) | Time (Worst) | Space    | Stable |
|---------------|----------------|--------------|----------|---------|
| QuickSort     | O(n log n)     | O(n²)        | O(log n) | No      |
| MergeSort     | O(n log n)     | O(n log n)   | O(n)     | Yes     |
| BubbleSort    | O(n²)          | O(n²)        | O(1)     | Yes     |
| SelectionSort | O(n²)          | O(n²)        | O(1)     | No      |

### QuickSort
- Best for general-purpose sorting
- Efficient in-place sorting
- Average case: O(n log n)
- Uses divide-and-conquer strategy

### MergeSort
- Stable sorting algorithm
- Consistent O(n log n) performance
- Good for linked lists
- Requires extra space

### BubbleSort
- Simple implementation
- Good for small datasets
- Educational purposes
- O(1) space complexity

### SelectionSort
- Simple implementation
- Minimal memory usage
- Good for small arrays
- Not suitable for large datasets