import React from 'react'
import Container from '../../../ui/Container'
import ProductCard from '../../../ui/ProductCard'
import { purpleBtnClass } from '../../../utils/classes'

export default function Stats() {
    const dum = [1, 1, 1, 1]
    return (
        <div className="wrap py-32">
            <Container>
                <div className="header text-center py-5">
                    <h1 className='font-extrabold text-3xl lg:text-4xl mb-2'>Trending <span className='text-purple-800'>Products</span></h1>
                    <span className='font-thin'>Contrary to popular belief, Lorem Ipsum is not simply random text. <br /> It has roots in a piece of classical</span>
                </div>
                <div className="grid grid-cols-4 gap-10 pt-16">
                    {dum.map((i, index) => (
                        <ProductCard key={index} />
                    ))}
                </div>

                <div className="btn-wrap text-center mt-5">
                    <button className={`${purpleBtnClass}`}>View Products</button>
                </div>
            </Container>
        </div>
    )
}
