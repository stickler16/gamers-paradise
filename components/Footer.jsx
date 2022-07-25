import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className="footer-container">
            <p>Gamers Paradise 2022 © All rights reserved </p>
            <p className="icon">
                <AiFillInstagram/>
                <AiOutlineTwitter/>
            </p>
        </div>

    )
}

export default Footer