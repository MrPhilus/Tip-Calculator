/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import CustomButton from "./components/customButton";
import CustomInput from "./components/customInput";
import TipCard from "./components/tipCard";
import styles from "./App.module.css";
import { useContext, useEffect, useState } from "react";
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
    selectedButton,
    setSelectedButton,
  } = useContext(TipContext);

  const [chosenTip, setChosenTip] = useState(0);

  const calcTip = (selectedTip) => {
    if (selectedTip && pplNum && !isNaN(parseFloat(pplNum))) {
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

      setChosenTip(selectedTip);
    }
  };

  const handleButtonClick = (index, selectedTip) => {
    setSelectedButton(index);

    // Call calcTip with the selectedTip
    calcTip(selectedTip);
  };

  useEffect(() => {
    if (chosenTip !== null) {
      calcTip(chosenTip);
    }
  }, [pplNum, billNum, chosenTip]);

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
              const isSelected = selectedButton === index;
              return (
                <CustomButton
                  key={index}
                  {...item}
                  customStyle={`${styles.customButton} ${
                    isSelected ? styles.highlight : ""
                  }`}
                  onClick={() => handleButtonClick(index, item.value)}
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
