import styles from "./footer.module.css";

export default function Footer() {
    return (
        <div className={styles.container} id="footer">
            <h2 id={styles.footer_logo}>sanukadg</h2>
            <p> Contact me! </p>
            <div className={styles.button_container}>
                <div className={styles.button}>Email</div>
                <div className={styles.button}>Github</div>
                <div className={styles.button}>Twitter / X</div>
            </div>
            <img src="/settingsico.svg" id={styles.icon} />
        </div>
    );
}
