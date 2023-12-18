import React,{useState} from 'react'
import styles from './styles.module.css'
import Link from 'next/link';
import ContactLink from '../contactLink';

const Drawer = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    // if(typeof window !== "undefined" && isOpen){
    //     document.body.style.overflowY = 'hidden'
    //   }else{
    //     document.body.style.overflowY = 'visible'
    //   };
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className={styles.drawer}>
    
    <div className={styles.drawerBtn}>
      <button  onClick={toggleNavbar}>
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Menu_Alt_01"> <path id="Vector" d="M12 17H19M5 12H19M5 7H19" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
      </button>
    </div>
   

    <div className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.right}>
        <button onClick={toggleNavbar}>
        <svg width="30px" height="30px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3.84" stroke="#000000" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><line x1="8.06" y1="8.06" x2="55.41" y2="55.94"></line><line x1="55.94" y1="8.06" x2="8.59" y2="55.94"></line></g></svg>
        </button>
      </div>
      <ul className='text-white list-none'>
        <li  onClick={toggleNavbar}><Link className={styles.link} href="#" >About</Link></li>
        <li  onClick={toggleNavbar}><Link className={styles.link} href="#" >What we do</Link></li>
        <li  onClick={toggleNavbar}><Link className={styles.link} href="#" >Why choose us</Link></li>
        <li  onClick={toggleNavbar}><Link className={styles.link} href="#" >Testimonials</Link></li>
        <li onClick={toggleNavbar}><ContactLink/></li>
        <li onClick={toggleNavbar}><Link className={styles.login} href="#" >Login</Link></li>
        <li onClick={toggleNavbar}><Link className={styles.signin} href="#" >Sign in</Link></li>
      </ul>
    </div>
    
  </div>
  )
}

export default Drawer