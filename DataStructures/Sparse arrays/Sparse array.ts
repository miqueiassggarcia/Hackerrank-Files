function matchingStrings(stringList: string[], queries: string[]): number[] {
    return queries.map((value) => {
        let total:number = 0;
        for(let i:number = 0; i < stringList.length; i++) {
            if(value == stringList[i]) {
                total += 1
            }
        }

        return total
    });
}