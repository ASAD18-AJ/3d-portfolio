import React from 'react'
import { words } from '../constants'
import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react';
import AnimatedCounter from '../components/AnimatedCounter'
const Hero = () => {
  useGSAP(() => {
    gsap.fromTo('.hero-text h1', {
      y: 50,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      ease: 'power2.inOut'
    },
    
  )
  })
  return (
    <section id='hero' className='relative overflow-hidden'>
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* LEFT HERO SECTION */}
        <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>Shaping
                <span className='slide'>
                  <span className='wrapper'>
                    {words.map((word, index) => (
                      <span key={`${word.text}-${index}`} className='flex items-center md:gap-3 gap-1 pb-2'>
                        <img src={word.imgPath} alt={word.text} className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'/>
                        <span>{word.text}</span>
                      </span>                    
                    ))}                
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>Hi, I'm Asad, a developer based in Dhanbad with a passion for code.</p>
            <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text="see my work" />
            <a
              href="/Asad_Jahangir_Resume.pdf"
              download="Asad_Jahangir_Resume.pdf"
              className="relative z-20 w-fit inline-flex items-center gap-3 rounded-lg border border-white-50/40 bg-black-100 px-5 py-3 text-white-50 font-semibold hover:bg-black-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white-50"
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m-4-4 4 4 4-4M5 16v4h14v-4" />
              </svg>
              Download Resume <span className="text-sm font-normal text-blue-50">PDF</span>
            </a>
          </div>
        </header>

        <figure>
          <div className='hero-3d-layout  '>
                    <HeroExperience />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  )
}

export default Hero;
