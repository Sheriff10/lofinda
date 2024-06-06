import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

export default function Header({ black }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigation = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Perfumes", href: "/perfumes" },
        { name: "Contact Us", href: "/contact" },
    ];
    const navi = useNavigate();

    return (
        <header className="absolute inset-x-0 top-0 z-50 bg-black bg-opacity-10 backdrop-blur-md  text-gray-50 shadow">
            <nav
                className="flex items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            className="h-8 w-auto"
                            src="/asset/logo.png"
                            alt="Lofinda"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-50"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            className={`text-sm font-semibold leading-6 ${black ? 'text-black' : "text-gray-50"}`}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
                    <a
                        href="#"
                        className="text-sm bg-primary p-3 px-6 rounded-full font-semibold leading-6 text-white btn bg-pri"
                        onClick={() => navi("/auth/login")}
                    >
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                    <a
                        href="#"
                        className="text-sm bg-secondary p-3 px-6 rounded-full flex items-center gap-2 font-semibold leading-6 text-white btn bg-pri"
                        onClick={() => navi("/auth/signup")}
                    >
                        Signup <span aria-hidden="true"><FaUser /></span>
                    </a>
                </div>
            </nav>

            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black bg-opacity-50 backdrop-blur-xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-50/10">
                    <div className="flex items-center justify-between">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="/asset/logo.png"
                                alt="Lofinda"
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:text-gray-50 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 btn bg-primary text-center p-3 rounded-full px-6  block py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                                    onClick={() => navi("/auth/login")}
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}