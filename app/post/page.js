import React from 'react'
import getAllPosts from '../lib/getAllPosts'
import Link from 'next/link';

export default async function page() {
    const posts = await getAllPosts();

    return (
        <div className='mt-6'>
            <h1>All Posts</h1>
            <ul className='mt-5'>
                {
                    posts.map(post => <li key={post.id} className='my-6'><Link href={`/post/${post.id}`}>{post.title}</Link></li>)
                }
            </ul>
        </div>
    )
}
