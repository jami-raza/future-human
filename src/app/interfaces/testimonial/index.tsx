"use client"
import React, { useState } from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Testimonial = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [ref,instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
        // loop: true,
       
        slides: {
            perView: 3,
            spacing: 30,
        },
        breakpoints: {
          '(max-width: 768px)': {
            slides: {
              perView: 2,
            spacing: 30,

            }
          },
          '(max-width: 600px)': {
            slides: {
              perView: 1,
              spacing: 30
            }
          },
         
        },
    })
    console.log(instanceRef.current, "Slides")

  return (
    <section className={styles.testimonial}>
<div className={styles.test1}>
    <p>SERVICE PROVIDER</p>
    <h1>Hear it from the <br /> <span>experts</span></h1>
</div>

        <div className={styles.test2}>
        <div className="navigation-wrapper">
            <div ref={ref} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
            <div className={styles.slide}>
                <Image src='/img/Ellipse1.svg' alt='svg' width={60} height={60}/>
                <h3>Povilas Miknevičius</h3>
                <Image src='/img/star.svg' alt='svg' width={60} height={60}/>
                <p>Perfect communication! Not only they can offer a wide variety of specialists, but they also help to match you perfectly with the team that will be working on your project. Once again thank you very much for your help!</p>
            </div>
            </div>
            <div className="keen-slider__slide number-slide2">
            <div className={styles.slide}>
                <Image src='/img/Ellipse2.svg' alt='svg' width={60} height={60}/>
                <h3>Dalia Grakulskyte</h3>
                <Image src='/img/star.svg' alt='svg' width={60} height={60}/>
                <p>I struggled to find programmers locally, they’re in high demand. I was rather pleased to get a good option fast. Very happy with service and communication. Thank you
</p>
            </div>
            </div>
            <div className="keen-slider__slide number-slide3">
            <div className={styles.slide}>
                <Image src='/img/Ellipse3.svg' alt='svg' width={60} height={60}/>
                <h3>Ēriks Lapiņš</h3>
                <Image src='/img/star.svg' alt='svg' width={60} height={60}/>
                <p>I would highly recommend this service. We went into the project just knowing only approximately what we need but we came out of it with a clear goal on the next steps.
</p>
            </div>
            </div>
            <div className="keen-slider__slide number-slide4">
            <div className={styles.slide}>
                <Image src='/img/Ellipse1.svg' alt='svg' width={60} height={60}/>
                <h3>Povilas Miknevičius</h3>
                <Image src='/img/star.svg' alt='svg' width={60} height={60}/>
                <p>Perfect communication! Not only they can offer a wide variety of specialists, but they also help to match you perfectly with the team that will be working on your project. Once again thank you very much for your help!</p>
            </div>
            </div>
            <div className="keen-slider__slide number-slide5">
            <div className={styles.slide}>
                <Image src='/img/Ellipse2.svg' alt='svg' width={60} height={60}/>
                <h3>Dalia Grakulskyte</h3>
                <Image src='/img/star.svg' alt='svg' width={60} height={60}/>
                <p>I struggled to find programmers locally, they’re in high demand. I was rather pleased to get a good option fast. Very happy with service and communication. Thank you
</p>
            </div>
            </div>
            <div className="keen-slider__slide number-slide6">
            <div className={styles.slide}>
                <Image src='/img/Ellipse3.svg' alt='svg' width={60} height={60}/>
                <h3>Ēriks Lapiņš</h3>
                <Image src='/img/star.svg' alt='svg' width={60} height={60}/>
                <p>I would highly recommend this service. We went into the project just knowing only approximately what we need but we came out of it with a clear goal on the next steps.
</p>
            </div>
            </div>

            </div>
            </div>
            {/* {loaded && instanceRef.current && (
        <div className="dots">
            {instanceRef && [
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )} */}
      {instanceRef && (
        <div className={styles.dots}>
          {new Array(instanceRef.current?.slides.length && instanceRef.current?.slides.length/3).fill(undefined).map((val,idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                }}
                className={styles.dot +' '+ (currentSlide === idx ? styles.active : '')}
              ></button>
            )
          })}
        </div>
      )}
        </div>
    </section>
  )
}

export default Testimonial