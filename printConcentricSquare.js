/**
 * JavaScript Assessment: Concentric Square Pattern
 * Goal: Print a layered number matrix.
 */

function printConcentricSquare(n) {
    const size = 2 * n - 1; // For n=4, size is 7x7

    for (let i = 0; i < size; i++) {
        let row = "";
        for (let j = 0; j < size; j++) {
            // Calculate the distance to the closest edge (Top, Bottom, Left, Right)
            let top = i;
            let bottom = size - 1 - i;
            let left = j;
            let right = size - 1 - j;

            // The value is the distance from the center + 1
            // Or: n - (minimum distance to any edge)
            let minDist = Math.min(top, bottom, left, right);
            row += (n - minDist) + " ";
        }
        console.log(row.trim());
    }
}

// Execute for n = 4
printConcentricSquare(4);