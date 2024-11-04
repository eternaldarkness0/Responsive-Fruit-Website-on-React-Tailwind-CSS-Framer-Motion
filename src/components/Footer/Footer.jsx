import React from 'react'
import { FaFacebook, FaInstagram, FaLeaf, FaTwitter, FaYoutube } from 'react-icons/fa'
import { motion } from 'framer-motion'

export const Footer = () => {
return (
<>
    <footer id='contact' className='bg-primary/10 py-12'>
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='container flex sm:justify-between sm:flex-row items-center flex-col gap-4'>
            {/* logo */}
            <div className='flex items-center gap-2 font-bold text-2xl uppercase'>
                <a className='text-primary flex gap-2' href="#">
                    Fruit <span className='text-secondary'>Store</span>
                </a>
                <FaLeaf className='text-green-500'/>
            </div>

            {/* footer socials */}
            <div className='flex items-center gap-4 text-3xl text-gray-700 flex-wrap'>
                <a href="#"><FaInstagram className='hover:scale-110 duration-200'/></a>
                <a href="#"><FaTwitter className='hover:scale-110 duration-200'/></a>
                <a href="#"><FaYoutube className='hover:scale-110 duration-200'/></a>
                <a href="#"><FaFacebook className='hover:scale-110 duration-200'/></a>
            </div>

        </motion.div>
    </footer>
</>
)
}
