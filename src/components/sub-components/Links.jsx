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
                        <h3>
                            PredicTea -{" "}
                            <a
                                href="https://www.predic-tea.com"
                                className={styles.link}
                            >
                                predic-tea.com
                            </a>
                        </h3>

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
