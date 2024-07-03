import React from 'react'
import Container from '../../../ui/Container'
import ProductCard from '../../../ui/ProductCard'
import { BiCartDownload } from 'react-icons/bi'
import Header from '../../../ui/Header'

export default function WishList() {
    const dum = [1, 2, 3, 4, 5, 1, 2, 2, 3,]

    return (
        <div className="wrap mt-[130px]">
            <Header black={true} />
            <Container>
                <div className="header flex flex-wrap gap-5 justify-between items-center mb-10 border-t border-b py-5">
                    <h1 className='text-2xl font-bold text-primary'>Wishlist ({dum.length})</h1>

                    <div className="filter-wrap flex gap-4">
                        <button className='flex gap-2 items-center border p-3 rounded-lg hover:bg-primary hover:text-white transition-all'>
                            <BiCartDownload /> <span>Add all to Cart</span>
                        </button>
                    </div>
                </div>

                <div className="wrap">
                    <div className="grid lg:grid-cols-4 gap-10">
                        {dum.map((i, index) => (
                            <ProductCard key={index} />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}
