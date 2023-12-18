import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css'

type IProps = {
    size?: number
    image?:string

}

const ContactLink = ({size, image="/img/arrow.png"}:IProps) => {
  return (
    <>
        <Link href="#" className={styles.link} style={{fontSize:size ? size+'px' : 16+'px'}}>Contact <Image src={image} alt='logo' width={9} height={10}/></Link>
    </>
  )
}

export default ContactLink