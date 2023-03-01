import Filter from "./components/Filter";

export interface IData {
  code: string;
  name: string;
}

const directions: IData[] = [
  {
    code: "BTC",
    name: "Bitcoin BTC ",
  },
  {
    code: "ETH",
    name: "Ethereum ETH ",
  },
  {
    code: "CASHUSD",
    name: "Наличные USD ",
  },
  {
    code: "CASHRUB",
    name: "Наличные RUB ",
  },
  {
    code: "ACRUB",
    name: "Альфа-банк RUB ",
  },
  {
    code: "SBERRUB",
    name: "Сбербанк RUB ",
  },
  {
    code: "TCSBRUB",
    name: "Тинькофф RUB ",
  },
  {
    code: "USDTTRC",
    name: "Tether TRC20 USDT ",
  },
];
function App() {
  return (
    <>
      <Filter directions={directions} />
    </>
  );
}

export default App;
