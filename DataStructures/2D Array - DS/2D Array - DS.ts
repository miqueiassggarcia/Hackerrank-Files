function hourglassSum(arr: number[][]): number {
    let results:number[] = [];
    
    for(let i:number = 0; i <= arr.length / 2; i++) {
        for(let j:number = 0; j <= arr.length / 2; j++) {
            results.push(
                arr[i][j]+
                arr[i][j+1]+
                arr[i][j+2]+
                arr[i+1][j+1]+
                arr[i+2][j]+
                arr[i+2][j+1]+
                arr[i+2][j+2]
            );
        }
    }
    
    return Math.max(...results);
}