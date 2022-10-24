import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/img/logo.jpg'

const Navbar = () => {
    return (


        <nav className='bg-slate-100 w-100 flex justify-between shadow-md md:px-20 py-1 fixed top-0 right-0 left-0 z-10 sm:px-4'>

            <a href="/">
                <figure>
                    <img src={logo} width='100' alt="Logo da papelaria" />
                </figure>
            </a>

            <ul className='gap-4 flex items-center text-slate-800 font-semibold'>

                <li className='hover:text-red-600 transition-all ease-linear hover:scale-105'>
                    <a href='#'>Início</a>
                </li>
                <li className='hover:text-red-600 transition-all ease-linear hover:scale-105'>
                    <a href='#sobre'>Sobre nós</a>
                </li>
                <li className='hover:text-red-600 transition-all ease-linear hover:scale-105'>
                    <a href='#produtos'>Produtos</a>
                </li>
                <li className='hover:text-red-600 transition-all ease-linear hover:scale-105'>
                    <a href='#contato'>Contato</a>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar