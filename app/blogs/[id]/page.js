import { notFound } from 'next/navigation';
import React from 'react'

export default async function BlogPage({ params }) {
    const { id } = await params;

    if (id === '3') {
        notFound();
    }


    return (
        <div>
            the blog id is:{id}
        </div>
    )
}
