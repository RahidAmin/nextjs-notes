import React from 'react'

export default async function Comments({ commentsPromise }) {
    const comments = await commentsPromise;
    return (
        <div>
            <h3>Comments</h3>
            <ul>
                {
                    comments.map(comment => <li className='py-5 ' key={comment.id}>{comment.name}:{comment.body}</li>)
                }
            </ul>

        </div>
    )
}
