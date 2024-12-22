import styles from "./ColorCard.module.css";

const ColorCard = ({ id, value }) => {
  console.log("colorCard", value);

  return (
    <div className={styles.colorCard}>
      <div className={styles.colorDiv} style={{ backgroundColor: id }}></div>
      <div className={styles.textContent}>{id}</div>
      <div className={styles.textContent}>{value}</div>
    </div>
  );
};

export default ColorCard;
