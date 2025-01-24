import { useEffect, useState } from "react";
import styles from "./hero.module.css";

export default function Hero() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("./src/data/data.json"); // Fetching the properties data from the JSON file
                if (!response.ok) throw new Error("Failed to fetch JSON");
                const json = await response.json();
                setData(json.posts);
            } catch (error) {
                console.error("Error fetching data:", error); // Log any errors
            }
        };
        fetchData();
    }, []);

    return (
        <div className={styles.main_container}>
            <div className={styles.container1}>
                <p className={styles.hero_title}>Hello World!</p>
                <img src="/nichijou.png" className={styles.hero_image} />
            </div>
            <div className={styles.container2}>
                <div className={styles.title_container}>
                    {data.map((post) => (
                        <div key={post.id} className={styles.title_container}>
                            <p className={styles.title}>{post.title}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.date_container}>
                    {data.map((post) => (
                        <div key={post.id} className={styles.title_container}>
                            <p className={styles.title_date}>{post.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
