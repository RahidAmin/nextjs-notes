import React from 'react'

export default async function getPostComment(id) {

    const comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)


    return comments.json()


}
