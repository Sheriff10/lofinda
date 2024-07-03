import React from 'react'
import Header from '../../../ui/Header'
import { FaClipboard, FaEnvelope, FaHome, FaUser } from 'react-icons/fa'
import { purpleBtnClass } from '../../../utils/classes'
import Footer from '../../../ui/Footer'

export default function Profile() {
    return (
        <div className="wrap mt-[130px]">
            <Header black={true}/>

            <div className="profile-wrap py-10">
                <div className="w-1/2 rounded-3xl text-sm bg-primary bg-opacity-10 p-10 mx-auto flex flex-col gap-5 ">

                    <div className="input-wrap">
                        <label> Username</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                <FaUser className='text-primary' />
                            </div>
                            <input
                                type="text"
                                id="phone-input"
                                aria-describedby="helper-text-explanation"
                                className="bg-gray-50 border text-gray-800 text-sm rounded-full block w-full ps-10 p-3 dark:bg-transparent border-primary placeholder-gray-400 focus:scale-110 transition-all focus:bg-primary focus:text-white outline-none"
                                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                placeholder="First Name"
                                required
                            />
                        </div>
                    </div>

                    <div className="input-wrap">
                        <label> Email</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                <FaEnvelope className='text-primary' />
                            </div>
                            <input
                                type="text"
                                id="phone-input"
                                aria-describedby="helper-text-explanation"
                                className="bg-gray-50 border text-gray-800 text-sm rounded-full block w-full ps-10 p-3 dark:bg-transparent border-primary placeholder-gray-400 focus:scale-110 transition-all focus:bg-primary focus:text-white outline-none"
                                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                placeholder="First Name"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <div className="input-wrap">
                            <label> Firstname</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                    <FaClipboard className='text-primary' />
                                </div>
                                <input
                                    type="text"
                                    id="phone-input"
                                    aria-describedby="helper-text-explanation"
                                    className="bg-gray-50 border text-gray-800 text-sm rounded-full block w-full ps-10 p-3 dark:bg-transparent border-primary placeholder-gray-400 focus:scale-110 transition-all focus:bg-primary focus:text-white outline-none "
                                    // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    placeholder="First Name"
                                    required
                                />
                            </div>
                        </div>
                        <div className="input-wrap">
                            <label> Lastname</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                    <FaClipboard className='text-primary' />
                                </div>
                                <input
                                    type="text"
                                    id="phone-input"
                                    aria-describedby="helper-text-explanation"
                                    className="bg-gray-50 border text-gray-800 text-sm rounded-full block w-full ps-10 p-3 dark:bg-transparent border-primary placeholder-gray-400 focus:scale-110 transition-all focus:bg-primary focus:text-white outline-none"
                                    // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    placeholder="Last Name"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="input-wrap">
                        <label> Address 1</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                <FaHome className='text-primary' />
                            </div>
                            <input
                                type="text"
                                id="phone-input"
                                aria-describedby="helper-text-explanation"
                                className="bg-gray-50 border text-gray-800 text-sm rounded-full block w-full ps-10 p-3 dark:bg-transparent border-primary placeholder-gray-400 focus:scale-110 transition-all focus:bg-primary focus:text-white outline-none"
                                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                placeholder="First Name"
                                required
                            />
                        </div>
                    </div>
                    <div className="input-wrap">
                        <label> Adress 2</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                <FaHome className='text-primary' />
                            </div>
                            <input
                                type="text"
                                id="phone-input"
                                aria-describedby="helper-text-explanation"
                                className="bg-gray-50 border text-gray-800 text-sm rounded-full block w-full ps-10 p-3 dark:bg-transparent border-primary placeholder-gray-400 focus:scale-110 transition-all focus:bg-primary focus:text-white outline-none"
                                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                placeholder="First Name"
                                required
                            />
                        </div>
                    </div>

                    <div className="btn-wrap">
                        <button className={`${purpleBtnClass} hover:scale-110 transition-all hover:bg-opacity-85`}> Save</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
