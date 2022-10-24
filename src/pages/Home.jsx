import React from 'react'
import logo from '/img/logo.jpg'
import About from './About'
import Contact from './Contact'
import Products from './Products'
import { BsWhatsapp } from 'react-icons/bs'

const Home = () => {
  return (
    <section className='w-full'>
      <div className='mt-20 bg-mainbg bg-cover flex justify-around items-center m-auto md:p-20 h-80 bg-slate-200 text-slate-900 font-extrabold sm:p-4 w-full'>
        <div className='xs:hidden sm:hidden md:block lg:block'>
          <h2 className='text-4xl'>Sua papelaria</h2>
          <h2 className='text-4xl mb-5'>Sempre conectada.</h2>
          <a href='#sobre'><button className='text-slate-800 font-bold py-3 px-7 bg-gradient-to-r from-red-600 via-red-400 to-blue-300 rounded-3xl hover:scale-105'>Saiba mais</button></a>
        </div>
        <div className='sm:block md:block lg:block'>
          <img src={logo} width='400' alt="Logo da Papelaria" />
        </div>
      </div>
      <About />
      <Products />
      <Contact />


      <aside className='fixed top-[36rem] right-4 z-10 flex flex-col items-center'>
        <p className='font-bold'>Nosso Whatsapp!</p>
        <a target='_blank' href="https://wa.me/5527992728501">
          <BsWhatsapp size={45} fill='green' />
        </a>
      </aside>

    </section>
  )
}

export default Home