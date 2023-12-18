import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const Topbar = () => {
  return (
    <div className={styles.topbar}>
        <p>We're assembling a United Tech Force to help non-profits and startups affected by the war <Link href={'#'}>Get involved</Link></p>
    </div>
  )
}

export default Topbar