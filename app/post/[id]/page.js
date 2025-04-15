import Comments from '@/app/components/Comments';
import getAllPosts from '@/app/lib/getAllPosts';
import getPost from '@/app/lib/getPost';
import getPostComment from '@/app/lib/getPostComment';
import React, { Suspense } from 'react'


export async function generateMetadata({ params }) {
    const { id } = params;

    const post = await getPost(id);
    return {
        title: post.title,
        description: post.body,
    }
}

export default async function PostPage({ params }) {

    const { id } = params;

    const postPromise = getPost(id);
    const commentsPromise = getPostComment(id);

    const post = await postPromise;

    // const [post, comments] = await Promise.all([postPromise, commentsPromise])

    return (
        <div className='mt-6'>
            <h1 className='text-blue-300'>{post.title}</h1>
            <p>{post.body}</p>
            <hr />
            <div className='mt-6'></div>
            <Suspense fallback="<h1>loading comments...</h1>"> <Comments commentsPromise={commentsPromise}></Comments></Suspense>

        </div>
    )
}

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        id: post.id.toString()
    }))
}
