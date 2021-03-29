import React, { FC } from 'react'
import Improver from '@assets/svg/form1.svg'

interface Props {
    backgroundFooter?: string;
}
const Footer: FC<Props> = ({ backgroundFooter }) => {
    return (
        <>
            <div>

                <footer className="footer lg:h-60 md:h-72 h-screen bg-white relative pt-1 p-3" style={{ backgroundColor: backgroundFooter }}>
                    <div className="container mx-auto px-6">
                        <div className="sm:flex sm:mt-8">
                            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                                <div className="flex flex-col">
                                    <div className="text-xl text-gray-700 uppercase mb-2">
                                        <Improver />
                                    </div>
                                    <div className="my-1">
                                        <p className="text-white lg:text-sm text-md">Address: Gümüşpala Mh, Manolya Sk, No: 2 / 1A D: 1 Avcılar / İstanbul</p>
                                    </div>
                                    <div className="my-1">
                                        <p className="text-white lg:text-sm text-md"> Phone: +90 850 840 3346</p>
                                    </div>
                                    <div className="my-1">
                                        <p className="text-white lg:text-sm"> Email: info@imporver.com.tr</p>
                                    </div>
                                    <div className="my-1">
                                        <p className="text-white lg:text-sm "> © 2020 Improver, All rights reserved. Terms & conditions | Privacy Policy</p>
                                    </div>
                                </div>
                                <hr className="bg-white" />
                                <div className="flex flex-col">
                                    <div className="text-xl text-white uppercase mt-4 md:mt-0 mb-2">OUR SERVICES</div>
                                    <div className="my-2">
                                        <p className="text-white">Application Software</p>
                                    </div>
                                    <div className="my-2">
                                        <p className="text-white">  Web Software</p>
                                    </div>
                                    <div className="my-2">
                                        <p className="text-white"> Seo / Aso Optimization</p>
                                    </div>
                                </div>
                                <hr className="bg-white" />
                                <div className="flex flex-col">
                                    <div className="text-xl text-white uppercase mt-4 md:mt-0 mb-2">CONTACT</div>
                                    <div className="my-1">
                                        <p className="text-white">Fast Form</p>
                                    </div>
                                    <div className="my-1">
                                        <p className="text-white">  Career</p>
                                    </div>
                                    <div className="my-1">
                                        <p className="text-white">  Contact Us</p>
                                    </div>
                                    <div className="my-1">
                                        <p className="text-white text-sm"> About Us</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer;
