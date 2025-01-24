import styles from "./hero.module.css";

export default function Hero() {
    return (
        <div className={styles.main_container}>
            <div className={styles.container1}>
                <p className={styles.hero_title}>Hello World!</p>
                <img src="/nichijou.png" className={styles.hero_image} />
            </div>
            <div className={styles.container2}>
                <div className={styles.title_container}>
                    <p className={styles.title}>
                        Simulator racing or Arcade racing
                    </p>
                    <p className={styles.title}>
                        "Vertex Ridge" FD RX7 D1 project by A'pexi
                    </p>
                </div>
                <div className={styles.date_container}>
                    <p className={styles.title_date}>Jul 16</p>
                    <p className={styles.title_date}>Jun 7</p>
                </div>
            </div>
        </div>
    );
}
