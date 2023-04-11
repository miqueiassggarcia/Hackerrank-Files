let a: number[] = [1, 2, 3, 4]

let result: number[] = [];

for(let i: number = a.length - 1; i >= 0; i--) {
  result.push(a[i]);
}

console.log(result);