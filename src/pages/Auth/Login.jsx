import React from 'react'
import Header from '../../ui/Header'
import Footer from '../../ui/Footer'
import { purpleBtnClass } from '../../utils/classes'
import Container from '../../ui/Container'
import { useNavigate } from 'react-router-dom'
import { FaClipboard, FaEnvelope, FaLock, FaUser } from 'react-icons/fa'

export default function Login() {
    const navi = useNavigate()
    return (
        <>
            <Header black={true} />
            <div className="wrap">
                <Container>
                    <div className="py-32 grid lg:grid-cols-2 gap-12 items-center">
                        <div className="img-wrap rounded-3xl overflow-clip hidden lg:block">
                            <img src="/asset/auth-img.png" alt="Login" className='h-[80vh]' />
                        </div>
                        <div className="form-wrap">
                            <form>
                                <div className="header text-2xl font-bold text-center">
                                    <h1>Log In to <span className='text-primary'>Lofinda.ng</span></h1>
                                    <div className="lg:flex items-center gap-8 mt-10">
                                        <button className={`${purpleBtnClass} shadow-none w-full flex justify-center gap-4 items-center text-sm mb-4 lg:mb-auto`}>
                                            <img src="/asset/google.png" alt="Google" /> Login in with Google
                                        </button>
                                        <button className={`${purpleBtnClass} shadow-none w-full flex justify-center gap-4 items-center text-sm`}>
                                            <img src="/asset/apple.png" alt="Google" /> Login in with Apple
                                        </button>
                                    </div>
                                </div>

                                <div className="wrap text-center text-black font-bold relative bg-red-100 my-10 flex items-center justify-center">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <hr className="w-full border-t border-black absolute" />
                                        <span className='bg-white px-2 z-10'>or</span>
                                    </div>
                                </div>


                                <div className="rounded-3xl text-sm bg-primary bg-opacity-10 p-10 mx-auto flex flex-col gap-5 ">
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
                                                placeholder="abc@gmail.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="input-wrap">
                                        <label>Password</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                                <FaLock className='text-primary' />
                                            </div>
                                            <input
                                                type="Password"
                                                id="phone-input"
                                                aria-describedby="helper-text-explanation"
                                                className="bg-gray-50 border text-gray-800 text-sm rounded-full block w-full ps-10 p-3 dark:bg-transparent border-primary placeholder-gray-400 focus:scale-110 transition-all focus:bg-primary focus:text-white outline-none"
                                                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                placeholder="Enter Password"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="btn-wrap mt-5">
                                        <button className={`${purpleBtnClass} shadow-none w-full text-sm mb-2`}>Login</button>
                                        <p className='text-black text-right'> Don’t have an account? <span className='text-primary font-bold cursor-pointer' onClick={() => navi('/auth/signup')}>Sign Up</span></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    )
}
