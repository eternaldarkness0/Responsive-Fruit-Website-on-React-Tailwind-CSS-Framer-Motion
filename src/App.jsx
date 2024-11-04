import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Main } from './components/Main/Main'
import { Menu } from './components/Menu/Menu'
import { About } from './components/About/About'
import { OnlineStore } from './components/OnlineStore/OnlineStore'
import { Banner } from './components/Banner/Banner'
import { Footer } from './components/Footer/Footer'

export const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <header>
        <Navbar />
      </header>
      <main>
      <Main />
      <Menu />
      <About />
      <OnlineStore />
      <Banner />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
