import React from 'react'
import Head from 'next/head.js'
import { Footer, Navbar } from '.'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Gamers Paradise ||  All Of your gaming requirements here !! </title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container"></main>
      {children}
      <footer>
        <Footer />
      </footer>
    </div>

  )
}

export default Layout