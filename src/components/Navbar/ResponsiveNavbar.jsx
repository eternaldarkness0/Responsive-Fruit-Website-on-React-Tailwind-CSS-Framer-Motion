import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';

export const ResponsiveNavbar = ({ isActive, setIsActive }) => {

const toggleNavbar = () => {
    setIsActive(!isActive);
};

return (
    <AnimatePresence mode='wait'>
    {isActive && (
        <motion.div
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -70 }}
        transition={{ duration: 0.2 }}
        className='absolute top-16 left-0 w-full z-[999]'>
            <ul className='flex flex-col items-center gap-10 bg-primary text-xl font-semibold uppercase text-white py-10 m-6 rounded-3xl'>
                <li>
                    <a href="#home" onClick={toggleNavbar}>Home</a>
                </li>

                <li>
                    <a href="#products" onClick={toggleNavbar}>Products</a>
                </li>

                <li>
                    <a href="#about" onClick={toggleNavbar}>About</a>
                </li>

                <li>
                    <a href="#shop" onClick={toggleNavbar}>Shop</a>
                </li>

                <li>
                    <a href="#contact" onClick={toggleNavbar}>Contacts</a>
                </li>
            </ul>
        </motion.div>
    )}
    </AnimatePresence>
)
}
