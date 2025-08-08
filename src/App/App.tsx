import { useState } from "react";
import styles from "./app.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Poplar</h1>
      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          Increase count
        </button>

        <p>Count is {count}</p>
      </div>
    </>
  );
}

export { App };
