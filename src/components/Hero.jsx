import styles from "./hero.module.css";
import { Link } from "react-router-dom";

export default function Hero({ data }) {
    return (
        <div className={styles.main_container}>
            <div className={styles.container1}>
                <p className={styles.hero_title}>Hello World!</p>
                <img src="/nichijou.png" className={styles.hero_image} />
            </div>
            <div className={styles.container2}>
                {data.map((post) => (
                    <div key={post.id} className={styles.title_container}>
                        <Link to={`/post/${post.id}`} className={styles.title}>
                            {post.title}
                        </Link>
                        <p className={styles.title_date}>{post.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
