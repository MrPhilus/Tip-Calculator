/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import CustomButton from "./components/customButton";
import CustomInput from "./components/customInput";
import TipCard from "./components/tipCard";
import styles from "./App.module.css";
import { useContext, useEffect } from "react";
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

  function calcTip(selectedTip) {
    const TipPercent = selectedTip / 100;
    const tipAmount = selectedTip
      ? (TipPercent * Number(billNum)) / Number(pplNum)
      : 0;

    //prevents zero value from causing error
    const peopleCount = Number(pplNum) === 0 ? 1 : Number(pplNum);

    const totalAmount = selectedTip
      ? Number(billNum) / peopleCount + tipAmount
      : Number(billNum) / peopleCount;

    setTipAmount(tipAmount);
    // keeps total as zero if input is empty
    pplNum === "" ? setTotalAmount(0) : setTotalAmount(totalAmount);
  }

  useEffect(() => {
    calcTip();
  }, [pplNum]);

  return (
    <div className="App">
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
