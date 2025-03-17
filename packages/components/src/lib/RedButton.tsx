import { counterStore } from "@pp-express-docker/store";
import { observer } from "mobx-react-lite";

export function RedButton() {
  return <button style={{ backgroundColor: "red" }}>Red Button</button>;
}

export const Counter = observer(() => {
  return (
    <div style={styles.container}>
      <h2 style={styles.counterText}>Counter: {counterStore.count}</h2>
      <button style={styles.button} onClick={() => counterStore.increment()}>
        Increment
      </button>
      <button
        style={{ ...styles.button, backgroundColor: "red" }}
        onClick={() => counterStore.decrement()}
      >
        Decrement
      </button>
    </div>
  );
});

const styles = {
  container: {
    padding: "16px",
    textAlign: "center" as const,
  },
  counterText: {
    fontSize: "20px",
    fontWeight: "bold" as const,
  },
  button: {
    padding: "8px 16px",
    margin: "8px",
    backgroundColor: "blue",
    color: "white",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  },
};
