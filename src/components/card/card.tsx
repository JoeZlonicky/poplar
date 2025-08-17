import type { PropsWithChildren } from "react";
import styles from "./card.module.css";

export type CardProps = PropsWithChildren;

export function Card({ children }: CardProps) {
  return <div className={styles.card}>{children}</div>;
}
