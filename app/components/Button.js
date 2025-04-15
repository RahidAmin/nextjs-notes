'use client'


import React from 'react'

export default function Button() {
    return (
        <div className='mt-2'>
            <button className='bg-green-300 p-2 rounded-sm' onClick={() => {
                console.log('Mission Clicked')
            }
            }>Click Here</button>
        </div>
    )
}
