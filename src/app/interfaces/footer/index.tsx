import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
 <footer className={styles.footer}>
    <div className={styles.footermain}>
        <div className={styles.footer1}>
        <Image src='/img/footerLogo.png' alt='logo' width={200} height={100}/>
        <p >Future Humans ia a talent ecosystem that connects businesses with highly skilled remote talent from pakistan.</p>
        </div>
        <div className={styles.footer2}>
            <ul>
                <li>About</li>
                <li>What we do</li>
                <li>Why choose us</li>
                <li>Testimonials</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className={styles.footer3}>
            <p><span className={styles.footer3span}>2023 future humans</span> All rights reserved <span className={styles.footer3Privacy}>privacy policy</span></p>
            <div className={styles.footer3ImgSec}>
               <div className={styles.footer3Img}><Image src='/img/vector.svg' alt='svg' width={20} height={20}/></div> 
                <div className={styles.footer3Img}><Image src='/img/mdi_linkedin.svg' alt='svg' width={20} height={20}/></div>
                <div className={styles.footer3Img}><Image src='/img/mdi_twitter.svg' alt='svg' width={20} height={20}/></div>
                <div className={styles.footer3Img}><Image src='/img/ic_outline-facebook.svg' alt='svg' width={20} height={20}/></div>
                <div className={styles.footer3Img}><Image src='/img/fa6-brands_youtube.svg' alt='svg' width={20} height={20}/></div>
            </div>
        </div>
    </div>
 </footer>
  )
}

export default Footer