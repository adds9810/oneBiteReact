import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

function App() {
  const buttonProps = { text: "메일", color: "red" }; // 전달자가 많으면 변수지정 후 전달 가능
  return (
    <>
      <Header />
      <Main />
      <Button {...buttonProps} />
      <Button text={"블로그"} />
      <Button text={"카페"}>눈누</Button>
      <Footer />
    </>
  );
}

export default App;
