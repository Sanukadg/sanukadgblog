import styles from "./footer.module.css";

export default function Footer() {
    return (
        <div className={styles.container} id="footer">
            <h2 id={styles.footer_logo}>sanukadg</h2>
            <p> Contact me! </p>
            <div className={styles.button_container}>
                <div className={styles.button}>
                    <a href="mailto:sanukagamage@gmail.com">Email</a>
                </div>
                <div className={styles.button}>
                    <a href="https://github.com/Sanukadg">Github</a>
                </div>
                <div className={styles.button}>
                    <a href="https://x.com/Onev82">Twitter / X</a>
                </div>
                <div className={styles.button}>
                    <a href="https://instagram.com/_sg.media">Instagram</a>
                </div>
            </div>
            <img
                src={import.meta.env.BASE_URL + "/settingsico.svg"}
                id={styles.icon}
            />
        </div>
    );
}
