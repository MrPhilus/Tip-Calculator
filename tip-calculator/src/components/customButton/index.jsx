import styles from "./CustomButton.module.css";
const CustomButton = (props) => {
  const { text, customStyle, onClick } = props;
  return (
    <button
      className={customStyle ? customStyle : styles.btn}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
