import { useEffect } from "react";

// 페이지의 title 변경을 위한 모듈
// head의 title 태그 안의 문구는 해당 스크립트를 통해 변경
const usePageTitle = (title) => {
  useEffect(() => {
    const $title = document.getElementsByTagName("title")[0];
    $title.innerText = title;
  }, [title]);
};

export default usePageTitle;
