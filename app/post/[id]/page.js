import getPost from '@/app/lib/getPost';
import React from 'react'

export default async function PostPage({ params }) {

    const { id } = params;

    const post = await getPost(id);
    return (
        <div className='mt-6'>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}
