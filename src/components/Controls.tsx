import styles from "./Controls.module.scss";

const Controls = () => {
  const controls = [
    { key: "←", description: "move block to left" },
    { key: "→", description: "move block to right" },
    { key: "↑", description: "drop block instantly" },
    { key: "↓", description: "drop block faster" },
    { key: "A", description: "rotate block counter clockwise" },
    { key: "D", description: "rotate block clockwise" },
    { key: "S", description: "hold / swap block" },
    { key: "M", description: "mute / unmute music" },
  ];

  return (
    <ul className={styles.list}>
      {controls.map(({ key, description }) => (
        <li key={key} className={styles.item}>
          <pre className={styles.key}>[{key}]</pre> {description}
        </li>
      ))}
    </ul>
  );
};

export default Controls;
