import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ReadmoreLink = () => {
  return (
    <>
    <Link href='#'>Read more <Image src='/img/arrow-3.svg' alt='svg' width={20} height={20}/></Link>
    </>
  )
}

export default ReadmoreLink