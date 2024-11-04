import React from 'react'
import { motion } from 'framer-motion'
import { FadeRight } from '../../utilities/animation'
import BannerImg from '../../assets/banner-bg.jpg'
import { IoBagHandleOutline } from 'react-icons/io5'

const bgStyle = {
    backgroundImage: `url(${BannerImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
}

export const Banner = () => {
return (
<>
    <section className='container mb-12'>
        <div
        style={bgStyle}
        className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl">

            {/* blank div */}
            <div></div>

            {/* text section */}
            <div className='flex flex-col justify-center p-4'>
                <div className='text-center md:text-left space-y-5 lg:max-w-[400px]'>
                    <motion.h1
                    variants={FadeRight(0.4)}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    className='text-3xl lg:text-5xl font-bold uppercase'>Get Fresh Fruits Today</motion.h1>
                    <motion.p
                    variants={FadeRight(0.6)}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!
                    </motion.p>

                    <motion.div
                    variants={FadeRight(0.8)}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
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

        </div>
    </section>
</>
)
}
