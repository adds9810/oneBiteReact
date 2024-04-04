import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  const userProps = { name: "이정환", isMember: true }; // 전달자가 많으면 변수지정 후 전달 가능
  return (
    <>
      <Welcome {...userProps} />
    </>
  );
}

export default App;
