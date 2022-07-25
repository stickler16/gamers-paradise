import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsBagCheckFill } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { useStateContext } from '../context/StateContext'
import { runRealistic } from '../lib/utils'


const Success = () => {

    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    const [order, setOrder] = useState(null);

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runRealistic();

    }, [])


    return (
        <div className="success-wrapper">
            <div className="success">
                <p className="icon">
                    <BsBagCheckFill />
                </p>
                <h2>Thank you For choosing us !</h2>
                <p className="email-msg">Check Your Inbox for receipt </p>
                <p className="description">
                    For any Queries , Contact
                    <a className="email" href="mailto:shailrajm2@gmail.com">shailrajm2@gmail.com</a>
                </p>
                <Link href="/">
                    <button type="button" width="300px" className="btn">Homepage</button>
                </Link>
            </div>
        </div>
    )
}

export default Success