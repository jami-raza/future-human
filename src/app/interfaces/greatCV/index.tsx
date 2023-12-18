import React from 'react';
import styles from './styles.module.css'
import Image from 'next/image';
import PrimaryBtn from '@/app/components/primaryBtn';

const GreatCv = () => {
  return (
    <div className={styles.greatcv}>
    {/* <div className={styles.lines1}>
      <Image src={'/img/lines-1.png'} className={styles.lines1Img} fill sizes='33' priority alt='Lines'/>
    </div> */}
    <div className={styles.radial}>
      <Image src={'/img/radial.png'} className={styles.radialImg} fill sizes='33' priority alt='Radial'/>
    </div>
    <section className={styles.radial_sec}>
    
      <div className={styles.radial}></div>
    <section className={styles.great}>
      <div className={styles.row} style={{marginBottom:'30px'}}>
      <h1 className={styles.heading}><span>Great CV</span> alone does not <br />guarantee <span>successful <br />relationship</span></h1>
    <div className={styles.second}>
      <p className={styles.para1}>
      We approves 23% of service providers from Europe to join its ranks with their developers.
      </p>
      <p className={styles.para2}>
      Those we approve have a few things in common:
      </p>

    </div>
      </div>
      <div className={styles.row1}>

        <div className={styles.sec1}>
            <div className={styles.box}>
                <p>Their developers look for meaningful, full time dedication and opportunity to move on once the time comes</p>
               
                <Image src='/img/greatcv.png' alt='GreatCV' className={styles.greatcvImg} fill sizes='33' priority/> <br />
                <button className={styles.great1Btn}>LOOKING FOR A DEVELOPERS</button>
            </div>
        </div>

        <div className={styles.sec2}>
     
      <div className={styles.boxes}>
        <div className={styles.box1}>
          <div className={styles.box1_cont}>
          <p>
          The service provider concentrates on scaling the team for you when necessary, providing devs the learning environment
          </p>
          <PrimaryBtn text='COLLAB WITH COMPANY'/>

          </div>
          <div className={styles.cvImgBox}>
          <Image src='/img/cv-box1.png' alt='GreatCV' className={styles.greatcvImg} fill sizes='33' priority/>
          </div>
        </div>
        <div className={styles.box1}>
        <div className={styles.box1_cont}>
          <p>
          Ensuring the overall knowledge transfer and accumulation to and within your organization.
          </p>
          <PrimaryBtn text='EXPLORE MORE'/>
          </div>
          <div className={styles.cvImgBox}>
          <Image src='/img/cv-box1.png' alt='GreatCV' className={styles.greatcvImg} fill sizes='33' priority/>
          </div>
        </div>

      </div>
        </div>
      </div>
    </section>
    </section>
    
    </div>
  )
}

export default GreatCv