function gradingStudents(grades: number[]): number[] {
  let newGradles: number[] = grades.map((value) => {
      if(value % 5 > 2 && value >= 38) {
          return value + 5 - value % 5
      } else {
          return value
      }
  })

  return newGradles;
}