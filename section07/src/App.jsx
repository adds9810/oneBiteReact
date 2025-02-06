import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect, uesRef } from "react";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = uesRef(false);

  // 1. 마운트 : 탄생
  // 컴포넌트가 마운트 되었을 때문 최초 한번만 실행시키고 싶은 코드가 있을 경우
  // useEffect(() => {}, [빈배열]);
  // useEffect(() => {}, []);

  // 2. 업데이트 : 변화, 리렌더링
  // 마운트 후 업데이트 될 때마다 실행
  // useEffect(() => {});
  // 업데이트 시에만 사용하고 싶은 경우
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
    }
    return;
  });

  // 3. 언마운트 : 죽음

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
