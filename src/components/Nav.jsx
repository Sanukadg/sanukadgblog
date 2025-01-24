import { Link } from "react-router-dom";
import styles from "./nav.module.css";
import Links from "./sub-components/Links";

export default function Nav() {
    const scrollToFooter = () => {
        const footer = document.getElementById("footer");
        if (footer) {
            footer.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={styles.container}>
            <Link to={"/"}>
                <h1 id={styles.logo}>sanukadg</h1>
            </Link>

            <div className={styles.spacer}></div>
            <Links />
            <div className={styles.contact_button} onClick={scrollToFooter}>
                Contact
            </div>
        </div>
    );
}
