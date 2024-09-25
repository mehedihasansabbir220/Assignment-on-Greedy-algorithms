# Assignment on Greedy Algorithms

This repository contains solutions for two tasks based on greedy algorithms. The solutions are implemented in JavaScript.

## Task 1: Maximum Total Units on the Truck

### Problem Statement
You are assigned to load boxes onto a truck. You are given a 2D array `boxTypes`, where each element is an array containing:
- `number_of_boxes_i`: The number of boxes of type `i`.
- `number_of_units_per_box_i`: The number of units in each box of type `i`.

You also have a variable `truckSize`, which indicates the maximum number of boxes that can be loaded onto the truck. Your goal is to maximize the total number of units loaded onto the truck.

### Example
```javascript
const boxTypes = [[1, 3], [2, 2], [3, 1]];
const truckSize = 4;
console.log(maximumUnitsOnTruck(boxTypes, truckSize)); // Output: 8
```



##  Task 2: Length of Maximal Set of Mutually Disjoint Intervals

###  Problem Statement
- Given a set of intervals represented by a 2D array A, find the length of the maximal set of mutually disjoint intervals. Two intervals are disjoint if they do not overlap.

```
const intervals = [[1, 4], [2, 3], [4, 6], [8, 9]];
console.log(lengthOfMaximalDisjointIntervals(intervals)); // Output: 3

function lengthOfMaximalDisjointIntervals(intervals) { ... }
```

###  Time Complexity:
O(nlogn)
###  Space Complexity :
O(1)# Assignment-on-Greedy-algorithms
