import styles from "./nav.module.css";

export default function Nav() {
    return (
        <div className={styles.container}>
            <h1 id={styles.logo}>sanukadg</h1>
            <div className={styles.spacer}></div>
            <p className={styles.links_button}>Links</p>
            <div className={styles.contact_button}>
                Contact
            </div>
        </div>
    );
}
