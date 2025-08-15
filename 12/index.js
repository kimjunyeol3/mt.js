// 12. [심화문제] 배열에서 중복된 값을 제거하고 오름차순으로 정렬하는 함수를 만들어보세요.

function removeDuplicatesAndSort(arr) {
  // 이곳에 코드를 작성합니다.

  // 오름차순 이중 for문 앞 뒤 값 비교
  for (let i = 0; i < arr.length - 1; i++){
    for (let j = 0; j < arr.length - 1 - i; j++){
      if (arr[j] > arr[j + 1]){
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  // 중복 제거 
  // 오름차순 정렬 후 앞, 뒤 값 비교 후 같지 않으면 앞 값을 result 배열에 추가
  const result = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== arr[i-1]){
      result.push(arr[i]);
    }
  }


  return result;
}

console.log(removeDuplicatesAndSort([3, 1, 4, 1, 5, 9, 2, 6, 5]));
// [1, 2, 3, 4, 5, 6, 9]가 출력되어야 함
