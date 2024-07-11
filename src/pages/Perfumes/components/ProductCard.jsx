import React, { useContext, useEffect, useState } from 'react'
import { FaCheckSquare, FaStar } from 'react-icons/fa'
import { purpleBtnClass } from '../../../utils/classes'
import { useNavigate } from 'react-router-dom'
import { ShoppingCartContext } from '../../../context/ShoppingCartContext'
import { addItem } from '../../../context/shoppingCartReducer'

export default function ProductCard({ _id, img, name, description, price }) {
    const navi = useNavigate()
    const [btnText, setBtnText] = useState("Add to cart")

    const { state, dispatch } = useContext(ShoppingCartContext)
    useEffect(() => {
        console.log(state.total)
    }, [state])
    const handleCart = () => {
        const item = {
            id: state.items.length, _id, img, name, description, price: parseInt(price), quantity: 1
        }
        console.log(state)
        dispatch(addItem(item))
        toggleBtnText()
    }

    const toggleBtnText = () => {
        setBtnText(<FaCheckSquare size={"22px"} />)

        setTimeout(() => {
            setBtnText("Add to cart")
        }, 500);
    }

    return (
        <div className="card hover:shadow-lg border p-4 rounded-lg relative">
            <div className="card-heading flex justify-between items-center">
                <small className='text-primary'></small>
                <div className="wrap flex absolute bg-white  top-[20px] right-[20px] rounded-xl transition-all hover:bg-primary hover:text-white bg-opacity-90 cursor-pointer">
                    <span className='p-3 rounded-lg shadow-md'><FaStar /></span>
                </div>
            </div>

            <div className="img-wrap">
                <img src={img} alt="Product Name" className='mx-auto' />
            </div>

            <div className="text-wrap">
                <div className="heading mb-3 mt-10">
                    <h1 className='text-md font-light'>{name}</h1>
                    <span className='text-black font-bold'>{price}$</span>
                </div>
                <div className="btn-wrap">
                    <button className={` text-primary p-3 px-5 rounded-lg border-primary border hover:bg-primary hover:text-white transition-all bg-white w-full mt-3 flex justify-center`} onClick={handleCart}>{btnText}</button>
                </div>
            </div>
        </div>
    )
}
