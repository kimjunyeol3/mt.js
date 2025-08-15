// 9. 원가에서 할인율을 적용한 최종 가격을 계산하는 함수를 만들어보세요.

function calculateDiscountPrice(originalPrice, discountPercent) {
  // 이곳에 코드를 작성합니다.
  return originalPrice * (100 - discountPercent) / 100
}

console.log(calculateDiscountPrice(10000, 20)); // 8000이 출력되어야 함
