"use client"
import React, { useState, useEffect }  from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Link from 'next/link'

const ExploreFuture = () => {
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
       
        slides: {
            perView: 3,
            spacing: 15,
        },
        breakpoints: {
            '(max-width: 1024px)': {
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
    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        // ... configuration options
      });

    // useEffect(() => {
    //     if (instanceRef) {
    //       const dots = Array.from(Array(slider.current && slider.current.size).keys());
    //       dots.forEach((index) => {
    //         const dot = document.createElement('button');
    //         dot.className = 'keen-slider__dot';
    //         dot.addEventListener('click', () => slider.moveToSlide(index));
    
    //         sliderContainerRef.current?.querySelector('.keen-slider__dots')?.appendChild(dot);
    //       });
    
    //       const setActiveDot = () => {
    //         const dots = sliderContainerRef.current?.querySelectorAll('.keen-slider__dot');
    //         dots?.forEach((dot, index) => {
    //           index === slider.details().relativeSlide && dot.classList.add('active');
    //           index !== slider.details().relativeSlide && dot.classList.remove('active');
    //         });
    //       };
    
    //       setActiveDot();
    
    //       instanceRef.current?.on('', setActiveDot);
    //     }
    //   }, [instanceRef]);
    return (
        <section className={styles.explore}>
            <div className={styles.explore1}>
                <p>INSIGHTS HUB</p>
                <h1>Explore Future <br /> Humans <span>Latest Blogs</span></h1>
            </div>

            <div className={styles.explore2}>
                <div ref={ref} className="keen-slider">
                    <div className="keen-slider__slide number-slide1">
                        <div className={styles.slide}>
                            <Image src='/img/sliderImg1.png' alt='sliderImage' fill sizes='33' priority className={styles.slideImg} />
                            <h2>New & updated services at Future Humans</h2>
                            <p>We are excited to enter the last month of the year with new services as well as important updates on the existing ones.
                            </p>
                            <Link className={styles.readmore} href={'#'}>Read more <Image src='/img/arrow-3.svg' alt='svg' width={10} height={10}/></Link>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide2">
                        <div className={styles.slide}>
                            <Image src='/img/sliderImg2.png' alt='sliderImage' fill sizes='33' priority className={styles.slideImg} />
                            <h2>Outsourcing FinTech development: Everything you need to know</h2>
                            <p>Programming is the most significant aspect of fintech outsourcing, so finding a suitable outsourcing provider is essential to your business's success. Discover how it can be integrated with your in-house team.
                            </p>
                            <Link className={styles.readmore} href={'#'}>Read more <Image src='/img/arrow-3.svg' alt='svg' width={10} height={10}/></Link>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide3">
                        <div className={styles.slide}>
                            <Image src='/img/sliderImg3.png' alt='sliderImage' fill sizes='33' priority className={styles.slideImg} />
                            <h2>Hire Google Cloud developers, programmers, software engineers online | Future Humans</h2>
                            <p>Programming is the most significant aspect of fintech outsourcing, so finding a suitable outsourcing provider is essential to your business's success. Discover how it can be integrated with your in-house team.
                            </p>
                            <Link className={styles.readmore} href={'#'}>Read more <Image src='/img/arrow-3.svg' alt='svg' width={10} height={10}/></Link>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide1">
                        <div className={styles.slide}>
                            <Image src='/img/sliderImg1.png' alt='sliderImage' fill sizes='33' priority className={styles.slideImg} />
                            <h2>New & updated services at Future Humans</h2>
                            <p>We are excited to enter the last month of the year with new services as well as important updates on the existing ones.
                            </p>
                            <Link className={styles.readmore} href={'#'}>Read more <Image src='/img/arrow-3.svg' alt='svg' width={10} height={10}/></Link>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide2">
                        <div className={styles.slide}>
                            <Image src='/img/sliderImg2.png' alt='sliderImage' fill sizes='33' priority className={styles.slideImg} />
                            <h2>Outsourcing FinTech development: Everything you need to know</h2>
                            <p>Programming is the most significant aspect of fintech outsourcing, so finding a suitable outsourcing provider is essential to your business's success. Discover how it can be integrated with your in-house team.
                            </p>
                            <Link className={styles.readmore} href={'#'}>Read more <Image src='/img/arrow-3.svg' alt='svg' width={10} height={10}/></Link>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide3">
                        <div className={styles.slide}>
                            <Image src='/img/sliderImg3.png' alt='sliderImage' fill sizes='33' priority className={styles.slideImg} />
                            <h2>Hire Google Cloud developers, programmers, software engineers online | Future Humans</h2>
                            <p>Programming is the most significant aspect of fintech outsourcing, so finding a suitable outsourcing provider is essential to your business's success. Discover how it can be integrated with your in-house team.
                            </p>
                            <Link className={styles.readmore} href={'#'}>Read more <Image src='/img/arrow-3.svg' alt='svg' width={10} height={10}/></Link>
                        </div>
                    </div>

                </div>
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

export default ExploreFuture