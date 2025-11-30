import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-container">
            <div className="flex flex-col justify-center md:items-start items-center">
                <a href="/">Visit my blog</a>
            </div>
            <div className="socials">
                {socialImgs.map((img) => (
                    <a className='icon' href={img.url} key={img.url} target="_blank" rel="noreferrer">
                        <img src={img.imgPath} />
                    </a>
                ))}
            </div>
            <div className="flex flex-col justify-center items-center md:items-end">
                <div className="text-center md:text-end">
                    <p>© {new Date().getFullYear()} | Asad. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer