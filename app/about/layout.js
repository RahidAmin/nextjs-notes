import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: "About us",
    description: "This is a blog about page",
};


export default function AboutLayout({ children }) {
    return (
        <div>
            <nav className='mt-6 mb-6'>
                <ul className='flex gap-5'>
                    <li><Link href='/about/mission'>Mission</Link></li>
                    <li><Link href='/vision' >Vision</Link></li>
                </ul>
            </nav>

            {children}
        </div>
    )
}
