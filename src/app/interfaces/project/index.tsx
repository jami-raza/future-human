import React from 'react'
import styes from './styles.module.css'

const Project = () => {
    return (
        <div className={styes.project}>
            <div className={styes.project1}>
                <div>
                    <p className={styes.sec1Subheading}>PLATFORM FUTURE HUMAN</p>
                    <h1 className={styes.sec1Heading}><span>Success</span> through Data</h1>
                    <p className={styes.sec1Para}>Discover the impact. explore the data. of Future humans success—numbers that reflect our commitment to excellence and the transformative power of our services.</p>
                </div>
                <div className={styes.sec2}>
                    <h1>$110,000,000+</h1>
                    <p>Total value of projects</p>
                </div>
            </div>

            <div className={styes.project2}>
                <div className={styes.sec2}>
                    <h1>$2,000+</h1>
                    <p>Projects to date</p>
                </div>
                <div className={styes.sec2}>
                    <h1>$100,000+</h1>
                    <p>Dedicated Developers</p>
                </div>
                <div className={styes.sec2}>
                    <h1>$2,000+</h1>
                    <p>Approved service providers</p>
                </div>
            </div>
        </div>
    )
}

export default Project