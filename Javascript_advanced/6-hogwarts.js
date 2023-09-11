const studentHogwarts = () => {
  var privateScore = 0;
  var name = null;

  function changeScoreBy(points) {
    return (privateScore += points);
  }

  function setName(newName) {
    name = newName;
  }

  function rewardStudent() {
    changeScoreBy(1);
  }

  function penalizeStudent() {
    changeScoreBy(-1);
  }

  function getScore() {
    return `${name}: ${privateScore}`;
  }

  return {
    setName,
    rewardStudent,
    penalizeStudent,
    getScore,
  };
};

let harry = studentHogwarts();
harry.setName("harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

let draco = studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());



