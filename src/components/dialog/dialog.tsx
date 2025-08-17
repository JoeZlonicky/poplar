import clsx from "clsx";
import styles from "./dialog.module.css";

export type DialogProps = {
  title: string;
  descripton: string;
  alignment?: "left" | "center" | "right";
  className?: string;
};

export function Dialog({
  title,
  descripton,
  alignment = "center",
  className,
}: DialogProps) {
  return (
    <div
      className={clsx(styles.dialog, className)}
      style={{ textAlign: alignment }}
    >
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{descripton}</p>
    </div>
  );
}
