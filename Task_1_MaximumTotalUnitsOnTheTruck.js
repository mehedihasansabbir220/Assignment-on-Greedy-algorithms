/**
 * @param {number[][]} boxTypes - A 2D array representing the number of boxes and units per box.
 * @param {number} truckSize - The maximum number of boxes that can be loaded onto the truck.
 * @return {number} - The maximum total number of units that can be put on the truck.
 */
function maximumUnitsOnTruck(boxTypes, truckSize) {
    // Sort the box types based on the number of units per box in descending order
    boxTypes.sort((a, b) => b[1] - a[1]);

    let totalUnits = 0;

    for (let i = 0; i < boxTypes.length; i++) {
        const [numberOfBoxes, unitsPerBox] = boxTypes[i];

        // If we can take all boxes of this type
        if (truckSize >= numberOfBoxes) {
            totalUnits += numberOfBoxes * unitsPerBox;
            truckSize -= numberOfBoxes; // Decrease the available truck size
        } else {
            // If we cannot take all, take as many as we can
            totalUnits += truckSize * unitsPerBox;
            break; // Truck is full
        }
    }

    return totalUnits;
}

/**
 * Time and Space Complexity
 * 
 * Time Complexity: 𝑂(𝑛log𝑛) O(nlogn), where n is the number of box types due to the sorting step.
 * Space Complexity: O(1), since we are using a constant amount of extra space.
 */