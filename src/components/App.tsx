import { useGame } from "../hooks/useGame";
import Hold from "./Hold";
import Next from "./Next";
import PlayField from "./PlayField";
import styles from "./App.module.scss";

const App = () => {
  const { blocks, hold, next } = useGame();

  return (
    <div className={styles.app}>
      <div className={styles.hold}>
        <Hold blockType={hold} />
      </div>
      <PlayField blocks={blocks} />
      <div className={styles.next}>
        <Next blocks={next} />
      </div>
    </div>
  );
};

export default App;
