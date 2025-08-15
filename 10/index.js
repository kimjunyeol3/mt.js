/**
 * 10. 점수를 받아서 등급을 반환하는 함수를 만들어보세요.
 * 90점 이상: "A"
 * 80점 이상: "B"
 * 70점 이상: "C"
 * 60점 이상: "D"
 * 60점 미만: "F"}
 */

function getGrade(score) {
  // 이곳에 코드를 작성합니다.
  switch(true) {
    case score >= 90:
      return "A";
      break;
    case score >= 80:
      return "B";
      break;
    case score >= 70:
      return "C";
      break;
    case score >= 60:
      return "D";
      break;
    default:
      return "F";
      break;
  }
}

console.log(getGrade(85)); // "B"가 출력되어야 함
console.log(getGrade(95)); // "A"가 출력되어야 함
