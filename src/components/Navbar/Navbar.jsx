import React, { useState } from 'react'
import { FaLeaf } from 'react-icons/fa'
import { MdClose, MdMenu, MdOutlineShoppingCart } from 'react-icons/md'
import { ResponsiveNavbar } from './ResponsiveNavbar';
import { motion } from 'framer-motion';

export const Navbar = () => {

const [isActive, setIsActive] = useState(false);

const toggleNavbar = () => {
    setIsActive(!isActive);
};

return (
<>
    <nav id='home' className='md:pt-4'>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container flex items-center justify-between py-4 relative z-[999]">

            {/* logo */}
            <div className='flex items-center gap-2 font-bold text-2xl uppercase'>
                <a className='text-primary flex gap-2' href="#">
                    Fruit <span className='text-secondary'>Store</span>
                </a>
                <FaLeaf className='text-green-500'/>
            </div>

            {/* navbar */}
            <div className='hidden md:block'>
                <ul className='flex items-center gap-6 text-gray-600'>
                    <li>
                        <a href="#home" className='inline-block py-1 px-3 font-semibold hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] duration-300'>Home</a>
                    </li>
                    <li>
                        <a href="#products" className='inline-block py-1 px-3 font-semibold hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] duration-300'>Products</a>
                    </li>
                    <li>
                        <a href="#about" className='inline-block py-1 px-3 font-semibold hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] duration-300'>About</a>
                    </li>
                    <li>
                        <a href="#shop" className='inline-block py-1 px-3 font-semibold hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] duration-300'>Shop</a>
                    </li>
                    <li>
                        <a href="#contact" className='inline-block py-1 px-3 font-semibold hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] duration-300'>Contacts</a>
                    </li>
                    <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300'>
                        <MdOutlineShoppingCart/>
                    </button>
                </ul>
            </div>

            {/* responsive navbar */}
            <div
            onClick={toggleNavbar}
            className='md:hidden text-4xl'>
                {isActive ? <MdClose/> : <MdMenu/>}
            </div>

        </motion.div>
    </nav>

    <ResponsiveNavbar isActive={isActive} setIsActive={setIsActive}/>
</>
)
}
