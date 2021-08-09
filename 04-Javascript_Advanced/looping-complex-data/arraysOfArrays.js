// 'Matrix' - Multi Dimensional Array

// Table - Grid - Coordinates - Graphs
// Useful for the above as can mimic rows and columns

// const table = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let row = 0; row < table.length; row++) {
//   for (let column = 0; column < table.length; column++) {
//     // console.log(table[row][column]); // each row
//     console.log(table[column][row]); // each column
//   }
// }

const grid = [
  ["X", "0", "X"],
  ["X", "0", "0"],
  ["0", "0", "X"],
];

for (let row = 0; row < grid.length; row++) {
  const rowString = grid[row].join(""); // "X0X"
  let colString = "";

  for (let col = 0; col < grid.length; col++) {
    colString += grid[col][row]; // "XX0"
  }

  if (rowString === "XXX" || colString === "XXX") {
    console.log("X wins!");
    break;
  } else if (rowString === "000" || colString === "000") {
    console.log("0 wins!");
    break;
  }
}
