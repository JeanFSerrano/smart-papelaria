import React from 'react'

const ProductCard = ({ title, text, img }) => {
    return (

        <div className='bg-slate-200 p-4 sm:w-full md:w-1/3 lg:w-1/3 h-[400px] text-center flex flex-col items-center justify-between hover:scale-105 transition-all ease-linear'>
            <figure className='p-2'>
                <img src={img} width='400' alt={title} />
            </figure>
            <h2 className='font-bold mt-3'>{title}</h2>
            <p className='mt-4'>{text}</p>
        </div>
    )
}

export default ProductCard