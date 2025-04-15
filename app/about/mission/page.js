import React from 'react'
import Button from '@/app/components/Button'
import Image from 'next/image'
import img1 from '@/public/images/1.jpg'

export default function Mission() {
    return (
        <main>
            <div className='mt-10'>
                This is Mission page
            </div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, expedita pariatur explicabo unde maxime dolorem ipsa voluptas officiis similique, omnis, at rerum est eos inventore optio rem a nam laborum!</div>

            <div className='h-1/3 w-1/3'>  <Image src={img1} alt='image' quality={100} placeholder="blur"></Image></div>


            <Button></Button>
        </main>

    )
}
