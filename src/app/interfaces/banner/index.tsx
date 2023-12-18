import React from 'react'
import styles from './styles.module.css'
import PrimaryBtn from '@/app/components/primaryBtn'
import SecondaryBtn from '@/app/components/secondaryBtn'

const Banner = () => {
  return (
  <>
  
      <div className={styles.banner_back}>
    
      </div>
    <div className={styles.banner}>
        <div className={styles.banner1}>
            <h1>Relationship managers</h1>
            <h2>for unicorns and <br /> sotfware developers</h2>
        </div>
        <div className={styles.content}>
            <p>We match your tech needs with the best European software development teams available for long teams available for long-term rent.</p>
        </div>
        <div className={styles.banner3}>
          <div>
            <PrimaryBtn text='LOOKING FOR A DEVELOPERS'/>
          </div>
          <div>
           <SecondaryBtn text='MATCH ME WITH COMPANY'/>
          </div>
        </div>
    </div>
  </>
  
  )
}

export default Banner