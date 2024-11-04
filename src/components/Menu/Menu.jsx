import React from 'react'
import fruit1 from '../../assets/apple.png'
import fruit2 from '../../assets/orange.png'
import fruit3 from '../../assets/avocado.png'
import fruit4 from '../../assets/cherry.png'
import { motion } from 'framer-motion'
import { FadeRight } from '../../utilities/animation'

const MenuData = [
    {
        id: 1,
        title: 'Fresh Red Apples',
        price: '$3.99',
        img: fruit1,
        link: '/',
        delay: 0.3,
    },

    {
        id: 2,
        title: 'Fresh Oranges',
        price: '$4.99',
        img: fruit2,
        link: '/',
        delay: 0.6,
    },

    {
        id: 3,
        title: 'Fresh Avocado',
        price: '$5.99',
        img: fruit3,
        link: '/',
        delay: 0.9,
    },

    {
        id: 4,
        title: 'Fresh Cherries',
        price: '$2.99',
        img: fruit4,
        link: '/',
        delay: 1.2,
    },
]

export const Menu = () => {
return (
<>
    <section id='products'>
        <div className='container pt-10 pb-20'>
            <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='text-2xl font-bold text-left pb-10 uppercase'>
                Our Menu
            </motion.h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
                {MenuData.map((menu) => (
                    <motion.div
                    variants={FadeRight(menu.delay)}
                    initial='hidden'
                    whileInView='visible'
                    whileHover={{ scale: 1.1 }}
                    key={menu.id}
                    className='bg-white rounded-3xl px-0 py-2 lg:px-4 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex justify-around items-center gap-3'>
                        <img src={menu.img} alt="fruit" className='w-[60px] my-2 scale-105 lg:scale-125' />

                        <div>
                            <h1 className='text-lg font-semibold'>{menu.title}</h1>
                            <p className='text-lg font-semibold text-secondary'>{menu.price}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
</>
)
}
