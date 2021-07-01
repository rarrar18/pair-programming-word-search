// Pair programmed by Luana and Raphaella
// passes in 'letters' as an array and 'word' as a string
const wordSearch = (letters, word) => {
    // Check if array is empty, otherwise return false
    if (letters.length === 0) {
        return false;
    } else {
        // Create variable placeholder for final answer
        let answer;
        // Joins horizontal arrays into a single array of strings
        const horizontalJoin = letters.map(ls => ls.join(''))
        // Uses transpose function to turn columns into rows
        const transposed = transpose(letters);
        // Joins vertical arrays into a single array of strings
        const verticalJoin = transposed.map(ls => ls.join(''));
        // Iterate through every element (strings) of rows
        for (l of horizontalJoin) {
            // Once matching word is found, exit loop
            if (l.includes(word)) {
                return true;
             // If no matching word is found, return false
            } else if (!(l.includes(word))) {
                answer = false;
            }
        }
        // Iterate through every element (strings) of columns
        for (l of verticalJoin) {
            // Once matching word is found, exit loop
            if (l.includes(word)) {
                return true;
            // If no matching word is found, return false
            } else if (!(l.includes(word))) {
                answer = false;
            }
        }
        // Return true or false based on appearance of the word
        return answer;
    }
};
// Function turns columns into rows and vice versa
const transpose = function(matrix) {
    const result = [];
    // Iterate through matrix row, find matrix length
    for (let i = 0; i < matrix[0].length; i++) {
      const col = [];
      // Iterate through matrix column, find matrix length
      for (let j = 0; j < matrix.length; j++) {
        // Push elements into new column array
        col.push(matrix[j][i]);
      }
      // Push elements into new row array
      result.push(col);
    }
    // Return output as new transposed array
    return result;
};

module.exports = wordSearch