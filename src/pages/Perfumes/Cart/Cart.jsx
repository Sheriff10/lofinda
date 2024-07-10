import React, { useContext } from 'react'
import Header from '../../../ui/Header'
import { FaArrowLeft, FaTrash } from 'react-icons/fa'
import { whiteBtnClass } from '../../../utils/classes'
import Container from '../../../ui/Container'
import CartProducts from '../components/CartProducts'
import Footer from '../../../ui/Footer'
import { ShoppingCartContext } from '../../../context/ShoppingCartContext'

export default function Cart() {
    const dum = [1, 2, 3,]
    const { state, dispatch } = useContext(ShoppingCartContext)
    return (
        <>
            <Header black={true} />
            <div className="cart py-32">
                <Container>
                    <div className="navigator flex gap-3 items-center">
                        <FaArrowLeft /> <span>Back to store</span>
                    </div>
                    <div className="header text-primary font-bold text-2xl">
                        <h2>My Shopping Cart</h2>
                    </div>
                </Container>

                {/* Product Display */}
                <Container>
                    <div className="grid lg:grid-cols-2 gap-5 mt-10">
                        <div className="wrap">
                            {state.items?.map((prd, index) => (
                                <CartProducts id={prd.id} _id={prd._id} name={prd.name} sub_name={prd.description} price={prd.price} img={prd.img} key={index} />
                            ))}
                        </div>
                        <div className="wrap bg-primary p-10 text-white">
                            <h1 className='text-2xl font-bold mb-10'>My Order</h1>

                            <div className="wrap mb-5">
                                <ul className='leading-9'>
                                    <li className='flex justify-between items-center'><span>1x The Gentleman</span> <span>#20,000</span></li>
                                    <li className='flex justify-between items-center'><span>1x The Sea</span> <span>#20,000</span></li>
                                    <li className='flex justify-between items-center'><span>1x The Tempest</span> <span>#20,000</span></li>
                                </ul>
                            </div>

                            <div className="wrap border-t border-y-gray-300  border-opacity-30 py-8">
                                <div className="flex rounded-full overflow-clip justify-between border">
                                    <input type="text" placeholder='Enter promo code' className='w-full p-2 bg-transparent' /> <button className={`${whiteBtnClass}`}> Redeem</button>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mb-5">
                                <span className='font-bold text-lg text-white'>Total</span>
                                <span className='font-bold text-2xl text-white'>#45,000</span>
                            </div>
                            <div className="btn-wrap">
                                <button className={`${whiteBtnClass} w-full text-sm`}> Check Out</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    )
}
