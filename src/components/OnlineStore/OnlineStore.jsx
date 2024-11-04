import React from 'react'
import StorePng from '../../assets/fruit-plate2.png'
import { motion } from 'framer-motion'
import { FadeUp } from '../../utilities/animation'

export const OnlineStore = () => {
return (
<>
    <section id='shop'>
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">

            {/* text section */}
            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
                    <motion.h1
                    variants={FadeUp(0.4)}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    className='text-3xl lg:text-6xl font-bold uppercase'>Online Fruit Store</motion.h1>
                    <motion.p
                    variants={FadeUp(0.6)}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!
                    </motion.p>

                    <motion.p
                    variants={FadeUp(0.8)}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!
                    </motion.p>

                    <motion.div
                    variants={FadeUp(1)}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    className='flex justify-center md:justify-start'>
                        <button className='primary-btn'>
                        Download the App
                        </button>
                    </motion.div>

                </div>
            </div>

            {/* image */}
            <div className='flex justify-center items-center'>
                <motion.img
                initial={{ opacity: 0, x: 200, rotate: 150 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                viewport={{ once: true }}
                src={StorePng} alt="fruits" className='w-[350px] md:w-[520px] object-cover drop-shadow' />
            </div>

        </div>
    </section>
</>
)
}
