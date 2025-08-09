// 4. 학생들의 점수 배열에서 평균을 구하는 함수를 만들어보세요
const scores = [85, 92, 78, 96, 88];

function getAverage(scoreArray) {
  // 이곳에 코드를 작성합니다.
  let sum = 0;

  for (i = 0; i < scoreArray.length; i++) {
    sum = sum + scoreArray[i];
  }

  return sum / scoreArray.length;
}

console.log(getAverage(scores)); // 87.8이 출력되어야 함
