import React from 'react';
import styles from './styles.module.css'
import PrimaryBtn from '@/app/components/primaryBtn';

const Contact = () => {
    return (
        <div className={styles.contact}>
            <p>Contact</p>
            <div className={styles.contact1}>
                <div className={styles.contact1sec1}>
                    <h1 className={styles.heading}><span>We're available</span> <br /> and ready to <br /> assist you!</h1>
                    <p className={styles.para}>Simply complete the form provided below, including all pertinent information, and expect a response from us within 24-36 business hours.</p>
                </div>
                <div className={styles.buttons}>
                    <div>
                        <button className={styles.mailBtn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 59 53" fill="none">
                                <path d="M9.83268 43.9756C8.4806 43.9756 7.32354 43.5469 6.36152 42.6894C5.39949 41.8318 4.91765 40.7998 4.91602 39.5931V13.298C4.91602 12.0928 5.39785 11.0615 6.36152 10.204C7.32518 9.34647 8.48224 8.91699 9.83268 8.91553H49.166C50.5181 8.91553 51.676 9.34501 52.6396 10.204C53.6033 11.063 54.0843 12.0943 54.0827 13.298V39.5931C54.0827 40.7983 53.6017 41.8304 52.6396 42.6894C51.6776 43.5483 50.5197 43.9771 49.166 43.9756H9.83268ZM29.4993 28.6368L49.166 17.6806V13.298L29.4993 24.2543L9.83268 13.298V17.6806L29.4993 28.6368Z" fill="white" />
                            </svg>
                            info@FutureHuman.io
                        </button>
                    </div>
                    <div>

                        <button className={styles.phoneBtn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 59 53" fill="none">
                                <path d="M24.9135 23.284L28.8702 20.0498C29.953 19.1643 30.7144 18.0108 31.0567 16.737C31.399 15.4633 31.3066 14.1274 30.7914 12.9008L29.1007 8.87764C28.4697 7.37654 27.2203 6.14641 25.6071 5.43796C23.9938 4.72952 22.1382 4.59608 20.4185 5.06485C14.0907 6.79047 9.2269 12.033 10.724 18.26C11.7086 22.3555 13.5911 27.4962 17.1624 32.9672C20.1549 37.575 23.9197 41.7481 28.3263 45.3423C33.6179 49.635 41.1772 48.5618 46.0411 44.5206C47.3448 43.437 48.1359 41.9511 48.2531 40.3656C48.3703 38.7801 47.8047 37.2145 46.6716 35.9879L43.5723 32.6319C42.6382 31.62 41.386 30.8799 39.9767 30.5068C38.5673 30.1338 37.065 30.1447 35.6626 30.5382L30.5443 31.9762C30.3471 31.7954 30.1203 31.5801 29.8695 31.332C28.8173 30.2943 27.8863 29.1638 27.091 27.958C26.3173 26.741 25.6847 25.4568 25.203 24.1255C25.1 23.8468 25.0035 23.5663 24.9135 23.284Z" fill="white" />
                            </svg>
                            +1222 875 000
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.contact2}>
                <form>
                    <div className={styles.contact2Input}>
                        <input type="text" placeholder='Ful Name'/>
                        <input type="Email" name="" id="" placeholder='Email' />
                    </div>
                    <div className={styles.contact2Input}>
                        <input type="text" placeholder='Phone number'/>
                        <input type="text" placeholder='Company'/>
                    </div>
                    <div className={styles.contact2Input}>
                        <input type="text" placeholder='Describe your project' />
                    </div>
                    <div className={styles.contact2Btn}>
                        <button className={styles.attachBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 29 30" fill="none">
<path d="M7.25 9.79018V19.5656C7.25 21.4884 8.01384 23.3325 9.37348 24.6921C10.7331 26.0518 12.5772 26.8156 14.5 26.8156C16.4228 26.8156 18.2669 26.0518 19.6265 24.6921C20.9862 23.3325 21.75 21.4884 21.75 19.5656V7.48226C21.75 6.20038 21.2408 4.971 20.3343 4.06458C19.4279 3.15815 18.1985 2.64893 16.9167 2.64893C15.6348 2.64893 14.4054 3.15815 13.499 4.06458C12.5926 4.971 12.0833 6.20038 12.0833 7.48226V18.5772C12.0833 18.8945 12.1458 19.2088 12.2673 19.502C12.3887 19.7952 12.5668 20.0616 12.7912 20.286C13.0156 20.5104 13.282 20.6884 13.5752 20.8099C13.8684 20.9313 14.1826 20.9938 14.5 20.9938C15.1409 20.9938 15.7556 20.7392 16.2088 20.286C16.6621 19.8328 16.9167 19.2181 16.9167 18.5772V9.89893" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
Attach a file
                        </button>
                        <PrimaryBtn text='Submit'/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact