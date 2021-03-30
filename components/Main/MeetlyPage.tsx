import React, { FC, useEffect, useRef, useState } from 'react'
import cn from 'classnames';
import Circle1 from '@assets/svg/circle.svg'
import Arrow from '@assets/svg/arrow.svg'
import style from '@assets/styles/style.module.css'
import Cart from './AllPageCart'
import AppStore from '@assets/svg/app-store.svg'

import { Flip, Fade } from 'react-awesome-reveal'
import { useIntersectionObserver } from '@lib/hooks/use-intersection-observer';

interface Props {
    backgroundLogo?: string;
}
const PageOne: FC<Props> = ({ backgroundLogo }) => {

    const [page, setPage] = useState<string>("p1")
    const [animation, setAnimation] = useState<boolean>(false)
    const [animationTwo, setAnimationTwo] = useState<boolean>(false)
    const [animationThree, setAnimationThree] = useState<boolean>(false)
    const [animationFour, setAnimationFour] = useState<boolean>(false)

    const handleClick = () => {
        let a = page
        if (a == "p1") {
            a = "p2"
        } else if (a == "p2") {
            a = "p3"
        } else if (a == "p3") {
            a = "p4"
        } else if (a == "p4") {
            a = "p1"
        }
        setPage(a)
    }

    const divOne = useRef<HTMLDivElement>(null);
    const divTwo = useRef<HTMLDivElement>(null);
    const divThree = useRef<HTMLDivElement>(null);
    const divFour = useRef<HTMLDivElement>(null);
    const divFive = useRef<HTMLDivElement>(null);

    const view = useIntersectionObserver({
        ref: divOne,
        options: { threshold: 1, triggerOnce: false },
    });
    const viewTwo = useIntersectionObserver({
        ref: divTwo,
        options: { threshold: 1, triggerOnce: false },
    });
    const viewThree = useIntersectionObserver({
        ref: divThree,
        options: { threshold: 1, triggerOnce: false },
    });
    const viewFour = useIntersectionObserver({
        ref: divFour,
        options: { threshold: 1, triggerOnce: false },
    });


    useEffect(() => {
        setTimeout(() => {
            if (view) {
                setAnimation(true)
            } else {
                setAnimation(false)
            }
        }, 500);
    }, [view])

    useEffect(() => {
        setTimeout(() => {
            if (viewTwo) {
                setAnimationTwo(true)
            } else {
                setAnimationTwo(false)
            }
        }, 500);
    }, [viewTwo])

    useEffect(() => {
        setTimeout(() => {
            if (viewThree) {
                setAnimationThree(true)
            } else {
                setAnimationThree(false)
            }
        }, 500);
    }, [viewThree])

    useEffect(() => {
        setTimeout(() => {
            if (viewFour) {
                setAnimationFour(true)
            } else {
                setAnimationFour(false)
            }
        }, 500);
    }, [viewFour])


    return (
        <div className="relative w-full max-w-8xl mx-auto  flex flex-col min-h-screen 3xl:mt-28" style={{ direction: "rtl" }}>
            {/* page 1 */}
            <div ref={divOne} className={cn(page == "p1" ? "block" : "hidden", "w-full")}>
                <div className="flex justify-around">
                    <div className={cn(" absolute left-9 lg:block md:hidden hidden -mt-4")}>
                        <div className="absolute flex lg:mt-24 lg:mr-14">
                            <p className="text-red-300 lg:text-2xl lg:ml-3 -mt-2">Keşfet</p>
                            <img className="h-6 -mt-1" src="/images/Meetly/meetly-search.png" alt="" />
                        </div>
                        <img className="w-52" src="/images/vector.png" alt="" />
                    </div>

                    <div className="absolute mt-24">
                        <Circle1 fill="#FEACAB" onClick={handleClick} className={`z-10  transition-all duration-300 delay-2000 ${animation ? "animate-ping" : "h-0"} absolute 3xl:ml-12 lg:bottom-2 md:bottom-1 bottom-0 lg:left-12 lg:ml-9 md:left-14 md:ml-2 left-10 ml-3 cursor-pointer`} />
                        <div className="lg:block md:block hidden">
                            <div className="z-10 absolute flex lg:mt-5 md:mt-3 mt-5">
                                <div className={(`absolute w-4 h-4 bg-pink-600 transition-all duration-300 delay-1300 ${animation ? "opacity-1" : "opacity-0"} rounded-full`)}></div>
                                <div className={(`border-dashed border-red-500 border-t-2 transition-all duration-300 delay-1500 ${animation ? "lg:w-24 md:w-16 lg:-mr-20 md:-mr-16" : "w-0"} mt-2`)}></div>
                                <div className={(`border-dashed border-red-500 border-r-2 transition-all duration-300 delay-1700 ${animation ? "lg:h-24 md:h-16" : "h-0"} lg:-mr-24 lg:mt-2 md:-mr-16 md:mt-2`)}></div>
                                <div className={(`border-dashed border-red-500 border-b-2  transition-all duration-300 delay-1900 ${animation ? " lg:w-20 md:w-16 lg:-mr-20  md:-mr-16" : "w-0"} lg:mt-2 md:mt-2`)}></div>
                                <Arrow fill="red" className={`h-4 w-4 absolute transform -rotate-90  transition-all duration-300 delay-2000 -mr-44 mt-24 ${animation ? "opacity-1" : "opacity-0"}`} />
                            </div>
                        </div>

                        {/* responsive */}
                        <div className="z-10 absolute mt-6 mr-3 lg:hidden md:hidden">
                            <div className={(`absolute w-3 h-3 bg-pink-600 transition-all duration-300 delay-1300 ${animation ? "opacity-1" : "opacity-0"} rounded-full`)}></div>
                            <div className={cn(`absolute border-dashed border-b-2 border-red-500 transition-all duration-300 delay-1300 ${animation ? "w-16 -mr-16" : "w-0"} mt-1`)}></div>
                            <div className={cn(`absolute border-dashed border-r-2 border-red-500 transition-all duration-300 delay-1500 ${animation ? "h-10" : "h-0"} -mr-16 mt-1`)}>
                                <Arrow fill="red" className={`h-3 w-3 absolute  transition-all duration-300 delay-1700 -mr-2 mt-9 ${animation ? "opacity-1" : "opacity-0"}`} />
                            </div>
                        </div>
                        <div className="z-10 absolute  left-14 flex  lg:mt-24 md:mt-16 mt-16">
                            <div className={(`z-10 lg:w-4 lg:h-4 md:w-4 md:h-4 w-3 h-3 bg-pink-500 transition-all duration-300 delay-700 ${animation ? "opacity-1" : "opacity-0"} rounded-full absolute`)}></div>
                            <div className={(`absolute border-dashed border-white border-b-2 transition-all duration-300 delay-700 ${animation ? "md:w-52 lg:w-52 w-24" : "w-0"} md:mt-1 lg:mt-2 mt-1`)}></div>
                            <div className={(`absolute border-dashed border-white border-l-2 transition-all duration-300 delay-900 ${animation ? "lg:h-14 md:h-7 h-8" : "h-0"} md:w-52 w-24 mt-2`)}></div>
                            <Arrow fill="#fff" className={`lg:h-4 lg:w-4 md:w-4 md:h-4 w-3 h-3 absolute  transition-all duration-300 delay-1000  ${animation ? "opacity-1" : "opacity-0"} md:mr-15 md:mt-7 lg:mt-14 mr-21 mt-8`} />
                        </div>
                        {/* card */}
                        <div className="">
                            <div className="absolute 3xl:bottom-14 3xl:mr-32 lg:bottom-20 lg:mr-28 md:-bottom-10 md:-mr-24 -bottom-28 -mr-22">
                                <Cart background={backgroundLogo}
                                    text={'Kullanıcıların istediği konumda eşleşerek sohbet edebildiği arkadaşlık uygulaması'} />
                            </div>
                        </div>
                        <Flip>
                            <img className="3xl:w-60  lg:w-52 md:w-40 w-32 -mt-4 ml-5 md:-mt-2" src="/images/Meetly/meetly1.png" alt="" />
                        </Flip>
                    </div>
                </div>
                <div className="mt-16 lg:h-96 h-32 flex">
                    <div className=" w-1/2 lg:h-96 md:h-96 h-28">
                        <div className="absolute z-10 lg:mt-1 md:mt-1 mt-24 3xl:mr-72 2xl:mr-44 xl:mr-32 md:mr-16">
                            <Fade delay={3000}>
                                <div className="lg:w-96 md:w-72 w-32">
                                    <img className="" src="/images/Meetly/meetly-1.png" alt="test" />
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className={cn(style.border, "3xl:h-92 sm:w-96 w-80 h-72 lg:h-100 md:h-96 lg:w-1/2 md:w-1/2 rounded-r-3xl flex")} style={{ backgroundColor: backgroundLogo }}>
                        <Fade delay={1500}>
                            <div className=" lg:mt-52 lg:mr-28 md:mr-36 h-20 3xl:mr-16 lg:w-52 mt-36 mr-7">
                                <p className="text-left text-white 3xl:text-lg 3xl:w-52 lg:text-sm md:text-sm text-xs w-32 mr-20">Kişiler belirledikleri filtreleme seçenekleri ile diğer kullanıcıları keşfeder</p>
                            </div>
                        </Fade>
                        <div className="3xl:mt-28">
                            <div className="lg:mt-28 md:mt-36 mt-68 absolute lg:left-20 md:left-16 xs:left-48 xm:left-48">
                                <div className={cn(`lg:mt-60 xl:-ml-10 md:mt-40 mt-7 mr-5 md:w-8 flex`)}>
                                    <p className="lg:-mr-3 md:-mr-3 -mr-3 lg:text-white md:text-white text-black lg:text-2xl md:text-lg text-sm lg:mt-2 md:mt-2 mt-2">Meetly</p>
                                    <div className="lg:w-12 xl:w-20 md:w-10 xs:w-8 xm:w-8 absolute lg:mr-16 md:mr-16 mr-10">
                                        <img className="mt-2" src="/images/meetly.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute lg:left-0 md:left-0 left-24 lg:ml-5 md:ml-5 ml-3 lg:mt-16 mt-5">
                                <div className="lg:mt-80 md:mt-80 mt-81 flex">
                                    <img src="/images/google.png" className="lg:w-25 lg:h-12 md:w-20 md:h-9 mr-2 w-20 h-10 -mt-11 lg:mt-3 md:mt-6" alt="" />
                                    <AppStore className="lg:w-28 lg:h-8  md:w-20 md:h-7 w-20 h-7 lg:mt-5 md:mt-7" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* page 2 */}
            <div ref={divTwo} className={cn(page == "p2" ? "block" : "hidden", "w-full")}>
                <div className="flex justify-around">
                    <div className={cn(" absolute left-9 lg:block md:hidden hidden -mt-4")}>
                        <div className="absolute flex lg:mt-24 lg:mr-14">
                            <p className="text-red-300 lg:text-base -mr-4 -mt-1">Sıcak eşleşme</p>
                            <img className="h-6 -mt-2 mr-1" src="/images/Meetly/meetly-restgele.png" alt="" />
                        </div>
                        <img className="w-52" src="/images/vector.png" alt="" />
                    </div>
                    <div className="absolute mt-24">
                        <Circle1 fill="#FEACAB" onClick={handleClick} className={`z-10  transition-all duration-300 delay-2000 ${animationTwo ? "animate-ping" : "h-0"} absolute 3xl:ml-16 lg:bottom-2 md:bottom-1 bottom-0 lg:left-22 lg:ml-12 md:left-22 md:ml-4 left-16 ml-5 cursor-pointer`} />
                        <div className="lg:block md:block hidden">
                            <div className="z-10 absolute flex lg:bottom-20 md:bottom-20 lg:mr-10 md:mr-5">
                                <div className={(`absolute z-10 w-4 h-4 bg-pink-500 rounded-full -bottom-2 transition-all duration-300 delay-1300 ${animationTwo ? "opacity-1" : "opacity-0"}`)}></div>
                                <div className={cn(`border-dashed border-pink-500 border-b-2 transition-all duration-300 delay-1300 ${animationTwo ? "lg:w-32 lg:-mr-32 md:w-16 md:-mr-24" : "w-0"}`)}></div>
                                <div className={cn(`border-dashed border-pink-500 border-r-2 transition-all duration-300 delay-1500 ${animationTwo ? "lg:h-16 md:h-10" : "h-0"} lg:-mr-32 md:-mr-16`)}></div>
                                <div className={cn(`border-dashed border-pink-500 border-t-2 transition-all duration-300 delay-1700 ${animationTwo ? "lg:w-16 lg:-mr-16 md:w-10 md:-mr-10" : "w-0"} `)}>
                                    <Arrow fill="red" className={`h-4 w-4 absolute flex transform -rotate-90 lg:-mt-2 md:-mt-2 lg:-mr-2 md:-mr-2 delay-1900 ${animationTwo ? "opacity-1" : "opacity-0"} transition-all duration-300`} />
                                </div>
                            </div>
                        </div>

                        {/* responsive */}
                        <div className="z-10 absolute mt-6 mr-3 lg:hidden md:hidden">
                            <div className={(`absolute w-3 h-3 bg-pink-600 transition-all duration-300 delay-1300 ${animationTwo ? "opacity-1" : "opacity-0"} rounded-full`)}></div>
                            <div className={cn(`absolute border-dashed border-b-2 border-red-500 transition-all duration-300 delay-1300 ${animationTwo ? "w-16 -mr-16" : "w-0"} mt-1`)}></div>
                            <div className={cn(`absolute border-dashed border-r-2 border-red-500 transition-all duration-300 delay-1500 ${animationTwo ? "h-10" : "h-0"} -mr-16 mt-1`)}>
                                <Arrow fill="red" className={`h-3 w-3 absolute  transition-all duration-300 delay-1700 -mr-2 mt-9 ${animationTwo ? "opacity-1" : "opacity-0"}`} />
                            </div>
                        </div>
                        {/* card */}
                        <div className="-mt-0.72">
                            <div className="absolute 3xl:bottom-14 3xl:mr-32 lg:bottom-20 lg:mr-28 md:-bottom-10 md:-mr-24 -bottom-28 -mr-22">
                                <Cart background={backgroundLogo}
                                    text={'Kullanıcıların istediği konumda eşleşerek sohbet edebildiği arkadaşlık uygulaması'} />
                            </div>
                        </div>
                        <Flip>
                            <img className="3xl:w-60  lg:w-52 md:w-40 w-32 -mt-4 ml-5 md:-mt-2" src="/images/Meetly/meetly2.png" alt="" />
                        </Flip>
                    </div>
                </div>
                <div className="mt-16 lg:h-96 h-32 flex">
                    <div className=" w-1/2">
                        <div className="absolute z-10 3xl:mr-48 2xl:mr-36 xl:mr-24 md:mt-12 mt-28 mr-6">
                            <Fade delay={3000}>
                                <div className="md:mr-32 lg:mr-32 3xl:mt-14 lg:mt-10 lg:w-48 md:w-36 w-20">
                                    <img className="" src="/images/Meetly/meetly-2.png" alt="" />
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className={cn(style.border, "3xl:h-92 sm:w-96 w-80 h-72 lg:h-100 md:h-96 lg:w-1/2 md:w-1/2 rounded-r-3xl flex")} style={{ backgroundColor: backgroundLogo }}>
                        <div className="3xl:mt-28">
                            <div className="lg:mt-28 md:mt-36 mt-68 absolute lg:left-20 md:left-16 xs:left-48 xm:left-48">
                                <div className={cn(`lg:mt-60 xl:-ml-10 md:mt-40 mt-7 mr-5 md:w-8 flex`)}>
                                    <p className="lg:-mr-3 md:-mr-3 -mr-3 lg:text-white md:text-white text-black lg:text-2xl md:text-lg text-sm lg:mt-2 md:mt-2 mt-2">Meetly</p>
                                    <div className="lg:w-12 xl:w-20 md:w-10 xs:w-8 xm:w-8 absolute lg:mr-16 md:mr-16 mr-10">
                                        <img className="mt-2" src="/images/meetly.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute lg:left-0 md:left-0 left-24 lg:ml-5 md:ml-5 ml-3 lg:mt-16 mt-7">
                                <div className="lg:mt-80 md:mt-80 mt-81 flex">
                                    <img src="/images/google.png" className="lg:w-25 lg:h-12 md:w-20 md:h-9 mr-2 w-20 h-10 -mt-11 lg:mt-3 md:mt-6" alt="" />
                                    <AppStore className="lg:w-28 lg:h-8  md:w-20 md:h-7 w-20 h-7 lg:mt-5 md:mt-7" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* page 3 */}

            <div ref={divThree} className={cn(page == "p3" ? "block" : "hidden", "w-full")}>
                <div className="flex justify-around">
                    <div className={cn(" absolute left-9 lg:block md:hidden hidden -mt-2")}>
                        <div className="absolute flex lg:mt-24 lg:mr-14">
                            <p className="text-red-300 lg:text-xl -mt-2">Mesajlar</p>
                            <img className="h-6 -mt-2 mr-1" src="/images/Meetly/meetly-chat.png" alt="" />
                        </div>
                        <img className="w-52" src="/images/vector.png" alt="" />
                    </div>
                    <div className="absolute mt-24">
                        <Circle1 fill="#FEACAB" onClick={handleClick} className={`z-10  transition-all duration-300 delay-2000 ${animationThree ? "animate-ping" : "h-0"} absolute 3xl:ml-28 lg:bottom-2 md:bottom-1 bottom-0 lg:left-22 lg:ml-23 md:left-24 md:ml-10 left-22 ml-6 cursor-pointer`} />
                        <div className="lg:block md:block hidden">
                            <div className="z-10 absolute flex lg:bottom-36 md:bottom-12 lg:mr-6 md:mr-5">
                                <div className={(`absolute w-4 h-4 transition-all duration-300 delay-1300 ${animationThree ? "opacity-1" : "opacity-0"} bg-pink-500 lg:-bottom-2 md:-bottom-2 rounded-full`)}></div>
                                <div className={cn(`border-dashed border-pink-500 border-b-2 transition-all duration-300 delay-1300 ${animationThree ? "lg:w-28 lg:-mr-28 md:w-20 md:-mr-20" : "w-0"} mt-1`)}></div>
                                <div className={cn(`border-dashed border-pink-500 border-r-2 transition-all duration-300 delay-1500 ${animationThree ? "lg:h-36 md:h-28" : "h-0"} lg:-mr-28 md:-mr-20`)}></div>
                                <div className={cn(`border-dashed border-pink-500 border-t-2 transition-all duration-300 delay-1700 ${animationThree ? "lg:w-16 lg:-mr-16 md:w-10 md:-mr-10" : "w-0"} `)}>
                                    <Arrow fill="red" className={`h-4 w-4 absolute flex transform -rotate-90 lg:-mt-2 md:-mt-2 lg:-mr-2 md:-mr-2 transition-all duration-300 delay-1900 ${animationThree ? "opacity-1" : "opacity-0"} `} />
                                </div>
                            </div>
                        </div>
                        {/* resopnsive */}
                        <div>
                            <div className="lg:hidden md:hidden">
                                <div className=" z-10 absolute flex mt-48 mr-2">
                                    <div className={(`w-3 h-3 transition-all duration-300 delay-700 ${animationThree ? "opacity-1" : "opacity-0"} bg-pink-500 rounded-full`)}></div>
                                    <div className={cn(`absolute border-dashed border-red-500 border-b-2 transition-all duration-300 dela-700 ${animationThree ? "w-16 -mr-16" : "w-0"} mt-1`)}></div>
                                    <div className={cn(`absolute border-dashed border-red-500 border-r-2 transition-all duration-300 delay-900 ${animationThree ? "h-10 -mt-9" : "h-0"} -mr-16`)}></div>
                                    <Arrow fill="red" className={(`w-3 h-3 absolute flex transform rotate-180 transition-all duration-300 delay-1000 ${animationThree ? "opacity-1" : "opacity-0"} -mr-4.5 -mt-10`)} />
                                </div>
                            </div>
                        </div>

                        <div className={(`z-10 absolute transition-all duration-300 delay-200 ${animationThree ? "opacity-1" : "opacity-0"} lg:w-4 md:w-4 md:h-4 lg:h-4 lg:block md:block hidden bg-pink-600 h-2 w-2 rounded-full lg:mt-14 md:mt-16 mt-16 left-8 lg:left-10`)}>
                            <div className="mt-2 -mr-2">
                                <div className={(`border-dashed border-white transition-all duration-300 delay-700 ${animationThree ? "lg:w-24 md:w-12" : "w-0"} border-t-2 absolute lg:mr-3 md:mr-4`)}></div>
                                <div className={(`border-dashed border-white border-r-2 transition-all duration-300 delay-700 ${animationThree ? "lg:h-28 md:h-10" : "h-0"} lg:w-20 md:w-12 lg:mr-28 md:mr-16`)}></div>
                                <div className={(`border-dashed border-white border-b-2 transition-all duration-300 delay-900 ${animationThree ? " lg:w-28 md:w-16" : "w-0"} lg:mr-28 md:mr-16`)}>
                                    <Arrow fill="#fff" className={(`w-3 h-3 lg:w-4 lg:h-4 absolute flex transform  transition-all duration-300 delay-1000 ${animationThree ? "opacity-1" : "opacity-0"} rotate-90 lg:mr-28 md:mr-16 -mt-11`)} />
                                </div>
                            </div>
                        </div>

                        {/* responsive */}
                        <div className="lg:hidden md:hidden ">
                            <div className={(`z-10 absolute transition-all duration-300 delay-700 ${animationThree ? "opacity-1" : "opacity-0"} bg-pink-600 h-3 w-3 rounded-full mt-5 left-10`)}>
                                <div className={cn(`border-dashed border-white transition-all duration-300 delay-700 ${animationThree ? "w-28" : "w-0"} border-t-2  h-6 mr-1 absolute mt-1 lg:block md:block`)}></div>
                                <div className={cn(`border-dashed border-white border-l-2 transition-all duration-300 delay-900 ${animationThree ? "h-5" : "h-0"} lg:w-52 md:w-53 w-28 lg:mr-5 lg:mt-1 md:mt-1 mt-1 mr-1`)}>
                                    <Arrow fill="#fff" className={cn(`transition-all duration-300 delay-1000 ${animationThree ? "opacity-1" : "opacity-0"} w-3 h-3 absolute flex mt-5 mr-25`)} />
                                </div>
                            </div>
                        </div>
                        {/* card */}
                        <div className="-mt-0.72">
                            <div className="absolute 3xl:bottom-14 3xl:mr-32 lg:bottom-20 lg:mr-28 md:-bottom-10 md:-mr-24 -bottom-28 -mr-22">
                                <Cart background={backgroundLogo}
                                    text={'Kullanıcıların istediği konumda eşleşerek sohbet edebildiği arkadaşlık uygulaması'} />
                            </div>
                        </div>
                        <Flip>
                            <img className="3xl:w-60  lg:w-52 md:w-40 w-32 -mt-4 ml-5 md:-mt-2" src="/images/Meetly/meetly3.png" alt="" />
                        </Flip>

                    </div>
                </div>
                <div className="mt-16 flex">
                    <div className=" w-1/2">
                        <div className="absolute 3xl:mr-60 2xl:mr-52 xl:mr-36 lg:mr-16 mr-2">
                            <Fade delay={3000}>
                                <div className="lg:mt-10 md:-mt-6">
                                    <img className="3xl:w-80 lg:w-64 md:w-72 w-28" src="/images/Meetly/meetly-3.png" alt="" />
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className={cn(style.border, "3xl:h-92 sm:w-96 w-80 h-72 lg:h-100 md:h-96 lg:w-1/2 md:w-1/2 rounded-r-3xl flex")} style={{ backgroundColor: backgroundLogo }}>
                        <Fade delay={1700}>
                            <div className="lg:hidden md:hidden">
                                <div className=" lg:mt-52 lg:mr-36 md:mr-36 h-20 lg:w-52 mt-28 mr-5">
                                    <p className="text-left text-white lg:text-sm md:text-sm text-xs w-32 mr-20">Kullanıcılar yeni eşleşmelerini burada görür ve onlara mesaj atabilir.   </p>
                                </div>
                            </div>
                        </Fade>
                        <Fade delay={1700}>
                            <div className="lg:block md:block hidden">
                                <div className=" lg:mt-48 lg:mr-72 md:mr-40 md:mt-32 h-20 lg:w-52 mt-20">
                                    <p className="text-left text-white 3xl:text-lg  3xl:w-60 lg:text-sm md:text-sm text-xs w-32 mr-20">Kullanıcılar yeni eşleşmelerini burada görür ve onlara mesaj atabilir.   </p>
                                </div>
                            </div>
                        </Fade>
                        <div className="3xl:mt-28">
                            <div className="lg:mt-28 md:mt-36 mt-68 absolute lg:left-20 md:left-16 xs:left-48 xm:left-48">
                                <div className={cn(`lg:mt-60 xl:-ml-10 md:mt-40 mt-7 mr-5 md:w-8 flex`)}>
                                    <p className="lg:-mr-3 md:-mr-3 -mr-3 lg:text-white md:text-white text-black lg:text-2xl md:text-lg text-sm lg:mt-2 md:mt-2 mt-2">Meetly</p>
                                    <div className="lg:w-12 xl:w-20 md:w-10 xs:w-8 xm:w-8 absolute lg:mr-16 md:mr-16 mr-10">
                                        <img className="mt-2" src="/images/meetly.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute lg:left-0 md:left-0 left-24 lg:ml-5 md:ml-5 ml-3 lg:mt-16 mt-5">
                                <div className="lg:mt-80 md:mt-80 mt-81 flex">
                                    <img src="/images/google.png" className="lg:w-25 lg:h-12 md:w-20 md:h-9 mr-2 w-20 h-10 -mt-11 lg:mt-3 md:mt-6" alt="" />
                                    <AppStore className="lg:w-28 lg:h-8  md:w-20 md:h-7 w-20 h-7 lg:mt-5 md:mt-7" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* page 4 */}
            <div ref={divFour} className={cn(page == "p4" ? "block" : "hidden", "w-full")}>
                <div className="flex justify-around">
                    <div className={cn(" absolute left-9 lg:block md:hidden hidden -mt-4")}>
                        <div className="absolute flex lg:mt-24 lg:mr-16">
                            <p className="text-red-300 lg:text-2xl -mt-2">Profile</p>
                            <img className="h-6 -mt-2 mr-1" src="/images/Meetly/meetly-profile.png" alt="" />
                        </div>
                        <img className="w-52" src="/images/vector.png" alt="" />
                    </div>
                    <div className="absolute mt-24">
                        <Circle1 fill="#FEACAB" onClick={handleClick} className={`z-10  transition-all duration-300 delay-2000 ${animationFour ? "animate-ping" : "h-0"} absolute lg:bottom-2 md:bottom-1 bottom-0 lg:left-8 lg:ml-4 md:left-7 md:ml-2 left-6 ml-1 cursor-pointer`} />
                        <div className="absolute mt-24 lg:block md:block hidden">
                            <div className="z-10 absolute lg:mt-24 lg:mr-5 md:mt-14 md:mr-14 flex">
                                <div className={(`absolute w-4 h-4 bg-pink-500 rounded-full  transition-all duration-300 delay-1300 ${animationFour ? "opacity-1" : "opacity-0"}`)}></div>
                                <div className={(`absolute border-dashed border-b-2  transition-all duration-300 delay-1300 ${animationFour ? "lg:w-48 md:w-40 lg:-mr-48 md:-mr-40" : "opacity-0"} border-red-500 mt-2`)}></div>
                                <Arrow fill="red" className={`w-4 h-4 absolute transform -rotate-90  transition-all duration-300 delay-1500  ${animationFour ? "opacity-1" : "opacity-0"} lg:-mr-52 lg:mt-0.5 md:-mr-44 md:mt-0.5`} />
                            </div>
                        </div>
                        {/* responsive */}
                        <div className="z-10 absolute mt-16 mr-3 lg:hidden md:hidden">
                            <div className={(`absolute w-3 h-3 bg-pink-600 transition-all duration-300 delay-1300 ${animationFour ? "opacity-1" : "opacity-0"} rounded-full`)}></div>
                            <div className={cn(`absolute border-dashed border-b-2 border-red-500 transition-all duration-300 delay-1300 ${animationFour ? "w-16 -mr-16" : "w-0"} mt-1`)}></div>
                            <div className={cn(`absolute border-dashed border-r-2 border-red-500 transition-all duration-300 delay-1500 ${animationFour ? "h-10" : "h-0"} -mr-16 mt-1`)}>
                                <Arrow fill="red" className={`h-3 w-3 absolute  transition-all duration-300 delay-1700 -mr-2 mt-9 ${animationFour ? "opacity-1" : "opacity-0"}`} />
                            </div>
                        </div>
                        {/* responsive */}
                        <div className="z-10 absolute  left-14 flex mt-16 lg:hidden md:hidden">
                            <div className={(`z-10 w-3 h-3 bg-pink-500 transition-all duration-300 delay-700 ${animationFour ? "opacity-1" : "opacity-0"} rounded-full absolute`)}></div>
                            <div className={(`absolute border-dashed border-white border-b-2 transition-all duration-300 dela-700 ${animationFour ? "w-24" : "w-0"} mt-1`)}></div>
                            <div className={(`absolute border-dashed border-white border-l-2 transition-all duration-300 delay-900 ${animationFour ? "h-8" : "h-0"} w-24 mt-1`)}></div>
                            <Arrow fill="#fff" className={`w-3 h-3 absolute  transition-all duration-300 delay-1000  ${animationFour ? "opacity-1" : "opacity-0"} mr-21 mt-7`} />
                        </div>

                        <div className="z-10 absolute lg:block md:block hidden mr-48">
                            <div className="left-14 flex lg:mt-64 md:mt-52 md:-mr-10">
                                <div className={(`z-10 w-4 h-4 bg-pink-500 transition-all duration-300 delay-700 ${animationFour ? "opacity-1" : "opacity-0"} rounded-full absolute -mt-1`)}></div>
                                <div className={(`absolute border-dashed border-white border-b-2 transition-all duration-300 delay-700 ${animationFour ? "md:w-36 lg:w-40" : "w-0"} md:mt-1 lg:mt-1 mt-2`)}></div>
                                <Arrow fill="white" className={(`lg:w-4 lg:h-4 md:w-4 md:h-4 absolute transition-all duration-300 delay-900 ${animationFour ? "opacity-1" : "opacity-0"} transform rotate-90 lg:mr-40 md:mr-36 md:-mt-0.5 lg:-mt-0.5`)} />
                            </div>
                        </div>
                        {/* card */}
                        <div className="-mt-0.72">
                            <div className="absolute 3xl:bottom-14 3xl:mr-32 lg:bottom-20 lg:mr-28 md:-bottom-10 md:-mr-24 -bottom-28 -mr-22">
                                <Cart background={backgroundLogo}
                                    text={'Kullanıcıların istediği konumda eşleşerek sohbet edebildiği arkadaşlık uygulaması'} />
                            </div>
                        </div>
                        <Flip>
                            <img className="3xl:w-60  lg:w-52 md:w-40 w-32 -mt-4 ml-5 md:-mt-2" src="/images/Meetly/meetly4.png" alt="" />
                        </Flip>

                    </div>
                </div>
                <div className="mt-16 lg:h-96 h-32 flex">
                    <div className=" w-1/2 lg:h-96 md:h-96 h-28">
                        <div className="absolute 3xl:mr-72 2xl:mr-52 xl:mr-36 lg:mr-16">
                            <Fade delay={3000}>
                                <div className=" lg:mt-52 md:mt-44 h-20 mt-36 -mr-24 ">
                                    <p className="text-left 3xl:text-lg 3xl:w-60 lg:w-60 lg:text-sm md:text-sm text-xs w-32 mr-20">Kullanıcılar profil sekmesinden kişisel bilgilerini düzenler ve diğer kullanıcılarla olan etkileşimlerini takip edebilir.  </p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className={cn(style.border, "3xl:h-92 sm:w-96 w-80 h-72 lg:h-100 md:h-96 lg:w-1/2 md:w-1/2 rounded-r-3xl flex")} style={{ backgroundColor: backgroundLogo }}>
                        <Fade delay={1500}>
                            <div className=" lg:mt-64 md:mt-44 lg:mr-60 md:mr-48 h-20  mt-36 mr-5">
                                <p className="text-left text-white 3xl:text-lg 3xl:w-60 lg:w-60 lg:text-sm md:text-sm text-xs w-32 mr-20">Premium üyeliği aktif eden kullanıcılar daha fazla özelliğe erişebilir.   </p>
                            </div>
                        </Fade>
                        <div className="3xl:mt-28">
                            <div className="lg:mt-28 md:mt-36 mt-68 absolute lg:left-20 md:left-16 xs:left-48 xm:left-48">
                                <div className={cn(`lg:mt-60 xl:-ml-10 md:mt-40 mt-7 mr-5 md:w-8 flex`)}>
                                    <p className="lg:-mr-3 md:-mr-3 -mr-3 lg:text-white md:text-white text-black lg:text-2xl md:text-lg text-sm lg:mt-2 md:mt-2 mt-2">Meetly</p>
                                    <div className="lg:w-12 xl:w-20 md:w-10 xs:w-8 xm:w-8 absolute lg:mr-16 md:mr-16 mr-10">
                                        <img className="mt-2" src="/images/meetly.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute lg:left-0 md:left-0 left-24 lg:ml-5 md:ml-5 ml-3 lg:mt-16 mt-5">
                                <div className="lg:mt-80 md:mt-80 mt-81 flex">
                                    <img src="/images/google.png" className="lg:w-25 lg:h-12 md:w-20 md:h-9 mr-2 w-20 h-10 -mt-11 lg:mt-3 md:mt-6" alt="" />
                                    <AppStore className="lg:w-28 lg:h-8  md:w-20 md:h-7 w-20 h-7 lg:mt-5 md:mt-7" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}


export default PageOne
