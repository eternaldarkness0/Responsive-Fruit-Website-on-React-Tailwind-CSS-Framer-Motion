import React from 'react'
import AboutImg from '../../assets/fruits-splash.png'
import { motion } from 'framer-motion'
import { FadeLeft, FadeUp } from '../../utilities/animation'

export const About = () => {
return (
<>
    <section id='about' className='bg-secondary/10'>
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
            {/* image */}
            <div className='flex justify-center items-center'>
                <motion.img
                variants={FadeLeft(0.4)}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                src={AboutImg} alt="fruits" className='w-[300px] md:max-w-[400px] object-cover' />
            </div>

            {/* text section */}
            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                    <motion.h1
                    variants={FadeUp(0.4)}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    className='text-3xl lg:text-6xl font-bold uppercase'>Brand Info</motion.h1>
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
                        Learn More
                        </button>
                    </motion.div>

                </div>
            </div>

        </div>
    </section>
</>
)
}
