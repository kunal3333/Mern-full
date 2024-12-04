import React from 'react'
// import headphones from '../../assest/products/airpodes/boAt Airdopes 111 1.webp'
// import canera from '../../assest/products/camera/Canon EOS 5D Mark IV 30.4 MP Digital SLR Camera (Black) + EF 24-105mm is II USM Lens Kit 1.jpg'
// import mobile from '../../assest/products/mobile/realme 7 Pro (Mirror Silver, 128 GB) (6 GB RAM) 1.webp'
import watches from '../../assest/products/watches/boAt Cosmos Pro 1.webp'

const categories = () => {
    return (
        <div className='text-center'>
            <div className='flex flex-row flex-wrap md:flex-nowrap gap-6 my-5'>
                <div className='cursor-pointer min-h-40s w-60'>
                    <img className='hover:opacity-65 w-full' src={watches} alt="skirts-dresses" />
                    <h2 className='uppercase hover:text-orange-400 text-[14px] sm:text-[14px]'>Headphones</h2>
                </div>

                <div className='cursor-pointer min-h-40 w-60'>
                    <img className='hover:opacity-65 w-full' src={watches} alt="trousers-jeans" />
                    <h2 className='uppercase hover:text-orange-400 text-[14px] sm:text-[14px]'>Camera</h2>
                </div>

                <div className='cursor-pointer min-h-40 w-60'>
                    <img className='hover:opacity-65 w-full' src={watches} alt="bag-backpacks" />
                    <h2 className='uppercase hover:text-orange-400 text-[14px] sm:text-[14px]'>Watches</h2>
                </div>

                <div className='cursor-pointer min-h-40 w-60'>
                    <img className='hover:opacity-65 w-full' src={watches} alt="shoes-sandals" />
                    <h2 className='uppercase hover:text-orange-400 text-[14px] sm:text-[14px]'>watches</h2>
                </div>

                <div className='cursor-pointer min-h-40 w-60'>
                    <img className='hover:opacity-65 w-full' src={watches} alt="shoes-sandals" />
                    <h2 className='uppercase hover:text-orange-400 text-[14px] sm:text-[14px]'>Mouse</h2>
                </div>
                <div className='cursor-pointer min-h-40 w-60'>
                    <img className='hover:opacity-65 w-full' src={watches} alt="shoes-sandals" />
                    <h2 className='uppercase hover:text-orange-400 text-[14px] sm:text-[14px]'>Printer</h2>
                </div>
                <div className='cursor-pointer min-h-40 w-60'>
                    <img className='hover:opacity-65 w-full' src={watches} alt="shoes-sandals" />
                    <h2 className='uppercase hover:text-orange-400 text-[14px] sm:text-[14px]'>Procesor</h2>
                </div>
                <div className='cursor-pointer min-h-40 w-60'>
                    <img className='hover:opacity-65 w-full' src={watches} alt="shoes-sandals" />
                    <h2 className='uppercase hover:text-orange-400 text-[14px] sm:text-[14px]'>Refrigerator</h2>
                </div>
                <div className='cursor-pointer min-h-40 w-60'>
                    <img className='hover:opacity-65 w-full' src={watches} alt="shoes-sandals" />
                    <h2 className='uppercase hover:text-orange-400 text-[14px] sm:text-[14px]'>Speaker</h2>
                </div>
                <div className='cursor-pointer min-h-40 w-60'>
                    <img className='hover:opacity-65 w-full' src={watches} alt="shoes-sandals" />
                    <h2 className='uppercase hover:text-orange-400 text-[14px] sm:text-[14px]'>TV</h2>
                </div>
            </div>
        </div>
    )
}

export default categories
