function plusMinus(arr: number[]): void {
  let totalPositive:number = 0;
  let totalNegative:number = 0;
  let totalZeros:number = 0;
  
  for(let i:number = 0; i < arr.length; i++) {
      if(arr[i] > 0) {
          totalPositive += 1;
      } else if (arr[i] < 0) {
          totalNegative += 1;
      } else {
          totalZeros += 1;
      }
  }
  
  console.log(totalPositive/arr.length);
  console.log(totalNegative/arr.length);
  console.log(totalZeros/arr.length);
}