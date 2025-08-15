// 11. 사람들의 정보가 담긴 배열에서 성인(20세 이상)만 골라내는 함수를 만들어보세요.

const people = [
  { name: "Vivi", age: 17 },
  { name: "Anne", age: 25 },
  { name: "Jay", age: 19 },
  { name: "Hun", age: 30 },
];

function getAdults(peopleArray) {
  // 이곳에 코드를 작성합니다.
  let twentyplus = [];

  for (let i = 0; i < peopleArray.length; i++){
    if (peopleArray[i].age >= 20){
      twentyplus.push(peopleArray[i]);
    }
  };

  return twentyplus;
}

console.log(getAdults(people));
// [{name: "Anne", age: 25}, {name: "Hun", age: 30}]
