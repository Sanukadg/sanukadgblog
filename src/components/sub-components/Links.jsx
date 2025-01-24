import { useState } from "react";
import styles from "./links.module.css";

export default function Links() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleConfigurator = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <p className={styles.links_button} onClick={toggleConfigurator}>
                Links
            </p>

            {isOpen && (
                <div className={styles.overlay}>
                    <div className={styles.popup}>
                        <p>LINK 1</p>
                        <p>LINK 2</p>
                        <button
                            onClick={toggleConfigurator}
                            className={styles.close_button}
                        >
                            close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
