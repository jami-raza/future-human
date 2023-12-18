"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import ContactLink from '@/app/components/contactLink'
import Drawer from '@/app/components/drawer'

const Navbar = () => {

  return (
    <nav className={styles.navbar}>
      <div className={styles.navsec1}>
        <div className={styles.logoImg}>
          <Image src="/img/logo.png" alt='logo' width={200} height={100}/>
        </div>
          <ul className={styles.navsec2}>
            <li>About us</li>
            <li>What we do</li>
            <li>Why choose us</li>
            <li>Testimonials</li>
            <li><ContactLink/></li>
          </ul>
      </div>

      <div className={styles.navsec3}>
        <div className={styles.login}><p>Login</p></div>
        <div className={styles.signin}><p>Sign in</p></div>
      </div>
       
      <Drawer/>
        
    </nav>
  )
}

export default Navbar