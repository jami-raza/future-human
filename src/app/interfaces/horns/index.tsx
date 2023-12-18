import ContactLink from '@/app/components/contactLink'
import PrimaryBtn from '@/app/components/primaryBtn'
import SecondaryBtn from '@/app/components/secondaryBtn'
import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'

const Horns = () => {
  return (
    <section className={styles.horn}>
      <div className={styles.row}>
        <div className={styles.sec1}>
            <h1>
            <span>Matching</span> horns to your<span> unicorns </span>
            </h1>
            <p className={styles.subtitle}>
            why future human
            </p>
            <p className={styles.para}>
            Unicorns come to us at different shapes and sizes. Whether it’s one special developer you are looking for, a team that could scale, or a software project that simply needs done - Future Humans provides the match.
            </p>
            <p className={styles.shorttitle}>
            3 top matches in 3 day
            </p>
            <div className={styles.contact}>
                <p>
                Want to hear more?
                </p>
               <ContactLink size={30} image='/img/arrow-2.png'/>
            </div>
            <div className={styles.btnGroup}>
            
            <PrimaryBtn text='LOOKING FOR A DEVELOPERS'/>
           <SecondaryBtn text='MATC ME WITH COMPANY'/>
            </div>
        </div>
        <div className={styles.sec2}>
          {/* <Image src={'/img/horn.png'} alt='horn' className={styles.hornImg} fill sizes='33' priority/> */}
          <img src="/img/horn.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Horns