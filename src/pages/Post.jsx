import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Post({ data }) {
    const { id } = useParams(); // Get the post id from the URL parameter
    const [post, setPost] = useState(null);

    useEffect(() => {
        // Find the post that matches the id from the data passed down as props
        const foundPost = data.find((post) => post.id === parseInt(id));
        setPost(foundPost);
    }, [id, data]);

    if (!post) {
        return <div>Post not found.</div>;
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <p>Content for {post.title} will be displayed here.</p>
        </div>
    );
}
