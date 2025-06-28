import styles from "@/assets/styles/dash.module.css";
import clsx from "clsx";

export default function Dashboard() {
  return (
    <div className={styles.Grid1}>
      <div className={clsx(styles.div1, styles.Grid2)}>
        <div className={styles.div5}>div2</div>
        <div className={styles.div6}>div3</div>
        <div className={styles.div7}>div4</div>
      </div>
      <div className={clsx(styles.div2, styles.Grid3)}>
        <div className={styles.div8}>div2</div>
      </div>
      <div className={styles.div3}>div3</div>
      <div className={styles.div4}>div4</div>
    </div>
  );
}
