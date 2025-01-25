// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import styles from "./post.module.css";
// import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";

// export default function Post({ data }) {
//     const { id } = useParams(); // Get the post id from the URL parameter
//     const [post, setPost] = useState(null);

//     useEffect(() => {
//         // Find the post that matches the id from the data passed down as props
//         const foundPost = data.find((post) => post.id === parseInt(id));
//         setPost(foundPost);
//     }, [id, data]);

//     if (!post) {
//         return <div>Post not found.</div>;
//     }

//     return (
//         <div className={styles.main_container}>
//             <nav />
//             <div className={styles.post_container}>
//                 <p className={styles.title}>{post.title}</p>

//                 <p className={styles.date}>{post.date}</p>

//                 <img src={post.img} className={styles.image} />

//                 <div className={styles.content}>
//                     {post.content.map((contentItem, index) => {
//                         switch (contentItem.type) {
//                             case "paragraph":
//                                 return <p key={index}>{contentItem.text}</p>;
//                             case "imageGallery":
//                                 return (
//                                     <div
//                                         className={styles.image_gallery}
//                                         key={index}
//                                     >
//                                         <ImageGallery
//                                             items={contentItem.images}
//                                             lazyLoad={true}
//                                             showThumbnails={false}
//                                             showPlayButton={false}
//                                         />
//                                     </div>
//                                 );
//                             case "image":
//                                 return (
//                                     <div className={styles.image_gallery}>
//                                         <img
//                                             src={contentItem.image}
//                                             className={styles.image}
//                                         />
//                                     </div>
//                                 );
//                             default:
//                                 return null;
//                         }
//                     })}
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import styles from "./post.module.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Post({ data }) {
    const { id } = useParams(); // Get the post id from the URL parameter
    const [post, setPost] = useState(null);
    const [markdown, setMarkdown] = useState(""); // State for the Markdown content

    useEffect(() => {
        // Find the post that matches the id from the data passed down as props
        const foundPost = data.find((post) => post.id === parseInt(id));
        setPost(foundPost);

        // If the post exists and has an md file path, fetch the Markdown content
        if (foundPost && foundPost.mdFile) {
            fetch(foundPost.mdFile)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Failed to load markdown file");
                    }
                    return response.text();
                })
                .then((text) => setMarkdown(text))
                .catch((error) =>
                    console.error("Error fetching markdown:", error)
                );
        }
    }, [id, data]);

    if (!post) {
        return <div>Post not found.</div>;
    }

    return (
        <div className={styles.main_container}>
            <div className={styles.post_container}>
                <p className={styles.title}>{post.title}</p>

                {post.img && (
                    <img
                        src={post.img}
                        alt="Post Cover"
                        className={styles.image}
                    />
                )}

                <div className={styles.content}>
                    {/* Render Markdown content */}
                    <ReactMarkdown>{markdown}</ReactMarkdown>

                    {/* Render other post content */}
                    {post.content &&
                        post.content.map((contentItem, index) => {
                            switch (contentItem.type) {
                                case "imageGallery":
                                    return (
                                        <div
                                            className={styles.image_gallery}
                                            key={index}
                                        >
                                            <ImageGallery
                                                items={contentItem.images}
                                                lazyLoad={true}
                                                showThumbnails={false}
                                                showPlayButton={false}
                                            />
                                        </div>
                                    );
                                case "image":
                                    return (
                                        <div
                                            className={styles.image_gallery}
                                            key={index}
                                        >
                                            <img
                                                src={contentItem.image}
                                                className={styles.image}
                                                alt="Post Content"
                                            />
                                        </div>
                                    );
                                default:
                                    return null;
                            }
                        })}
                </div>
            </div>
        </div>
    );
}
