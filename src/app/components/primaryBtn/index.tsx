import React from 'react'
import styles from './styles.module.css'
import { League_Spartan } from 'next/font/google'
const league = League_Spartan({ subsets: ['latin'] })
type IProps = {
    text: string
}

const PrimaryBtn = ({text}:IProps) => {
  return (
    <>
        <button className={styles.btn+' '+league.className} >
            {text}
        </button>
    </>
  )
}

export default PrimaryBtn