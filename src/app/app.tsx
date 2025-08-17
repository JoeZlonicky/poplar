import { useState } from "react";
import { Card } from "../components/card/card";
import { Dialog } from "../components/dialog/dialog";
import styles from "./app.module.css";

export function App() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className={styles.app}>
      <Card>
        <h1>Poplar</h1>
        <button onClick={() => setGameStarted((current) => !current)}>
          Toggle
        </button>

        {gameStarted && <p>Game started</p>}
      </Card>

      <Dialog
        className={styles.didYouKnow}
        title="Did you know?"
        descripton="Poplar trees are part of the willow (Salicaceae) family."
        alignment="right"
      />
    </div>
  );
}
