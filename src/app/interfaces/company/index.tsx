import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'

const Company = () => {
  return (
   <section className={styles.company}> 
    <div className={styles.companyImg}>
        <Image src='/img/company1.png' alt='company' width={150} height={50}/>
    </div>
    <div className={styles.companyImg}>
        <Image src='/img/company2.png' alt='company' width={150} height={50}/>
    </div>
    <div className={styles.companyImg}>
        <Image src='/img/company3.png' alt='company' width={150} height={50}/>
    </div>
    <div className={styles.companyImg}>
        <Image src='/img/company4.png' alt='company' width={150} height={50}/>
    </div>
    <div className={styles.companyImg}>
        <Image src='/img/company5.png' alt='company' width={150} height={50}/>
    </div>
   </section>
  )
}

export default Company