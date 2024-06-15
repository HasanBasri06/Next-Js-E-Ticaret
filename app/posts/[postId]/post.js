'use client'
import { useEffect, useState } from 'react';

function Post({ postId }) {
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + postId)
            .then(res => res.json())
            .then(res => {
                if (res.id) {
                    setPost(res);
                } else {
                    setError('Post bulunamadı');
                }
            })
    }, [postId]);

    if (error) {
        return <div className='m-5 w-96 border p-3 text-red-500'>{error}</div>;
    }

    if (!post) {
        return <div className='m-5 w-96 border p-3'>Yükleniyor...</div>;
    }

    return (
        <article className='m-5 w-96 border p-3'>
            <h1 className='text-lg'>{post.title}</h1>
            <p className='mt-4'>
                {post.body}
            </p>
        </article>
    );
}

export default Post;