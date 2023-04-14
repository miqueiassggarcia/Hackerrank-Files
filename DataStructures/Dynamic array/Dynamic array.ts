function dynamicArray(n: number, queries: number[][]): number[] {
    let lastAnswer:number = 0;
    let array:number[][] = new Array(n).fill(null).map(value => value = []);
    let index:number;
    let results:number[] = [];
    
    for(let i:number = 0; i < queries.length; i++) {
        if(queries[i][0] == 1) {
            index = ((queries[i][1] ^ lastAnswer) % n);
            array[index].push(queries[i][2]);
        }
        if(queries[i][0] == 2) {
            index = ((queries[i][1] ^ lastAnswer) % n);
            lastAnswer = array[index][queries[i][2] % array[index].length]
            results.push(lastAnswer);
        }
    }
    
    return results;
}