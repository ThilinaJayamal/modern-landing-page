import clsx from 'clsx'
import React from 'react'
import Marker from './Marker'

function Button({ icon, children, href, containerClass, onClick,markerFill }) {
    const Inner = () => {
        return (
            <>
                <span className='flex realtive items-center min-h-[60px] 
                px-4 g4 inner-before group-hover:before:opacity-100 overflow-hidden rounded-2xl'>
                    <span className='absolute -left-[1px]'><Marker markerFill={markerFill}/></span>
                    {
                        icon && (
                            <img src={icon} alt='icon'
                                className='size-10 mr-5 object-contain z-10' />
                        )
                    }
                    <span className='relative z-2  font-poppins base-bold text-p1 uppercase'>{children}</span>
                    <span className='glow-before glow-after'></span>
                </span>
            </>
        )
    }
    return href ? (
        <a href={href} className={clsx('relative p-0.5 g5 shadow-500 group rounded-2xl', containerClass)}>

        </a>
    ) :
        (
            <button className={clsx('relative p-0.5 g5 shadow-500 group rounded-2xl', containerClass)} onClick={onClick}>
               <Inner/>
            </button>
        )
}

export default Button