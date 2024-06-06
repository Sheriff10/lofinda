import React from 'react'
import Header from '../../ui/Header'
import Footer from '../../ui/Footer'
import Container from '../../ui/Container'
import { FaLocationPin, FaMapLocation } from 'react-icons/fa6'
import { FaEnvelope, FaMobile } from 'react-icons/fa'
import { purpleBtnClass } from '../../utils/classes'

export default function Contact() {
    return (
        <>
            <Header black={true} />
            <div className="wrap perfume-intro">
                <div className="crumbs bg-black bg-opacity-10 my-24 py-16 text-center text-3xl font-bold scroll-m-10 text-black">
                    Home / <span className='text-primary'>Contact Us</span>
                </div>
                <Container>
                    <div className="grid lg:grid-cols-2 py-10 gap-10">
                        <div className="wrap leading-10 font-thin text-2xl">
                            <h1 className='text-3xl font-bold text-black'>Contact Page</h1>

                            <div className="flex gap-3 items-center mt-10">
                                <FaLocationPin size={40} className='text-primary' /> <p>Address goes here, street, Crossroad 123.</p>
                            </div>  <br />
                            <div className="flex gap-3 items-center">
                                <FaEnvelope size={40} className='text-primary' /> <p>info@example.com / info@example.com</p>
                            </div> <br />
                            <div className="flex gap-3 items-center">
                                <FaMobile size={40} className='text-primary' /> <p>+1 35 776 859 000 / +1 35 776 859 011</p>
                            </div>
                        </div>

                        <div className="form-wrap">
                            <form className='p-10 shadow-xl bg-white lg:bg-transparent'>
                                <input type="text" className='border border-gray-800 p-3 bg-transparent mb-5 w-full' placeholder='Name'/>
                                <input type="text" className='border border-gray-800 p-3 bg-transparent mb-5 w-full' placeholder='Email' />
                                <input type="text" className='border border-gray-800 p-3 bg-transparent mb-5 w-full' placeholder='Subject' />
                                <textarea rows={6} type="text" className='border border-gray-800 p-3 bg-transparent mb-5 w-full' placeholder='Type your message...' />

                                <div className="btn-wrap">
                                    <button className={`${purpleBtnClass}`}> Send Message</button>
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
