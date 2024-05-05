import React from 'react'
import { FaStar } from 'react-icons/fa'
import { purpleBtnClass } from '../../../utils/classes'
import { useNavigate } from 'react-router-dom'

export default function ProductCard() {
    const navi = useNavigate()
    return (
        <div className="card shadow-lg border p-4 rounded-lg">
            <div className="card-heading flex justify-between items-center">
                <small className='text-primary'>BODY-MIDST</small>
                <div className="wrap flex">
                    <span className='p-3 rounded-lg shadow-md'><FaStar /></span>
                </div>
            </div>

            <div className="img-wrap">
                <img src="/asset/perfume.png" alt="Product Name" className='mx-auto' />
            </div>

            <div className="text-wrap">
                <div className="heading flex justify-between items-center mb-3">
                    <h1 className='text-xl font-bold'>Waves</h1> <span className='text-primary-light'>500$</span>
                </div>
                <span>Ocean breeze themed perfume with slight hint of coconut</span>
                <div className="btn-wrap">
                    <button className={`${purpleBtnClass} text-white w-full mt-3`} onClick={() => navi('/perfumes/detail')}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
