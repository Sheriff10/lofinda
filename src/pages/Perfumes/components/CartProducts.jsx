import React from 'react'
import { FaTrash } from 'react-icons/fa'

export default function CartProducts({ name, sub_name, price }) {
    return (
        <div className="box grid grid-cols-3 items-center border-b-2 py-5">
            <div className="img-wrap">
                <img src="/asset/perfume.png" alt="Perfume" />
            </div>
            <div className="col-span-2 flex flex-col justify-between">
                <div className="flex justify-between items-center mb-10">
                    <div className="wrap">
                        <p className='font-bold'>{name}</p>
                        <span>{sub_name}</span>
                    </div>

                    <div className="wrap flex items-center gap-2 text-primary">
                        <span>Remove </span> <FaTrash />
                    </div>
                </div>

                <div className="wrap flex justify-between items-center">
                    <p>{price}</p>

                    <div className="wrap flex items-center">
                        <span className='bg-primary-light flex rounded-full p-2 px-[14px] text-sm cursor-pointer'>-</span>
                        <input type="text" className='text-sm border-0 p-2 bg-transparent w-[30px] text-center' value={1} />
                        <span className='bg-primary-light flex rounded-full p-2 px-[14px] text-sm cursor-pointer'>+</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
