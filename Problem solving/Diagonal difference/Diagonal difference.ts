function diagonalDifference(arr: number[][]): number {
  let leftToRightSum:number = 0;
  let rightToLeftSum:number = 0;

  for(let i: number = 0; i < arr.length; i++) {
      for(let j: number = 0; j < arr.length; j++) {
          if(i==j) {
              leftToRightSum += arr[i][j];
          }
          if(i + j == arr.length - 1) {
              rightToLeftSum += arr[i][j];
          }
      }
  }

  return Math.abs(leftToRightSum - rightToLeftSum);
}

let value: number[][] = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]

console.log(diagonalDifference(value));