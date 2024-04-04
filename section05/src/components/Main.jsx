// jsx 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열값만 랜더링 된다
// 3. 모든 태그는 닫혀 있어야 한다.
// 4. 최상위 태그는 반드시 하나여야 한다.
const Main = ()=>{
    const user={name:"ㅇㅍㅇ",isLoing:false}
    
    if(user.isLoing){ return <div>로그아웃</div>}else {<div>로그인</div>}
    // return (
    //     <main>
    //         {user.isLoing?(<div>로그아웃</div>):(<div>로그인</div>)}
    //     </main>
    // )
}

export default Main