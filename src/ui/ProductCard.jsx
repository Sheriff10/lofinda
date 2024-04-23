import React from 'react'
import { FaStar } from "react-icons/fa"

export default function ProductCard() {
    const dum = [1, 1, 1, 1, 1]

    return (
        <div className="card border-[1px] rounded-lg overflow-clip">
            <div className="card-img">
                <img src="/asset/p1.webp" alt="Frangrance Name" />
            </div>
            <div className="text-wrap py-5 text-center">
                <span className='font-thin text-xl text-center'>Travel Perfume Atomizer</span>

                <div className="price py-3">
                    <span className='text line-through text-xs'>85$</span> <span className='text-purple-700 font-bold text-2xl'>$70.00</span>
                </div>
                <div className="rating flex justify-center gap-3">
                    {dum.map((i) => (
                        <FaStar key={i} className='text-yellow-400' />
                    ))}
                </div>
            </div>
        </div>
    )
}
