function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
    let totalApples: number = 0;
    let totalOranges: number = 0;
    
    apples.forEach((value) => {
        if(a+value >= s && a+value <= t) {
            totalApples++;
        }
    })
    
    oranges.forEach((value) => {
        if(b+value >= s && b+value <= t) {
            totalOranges++;
        }
    })
    
    console.log(totalApples);
    console.log(totalOranges);
}