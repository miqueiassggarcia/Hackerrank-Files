function staircase(n: number): void {
  let result:string = ""
  for(let i:number = 0; i < n; i++) {
    result += " "
  }
  
  let concatenate:string = ""
  for(let i:number = 1; i <= n; i++) {
    concatenate += "#"
    result = result.slice(0, -i) + concatenate
    console.log(result)
  }
}