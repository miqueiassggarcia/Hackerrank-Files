function compareTriplets(a: number[], b: number[]): number[] {
  let result: number[] = [0, 0];
  
  for(let i: number = 0; i < a.length; i++) {
      if(a[i]>b[i]){
          result[0] = result[0] + 1
      }
      if(a[i]<b[i]){
          result[1] = result[1] + 1
      }
  }
  
  return result;
}