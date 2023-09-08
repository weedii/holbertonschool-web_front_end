function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return () => {
      return seat;
    };
  }

  let students = [];
  for (let i = 0; i < numbersOfStudents; i++) {
    let x = i + 1;
    let n = studentSeat(x);
    students.push(n);
  }
  return students;
}

let classRoom = createClassRoom(10);

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
