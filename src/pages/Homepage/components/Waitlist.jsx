import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { BarLoader } from 'react-spinners'
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa'
import { purpleBtnClass } from '../../../utils/classes'
import apiRequest from '../../../utils/api-request'

export default function Waitlist() {
    const [open, setOpen] = useState(true)
    const [loading, setLoading] = useState(false)

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone_number, setPhone_number] = useState('')

    const cancelButtonRef = useRef(null)
    // sZ5IjN9jfHeWrKR5   lofinda mongodb-password

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            const data = { firstname, lastname, email, phone_number }
            const response = await apiRequest('/api/waitlist', 'POST', data)
            console.log(response)
        } catch (error) {
            console.log(error)
            alert("Internal Server Error")
        } finally { setLoading(false) }
    }
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog className="relative z-100" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed  inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-[100] w-screen backdrop-blur-lg overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 mt-14">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 ">
                                <div className="bg-white py-10">
                                    <div className="wrap">
                                        <div className="img-wrap">
                                            <img src="/asset/waitlist-img.png" alt="Waitlist" className='mx-auto' />
                                        </div>
                                        <div className="form-wrap p-5">
                                            <div className="header text-center mb-5">
                                                <h3 className='font-bold text-xl'>Join the Waitlist</h3>
                                                <span className='text-sm'>You believe in our dreams too? Be one of the first to know when we go live and fully operational.</span>
                                            </div>

                                            <form className="input-wrp" onSubmit={handleSubmit}>
                                                <div className="grid lg:grid-cols-2 gap-5">
                                                    <div className="relative">
                                                        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                                            <FaUser className='text-primary' />
                                                        </div>
                                                        <input
                                                            type="text"
                                                            aria-describedby="helper-text-explanation"
                                                            className="bg-gray-50 border text-gray-800 text-sm rounded-full block w-full ps-10 p-3 dark:bg-transparent border-primary placeholder-gray-400"
                                                            placeholder="First Name"
                                                            required
                                                            value={firstname}
                                                            onChange={(e) => setFirstname(e.target.value)}
                                                        />
                                                    </div>

                                                    <div className="relative">
                                                        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                                            <FaUser className='text-primary' />
                                                        </div>
                                                        <input
                                                            type="text"
                                                            aria-describedby="helper-text-explanation"
                                                            className="bg-gray-50 border text-gray-800 text-sm rounded-full block w-full ps-10 p-3 dark:bg-transparent border-primary placeholder-gray-400"
                                                            placeholder="Last Name"
                                                            required
                                                            value={lastname}
                                                            onChange={(e) => setLastname(e.target.value)}
                                                        />
                                                    </div>

                                                    <div className="relative">
                                                        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                                            <FaEnvelope className='text-primary' />
                                                        </div>
                                                        <input
                                                            type="email"
                                                            aria-describedby="helper-text-explanation"
                                                            className="bg-gray-50 border text-gray-800 text-sm rounded-full block w-full ps-10 p-3 dark:bg-transparent border-primary placeholder-gray-400"
                                                            placeholder="Email"
                                                            required
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="relative">
                                                        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                                            <FaPhone className='text-primary' />
                                                        </div>
                                                        <input
                                                            type="text"
                                                            aria-describedby="helper-text-explanation"
                                                            className="bg-gray-50 border text-gray-800 text-sm rounded-full block w-full ps-10 p-3 dark:bg-transparent border-primary placeholder-gray-400"
                                                            placeholder="Phone Number"
                                                            required
                                                            value={phone_number}
                                                            onChange={(e) => setPhone_number(e.target.value)}
                                                        />
                                                    </div>

                                                    <div className="col-span-2">
                                                        <button className={`${purpleBtnClass} w-full flex justify-center`} disabled={loading}> {loading ? <BarLoader color="#36d7b7" /> : "Submit"} </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                {/* BTN SETCTION */}
                                {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                        onClick={() => setOpen(false)}
                                    >
                                        Deactivate
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div> */}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
