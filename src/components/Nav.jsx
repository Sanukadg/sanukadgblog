import styles from "./nav.module.css";
import Links from "./sub-components/Links";

export default function Nav() {
    return (
        <div className={styles.container}>
            <h1 id={styles.logo}>sanukadg</h1>
            <div className={styles.spacer}></div>
            <Links />
            <div className={styles.contact_button}>Contact</div>
        </div>
    );
}
