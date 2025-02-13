// 이미지의 경우
// assets에 넣으면 import로 호출가능 vite에서 지원하는 이미지 최적화 설정 브라우저 메모리에 캐싱되어 data url로 경로가 노출됨, 새로고침 하더라고 다시 불러오지 않음 - 소수의 이미지에 적합, 많은 이미지들을 사용할 경우 과부하로 문제가 될 수 있음
// public에 넣으면 src 설정으로 사용 가능, 이미지 경로를 제대로 보여주지만 새로고침 할 때 다시 불러옴 - 다수의 이미지 적용시 적합
// npm run preview

import emotion1 from "./../assets/emotion1.png";
import emotion2 from "./../assets/emotion2.png";
import emotion3 from "./../assets/emotion3.png";
import emotion4 from "./../assets/emotion4.png";
import emotion5 from "./../assets/emotion5.png";

export function getEmotionImage(emotionId) {
  switch (emotionId) {
    case 1:
      return emotion1;
    case 2:
      return emotion2;
    case 3:
      return emotion3;
    case 4:
      return emotion4;
    case 5:
      return emotion5;
    default:
      return null;
  }
}
