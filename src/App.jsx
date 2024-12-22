import ColorCard from "./ColorCard/ColorCard";
import data from "./assets/colorjson.json";
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.colorBox}>
      {Object.entries(data).map(([id, value]) => {
        return <ColorCard value={value} id={id} />;
      })}
    </div>
  );
}

export default App;
