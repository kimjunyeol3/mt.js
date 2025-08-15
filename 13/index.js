// 13. [심화문제] 문장에서 각 단어가 몇 번 나오는지 세는 함수를 만들어보세요.

function countWords(sentence) {
  // 이곳에 코드를 작성합니다.
  // 결과는 객체 형태로 반환: {단어: 빈도수}
  const words = sentence.split(' ');
  const count = {};

  for (let i = 0; i < words.length; i++){
    const word = words[i];
    if (count[word]){
      count[word]++;
    } else {
      count[word] = 1;
    }
  }

  return count;
}

console.log(countWords("사과 바나나 사과 오렌지 바나나 사과"));
// {사과: 3, 바나나: 2, 오렌지: 1}이 출력되어야 함
