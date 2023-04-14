function rotateLeft(d: number, arr: number[]): number[] {
    for(let i:number = 0; i < d; i++) {
        let firstValue = arr[0]
        for(let j:number = 0; j < arr.length - 1; j++) {
            arr[j] = arr[j+1]
        }
        arr[arr.length - 1] = firstValue
    }
    
    return arr;
}