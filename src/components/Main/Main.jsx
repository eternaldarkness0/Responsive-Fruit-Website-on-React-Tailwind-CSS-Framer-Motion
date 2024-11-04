import React from 'react'
import { IoBagHandleOutline } from 'react-icons/io5'
import MainPng from '../../assets/fruit-plate.png'
import LeafPng from '../../assets/leaf.png'
import { motion } from 'framer-motion'
import { FadeLeft } from '../../utilities/animation'

export const Main = () => {
return (
<>
    <section id='home'>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">

            <div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
                {/* text section */}
                <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
                    <motion.h1
                    variants={FadeLeft(0.2)}
                    initial='hidden'
                    animate='visible'
                    className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal font-averia'>
                    Healthy<br /> Fresh <span className='text-secondary'>Fruits!</span>
                    </motion.h1>
                    <motion.p
                    variants={FadeLeft(0.5)}
                    initial='hidden'
                    animate='visible'
                    className='text-2xl tracking-wide'>Order Now For Fresh Healthy Life</motion.p>
                    <motion.p
                    variants={FadeLeft(0.7)}
                    initial='hidden'
                    animate='visible'
                    className='text-gray-400'>Healthy and yummy food for fresh morning breakfast. Eat Daily for good health and mind Order now and get 20% off on your first order
                    </motion.p>
                    <motion.div
                    variants={FadeLeft(1)}
                    initial='hidden'
                    animate='visible'
                    className='flex justify-center md:justify-start'>
                        <button className='primary-btn flex items-center gap-2'>
                        <span>
                            <IoBagHandleOutline className='text-xl'/>
                        </span>
                        Order Now
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* image section */}
            <div className='flex justify-center items-center'>
                <motion.img
                initial={{ opacity: 0, x: 200, rotate: 75 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                src={MainPng} alt="fruits"  className='w-[350px] md:w-[550px] drop-shadow'/>
            </div>

            <div className='absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]'>
                <motion.img
                initial={{ opacity: 0, y: -200, rotate: 75 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.9, delay: 1 }}
                src={LeafPng} alt="leaf" className='w-full md:max-w-[300px]'/>
            </div>

        </div>
    </section>
</>
)
}
