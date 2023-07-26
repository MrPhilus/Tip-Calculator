import CustomButton from "../customButton";
import styles from "./TipCard.module.css";
import { useContext } from "react";
import { TipContext } from "../context/TipContextProvider";

const TipCard = () => {
  const { tipAmount, totalAmount, resetCalculator } = useContext(TipContext);

  return (
    <div className={styles.tipCard}>
      <div className={styles.priceContainer}>
        <div className={styles.prices}>
          <div>
            <h4 className={styles.tipText}>Tip Amount</h4>
            <span className={styles.spanText}>/ person</span>
          </div>
          <div>
            <h1 className={styles.amount}>${tipAmount.toFixed(2)}</h1>
          </div>
        </div>
        <div className={styles.prices}>
          <div>
            <h4 className={styles.tipText}>Total</h4>
            <span className={styles.spanText}>/ person</span>
          </div>
          <div>
            <h1 className={styles.amount}>${totalAmount.toFixed(2)}</h1>
          </div>
        </div>
      </div>
      <div className={styles.resetButton}>
        <CustomButton text={"RESET"} onClick={resetCalculator} />
      </div>
    </div>
  );
};

export default TipCard;
