/**
 * @param {number[][]} intervals - A 2D array representing the start and end of each interval.
 * @return {number} - The length of the maximal set of mutually disjoint intervals.
 */
function lengthOfMaximalDisjointIntervals(intervals) {
    // Sort intervals by their end time
    intervals.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let lastEndTime = -Infinity;

    for (const interval of intervals) {
        const [start, end] = interval;

        // If the current interval starts after the last selected interval ends
        if (start > lastEndTime) {
            count++; // We can include this interval
            lastEndTime = end; // Update the end time
        }
    }

    return count;
}


/**
 * Time and Space Complexity
 * 
 * Time Complexity: O(nlogn), where n is the number of intervals due to sorting.
 * 
 * Space Complexity: O(1), since we are using a constant amount of extra space.
 */