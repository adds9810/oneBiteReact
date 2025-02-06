import { useState } from "react";
import "./App.css";

// function Welcome({ name, isMember }) {
//   return (
//     <h1>
//       {isMember ? `${name}님 다시 오셨군요` : `${name}님 가입하시겠어요?`}
//     </h1>
//   );
// }

function CurrencyInput({ currency, value, onChange }) {
  return (
    <div>
      <label>{currency}:</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(currency, e.target.value)}
      />
    </div>
  );
}

// 한화 -> 달러 변환율
const EXCHANGE_RATE = 1300;
function App() {
  const [state, setState] = useState({
    krw: 0,
    usd: 0,
  });

  const onChange = (currency, value) => {
    console.log({ currency, value });
    if (currency === "krw") {
      setState({
        krw: value,
        usd: value / EXCHANGE_RATE,
      });
    } else {
      setState({
        krw: value * EXCHANGE_RATE,
        usd: value,
      });
    }
  };

  return (
    <>
      <h2>환율 변환기 (Krw-Usd)</h2>
      <CurrencyInput currency={"krw"} value={state.krw} onChange={onChange} />
      <CurrencyInput currency={"usd"} value={state.usd} onChange={onChange} />
    </>
  );
}

export default App;
