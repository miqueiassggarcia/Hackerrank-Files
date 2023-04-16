function arrayManipulation(n: number, queries: number[][]): number {
    const array = Array(n);
    let maxValue = 0;
    let currentValue = 0;

    for(let i:number = 0; i < queries.length; i++) {
        array[queries[i][0]] = array[queries[i][0]] || { start: 0, end: 0 };
        array[queries[i][1]] = array[queries[i][1]] || { start: 0, end: 0 };
        array[queries[i][0]].start += queries[i][2];
        array[queries[i][1]].end += queries[i][2];
    }

    for(let j:number = 0; j < n; j++) {
        if (array[j]) {
            currentValue += array[j].start;
        
            if (currentValue > maxValue) {
                maxValue = currentValue;
            }

            currentValue -= array[j].end;
        }
    }

    return maxValue;
}

console.log(arrayManipulation(4, [[2, 3, 603], [1, 1, 286], [4, 4, 882]]));