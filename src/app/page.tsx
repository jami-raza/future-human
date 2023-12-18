import Image from 'next/image'
import styles from './page.module.css'
import Banner from './interfaces/banner'
import Project from './interfaces/project'
import GreatCv from './interfaces/greatCV'
import Horns from './interfaces/horns'
import Contact from './interfaces/contact'
import ExploreFuture from './interfaces/exploreFuture'
import Testimonial from './interfaces/testimonial'
import Company from './interfaces/company'
import Developer from './interfaces/developer'
import ServiceProvider from './interfaces/serviceProvider'
import Help from './interfaces/help'
import Lead from './interfaces/lead'
import Leadi from './interfaces/leadi'
import '../app/globals.css'

export default function Home() {
 
  return (
    <main className={styles.main}>
      <Banner/>
      <Project/>
      <Horns/>
      <GreatCv/>
      <Developer/>
      <ServiceProvider/>
      {/* <Lead/> */}
   

      <Leadi />
  
      <Help/>
      <Company/>
      <Testimonial/>
      <ExploreFuture/>
      <Contact/>
    </main>
  )
}
