import "./App.css";
import CustomButton from "./components/customButton";
import CustomInput from "./components/customInput";
import TipCard from "./components/tipCard";
import logo from "../src/assets/images/logo.svg";
import styles from "./App.module.css";
import { useContext } from "react";
import { TipContext } from "./components/context/TipContextProvider";

const buttonsGrid = [
  { text: "5%", value: 5 },
  { text: "10%", value: 10 },
  { text: "15%", value: 15 },
  { text: "25%", value: 25 },
  { text: "50%", value: 50 },
];
function App() {
  const {
    setTipAmount,
    setTotalAmount,
    billNum,
    setBillNum,
    pplNum,
    setPplNum,
    custom,
    setCustom,
  } = useContext(TipContext);

  function calcTip(thePercent) {
    const Percent = thePercent / 100;
    const tipAmount = (Percent * Number(billNum)) / Number(pplNum);
    const totalAmount = Number(billNum) / Number(pplNum) + tipAmount;

    setTipAmount(tipAmount);
    setTotalAmount(totalAmount);

    console.log(tipAmount);
    console.log(totalAmount);
  }

  return (
    <div className="App">
      {/* <div>
        <img className="logoImg" src={logo} alt="" />
      </div> */}
      <div className="mainContainer">
        <div className="actions">
          <div className="inputBox">
            <CustomInput
              icon={"Bill"}
              isLabel={true}
              labelText={"Bill"}
              placeholder={0}
              value={billNum}
              onInput={(e) => setBillNum(e.target.value)}
            />
          </div>
          <p className="select">Select Tip %</p>
          <div className="buttons">
            {buttonsGrid.map((item, index) => {
              return (
                <CustomButton
                  key={index}
                  {...item}
                  customStyle={styles.customButton}
                  onClick={() => calcTip(item.value)}
                />
              );
            })}
            <div>
              <CustomInput
                isLabel={false}
                placeholder={"Custom"}
                value={custom}
                onInput={(e) => setCustom(calcTip(e.target.value))}
              />
            </div>
          </div>
          <div className="inputBox">
            <CustomInput
              isLabel={true}
              labelText={"Number of People"}
              placeholder={0}
              value={pplNum}
              onInput={(e) => setPplNum(e.target.value)}
            />
          </div>
        </div>

        <div className="tipContainer">
          <TipCard />
        </div>
      </div>
    </div>
  );
}

export default App;
