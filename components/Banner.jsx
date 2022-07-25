import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'


const Banner = ({banner}) => {
    return (
        <div className="banner-container">
            <div>
                <p className="beats-solo">{banner.smallText}</p>
                <h3>{banner.midText}</h3>
                <h1>{banner.largeText1}</h1>
                <img src={urlFor(banner.image)} alt="Controllers" className="banner-image" />
                <div>
                    <Link href="/product/ID">
                        <button type="button">BUTTON</button>
                    </Link>
                    <div className="desc">
                        <h5>{banner.desc}</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus hic velit aliquam quaerat aspernatur rerum ea a fugiat quam.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Banner