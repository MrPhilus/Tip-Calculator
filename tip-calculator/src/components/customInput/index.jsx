import styles from "./CustomInput.module.css";
import dollar from "../../assets/images/icon-dollar.svg";
import person from "../../assets/images/icon-person.svg";
const CustomInput = (props) => {
  const { icon, isLabel, labelText } = props;
  return (
    <div className={styles.inputBox}>
      {isLabel && <img src={icon === "Bill" ? dollar : person} alt="" />}
      {isLabel && (
        <label style={{ color: "hsl(184, 14%, 56%)" }} htmlFor="">
          {labelText}
        </label>
      )}
      <input type="number" {...props} min={"0"} />
    </div>
  );
};

export default CustomInput;
