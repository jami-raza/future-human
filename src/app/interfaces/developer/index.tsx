import React from 'react';
import styles from './styles.module.css'
import PrimaryBtn from '@/app/components/primaryBtn';
import SecondaryBtn from '@/app/components/secondaryBtn';
import Image from 'next/image';

const Developer = () => {
  return (
    <>
    <div className={styles.lines2}>
      {/* <Image src={'/img/lines-2.png'} width={1661} height={880} alt='Lines'/> */}
    </div>
    <div className={styles.lines3}>
      {/* <Image src={'/img/lines-3.png'} width={880} height={2137} alt='Lines'/> */}
    </div>
   
        <section className={styles.developer}>
                    <p>ABOUT THE DEVELOPERS</p>
                <div className={styles.developer1}>
                    <div className={styles.heading}>
                    <h1>Devs from <span>Future <br /> Humans</span> seem fun</h1>
                    </div>
                    <div >
                        <div className={styles.developer1Btn}>
                        <PrimaryBtn text='HIRE DEVELOPER'/>
                        </div>
                        <div>
                        <SecondaryBtn text='HIRE DEVELOPER'/>
                        </div>
                    </div>
                </div>

                <div className={styles.developer2}>
                    <div className={styles.developer2inner}>
                        <Image src='/img/dev1.png' alt='devImage' width={100} height={100}/>
                        <h2>But are they <span>fun for you?</span></h2>
                        <p>There is about 40% chance that - they are. It’s interesting for us to communicate with you via text, but talking live would help answer this question much easier.</p>
                    </div>
                    <div className={styles.developer2inner}>
                        <Image src='/img/dev2.png' alt='devImage' width={100} height={100}/>
                        <p>The number one conversation (pre-)starter we have is “We hire inhouse and would like to keep it that way” and yet - in about 40% of the cases, within 1st or 2nd conversation we land on a pilot project (meaningful thing to be done that could scale to long-term collaboration)</p>
                    </div>
                    <div className={styles.developer2inner}>
                        <Image src='/img/dev1.png' alt='devImage' width={100} height={100}/>
                        <h2>So is it <span> for you?</span></h2>
                        <p>40% chance that - it is. Let’s have a call and turn it to 100% clarity.</p>
                    </div>
                </div>
        </section>
    
    </>
    )
}

export default Developer