function calculateScore(studentScore, totalScore) {
  let percent = (studentScore / totalScore) * 100;
  let grade;
  if (percent <= 59) {
    grade = 'F';
  } else if (percent > 59 && percent <= 69) {
    grade = 'D';
  } else if (percent > 69 && percent <= 79) {
    grade = 'C';
  } else if (percent > 69 && percent <= 79) {
    grade = 'B';
  } else {
    grade = 'A';
  }
  return `You got a ${grade} (${percent})`;
}

console.log(calculateScore(5.6, 8.0));
