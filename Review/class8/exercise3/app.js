function interview(questions, time) {
  if (questions.length < 8) {
    return "disqualified";
  } else if (time > 120) {
    return "disqualified";
  }

  let diff = 0; // 0 is very easy
  let failed;
  for (let i = 0; i <= questions.length - 1; i++) {
    if (i % 2 == 0 && i !== 0) diff += 1;
    switch (diff) {
      case 0:
        questions[i] <= 5 ? false : (failed = true);
      case 1:
        questions[i] <= 10 ? false : (failed = true);
      case 2:
        questions[i] <= 15 ? false : (failed = true);
      case 3:
        questions[i] <= 20 ? false : (failed = true);
    }
  }
  if (failed === true) {
    return "disqualified";
  } else {
    return "qualified";
  }
}

console.log(interview([5, 5, 10, 10, 15, 15, 20, 20], 120));

console.log(interview([2, 3, 8, 6, 5, 12, 10, 18], 64));

console.log(interview([5, 5, 10, 10, 25, 15, 20, 20], 120));
// Exceeded the time limit for a medium question.

console.log(interview([5, 5, 10, 10, 15, 15, 20], 120));
// Did not complete all the questions.

console.log(interview([5, 5, 10, 10, 15, 15, 20, 20], 130));
// Solved all the questions in their respected time limits but exceeded the total time limit of the interview.
