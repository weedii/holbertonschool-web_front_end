let globalVariable = "Welcome";

function outer(globalVariable) {
  alert(globalVariable);
  let course = "Holberton";

  function inner(globalVariable, course) {
    alert(globalVariable + " " + course);
    let exclamation = "!";

    function inception(globalVariable, course, exclamation) {
      alert(globalVariable + " " + course + exclamation);
    }

    inception(globalVariable, course, exclamation);
  }

  inner(globalVariable, course);
}

outer(globalVariable);
