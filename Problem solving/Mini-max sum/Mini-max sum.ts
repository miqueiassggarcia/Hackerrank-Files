function miniMaxSum(arr: number[]): void {
  let sum:number = arr.reduce((result, value) => result + value)

  let min:number = sum - Math.max(...arr);
  let max:number = sum - Math.min(...arr);
  
  console.log(min+" "+max);
}