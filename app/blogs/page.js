
import Link from 'next/link'
import React from 'react'

export default function Blogs() {
    const blogs = [{
        id: 1,
        title: 'blog 1',
        description: 'blog 1 description'
    },
    {
        id: 2,
        title: 'blog 2',
        description: 'blog 2 description'
    }
    ]

    return (
        <main className='mt-10'>

            <div>

            </div>
            <ul>
                {blogs.map(blog => <li key={blog.id}>{blog.title} <Link href={`/blogs/${blog.id}`}>Details</Link> </li>)}
            </ul>
        </main>
    )
}
