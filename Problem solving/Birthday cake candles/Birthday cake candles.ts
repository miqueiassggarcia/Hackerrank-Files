function birthdayCakeCandles(candles: number[]): number {
  let tallest:number = 0;
  let tallestCandles:number = 0;
  
  for(let i:number = 0; i < candles.length; i++) {
      if(candles[i] == tallest) {
          tallestCandles++;
      }
      if(candles[i] > tallest) {
          tallest = candles[i]
          tallestCandles = 1
      }
  }
  
  return tallestCandles;
}