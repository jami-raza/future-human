import React from 'react'
import styles from './styles.module.css'
import PrimaryBtn from '@/app/components/primaryBtn'
import SecondaryBtn from '@/app/components/secondaryBtn'

const ServiceProvider = () => {
  return (
<section className={styles.service}>
    <p style={{marginBottom:'15px'}}>SERVICE PROVIDER</p>
    <div className={styles.serviceContainer}>

    <div className={styles.container1}>
        <h1>Home for <br /><span className={styles.world}>2000+</span> services <br /> providers <br /><span >worldwide</span></h1>
        <div className={styles.container1Btns}>
        <div>
            <PrimaryBtn text='LOOKING FOR A DEVELOPERS'/>
          </div>
          <div>
           <SecondaryBtn text='MATCH ME WITH COMPANY'/>
          </div>
        </div>
    </div>

    <div className={styles.container2}>
        <h4>Each with <span>5 - 2000</span> developers.</h4>
        <p>If your developers can adhere to the principles of future humans Dedifesto, then we can:</p>
    
        <ul className={styles.unorder}>
            <li>Match you with future humans clients;</li>
            <li>Help build lasting relationships with them;</li>
            <li>And grow your win % of all projects (both in and outside of future humans)</li>
        </ul>
   
    </div>
    </div>
</section> 
 )
}

export default ServiceProvider