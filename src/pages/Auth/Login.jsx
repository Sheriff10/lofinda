import React from 'react'
import Header from '../../ui/Header'
import Footer from '../../ui/Footer'
import { purpleBtnClass } from '../../utils/classes'
import Container from '../../ui/Container'
import { useNavigate } from 'react-router-dom'

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


                                <div className="inputs-wrap">
                                    <div className="wrap">
                                        <label className='font-bold text-md ml-2'>Email</label> <br />
                                        <input type="text" className='mt-1 bg-gray-100 w-full  border-0 p-4 rounded-full' placeholder='John.doe@gmail.com' />
                                    </div>
                                    <br />
                                    <div className="wrap">
                                        <label className='font-bold text-md ml-2'>Password</label> <br />
                                        <input type="password" className='mt-1 bg-gray-100 w-full  border-0 p-4 rounded-full' placeholder='xxxxxxxxxxx' />
                                    </div>
                                </div>

                                <div className="btn-wrap mt-5">
                                    <button className={`${purpleBtnClass} shadow-none w-full text-sm mb-2`}>Login</button>
                                    <p className='text-black text-right'> Don’t have an account? <span className='text-primary font-bold cursor-pointer'  onClick={() => navi('/auth/signup')}>Sign Up</span></p>
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
