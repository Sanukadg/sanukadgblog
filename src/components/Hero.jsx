import styles from "./hero.module.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Hero({ data }) {
    const images = [
        {
            src: import.meta.env.BASE_URL + "/nichijou.png",
            style: {
                maxWidth: "655px",
                maxHeight: "370px",
                left: "55%",
            },
        },
        {
            src: import.meta.env.BASE_URL + "/nichijou2.png",
            style: {
                maxWidth: "355px",
                maxHeight: "370px",
                left: "65%",
            },
        },
        {
            src: import.meta.env.BASE_URL + "/nichijou3.png",
            style: {
                maxWidth: "455px",
                maxHeight: "570px",
                left: "68%",
            },
        },
        {
            src: import.meta.env.BASE_URL + "/nichijou4.png",
            style: {
                maxWidth: "555px",
                maxHeight: "310px",
                left: "70%",
            },
        },
        {
            src: import.meta.env.BASE_URL + "/nichijou5.png",
            style: {
                maxWidth: "555px",
                maxHeight: "310px",
                left: "67%",
            },
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images.length]);

    return (
        <div className={styles.main_container}>
            <div className={styles.container1}>
                <p className={styles.hero_title}>Hello World!</p>

                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        style={{
                            position: "absolute",
                            zIndex: "0",
                            opacity: currentIndex === index ? 1 : 0,
                            objectFit: "cover",
                            transition: "opacity 0.35s ease-in-out",
                            ...image.style,
                        }}
                    />
                ))}
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
