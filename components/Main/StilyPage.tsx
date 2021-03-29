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
const PageThre: FC<Props> = ({ backgroundLogo }) => {

    const [page, setPage] = useState<string>("p1")
    const [animation, setAnimation] = useState<boolean>(false)
    const [animationTwo, setAnimationTwo] = useState<boolean>(false)
    const [animationThree, setAnimationThree] = useState<boolean>(false)
    const [animationFour, setAnimationFour] = useState<boolean>(false)
    const [animationFive, setAnimationFive] = useState<boolean>(false)

    const handleClick = () => {
        let a = page
        if (a == "p1") {
            a = "p2"
        } else if (a == "p2") {
            a = "p3"
        } else if (a == "p3") {
            a = "p4"
        } else if (a == "p4") {
            a = "p5"
        } else if (a == "p5") {
            a = "p1"
        } else {

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
    const viewFive = useIntersectionObserver({
        ref: divFive,
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

    useEffect(() => {
        setTimeout(() => {
            if (viewFive) {
                setAnimationFive(true)
            } else {
                setAnimationFive(false)
            }
        }, 500);
    }, [viewFive])

    return (
        <div className="relative w-full max-w-8xl mx-auto  flex flex-col min-h-screen 3xl:mt-28" style={{ direction: "rtl" }}>
            {/* page 1 */}
            <div ref={divOne} className={cn(page == "p1" ? "block" : "hidden", "w-full")}>
                <div className="flex justify-around">
                    <div className={cn(" absolute left-9 lg:block md:hidden hidden -mt-4")}>
                        <div className="absolute flex lg:mt-24 lg:mr-14">
                            <p className="text-white lg:text-2xl lg:ml-3 -mt-2">Home</p>
                            <img className="h-7 -mt-2" src="/images/evet/home.png" alt="" />
                        </div>
                        <img className="w-52" src="/images/vector.png" alt="" />
                    </div>

                    <div className="absolute mt-24">
                        <Circle1 fill="#35028E" onClick={handleClick} className={`z-10  transition-all duration-300 delay-2000 ${animation ? "animate-ping" : "h-0"} absolute 3xl:ml-9 lg:bottom-3 md:bottom-2 bottom-1 lg:left-12 lg:ml-6 md:left-14 md:ml-0 left-12 cursor-pointer`} />
                        <div className="lg:block md:block hidden">
                            <div className="z-10 absolute flex lg:bottom-48 md:bottom-40 lg:mr-10 md:mr-5">
                                <div className={(`absolute z-10 w-4 h-4 bg-pink-500 rounded-full -bottom-2 transition-all duration-300 delay-1300 ${animation ? "opacity-1" : "opacity-0"}`)}></div>
                                <div className={cn(`border-dashed border-pink-500 border-b-2 transition-all duration-300 delay-1300 ${animation ? "lg:w-32 lg:-mr-32 md:w-24 md:-mr-24" : "w-0"}`)}></div>
                                <div className={cn(`border-dashed border-pink-500 border-r-2 transition-all duration-300 delay-1700 ${animation ? "lg:h-16 md:h-10" : "h-0"} lg:-mr-32 md:-mr-24`)}></div>
                                <div className={cn(`border-dashed border-pink-500 border-t-2 transition-all duration-300 delay-1900 ${animation ? "lg:w-16 lg:-mr-16 md:w-10 md:-mr-10" : "w-0"} `)}>
                                    <Arrow fill="red" className={`h-4 w-4 absolute flex transform -rotate-90 lg:-mt-2 md:-mt-2 lg:-mr-2 md:-mr-2 delay-2000 ${animation ? "opacity-1" : "opacity-0"} transition-all duration-300`} />
                                </div>
                            </div>
                        </div>

                        {/* responsive */}
                        <div className="z-10 absolute mt-16 mr-3 lg:hidden md:hidden">
                            <div className={(`absolute w-3 h-3 bg-pink-500 transition-all duration-300 delay-1300 ${animation ? "opacity-1" : "opacity-0"} rounded-full`)}></div>
                            <div className={cn(`absolute border-dashed border-b-2 border-red-500 transition-all duration-300 delay-1300 ${animation ? "w-16 -mr-16" : "w-0"} mt-1`)}></div>
                            <div className={cn(`absolute border-dashed border-r-2 border-red-500 transition-all duration-300 delay-1500 ${animation ? "h-10" : "h-0"} -mr-16 mt-1`)}>
                                <Arrow fill="red" className={`h-3 w-3 absolute  transition-all duration-300 delay-1700 -mr-11 mt-9 ${animation ? "opacity-1" : "opacity-0"}`} />
                            </div>
                        </div>
                        <div className="z-10 absolute  left-14 flex  lg:mt-10 md:mt-16 mt-16">
                            <div className={(`z-10 lg:w-4 md:w-4 lg:h-4 md:h-4 w-3 h-3 bg-pink-500 transition-all duration-300 delay-700 ${animation ? "opacity-1" : "opacity-0"} rounded-full absolute`)}></div>
                            <div className={(`absolute border-dashed border-white border-b-2 transition-all duration-300 delay-700 ${animation ? "md:w-52 lg:w-52 w-24" : "w-0"} md:mt-1 lg:mt-2 mt-1`)}></div>
                            <div className={(`absolute border-dashed border-white border-l-2 transition-all duration-300 delay-900 ${animation ? "lg:h-14 md:h-7 h-8" : "h-0"} md:w-52 w-24 mt-2`)}></div>
                            <Arrow fill="#fff" className={`lg:h-4 lg:w-4 md:w-4 md:h-4 w-3 h-3 absolute  transition-all duration-300 delay-1000  ${animation ? "opacity-1" : "opacity-0"} md:mr-15 md:mt-7 lg:mt-14 mr-21 mt-8`} />
                        </div>
                        {/* cart */}
                        <div className="-mt-3">
                            <div className="absolute 3xl:bottom-14 3xl:mr-32 lg:bottom-20 lg:mr-28 md:-bottom-10 md:-mr-24 -bottom-28 -mr-22">
                                <Cart background={"white"}
                                    text={'Kullanıcıların kendi tasarımlarını oluşturabildiği ve diğer tasarımcıları takip edebildiği sosyal medya uygulaması'} />
                            </div>
                        </div>
                        <Flip>
                            <img className="z-10 3xl:w-60  lg:w-52 md:w-40 w-32 -mt-4 ml-5 md:-mt-2" src="/images/Stily/stily1.png" alt="" />
                        </Flip>
                    </div>
                </div>
                <div className="mt-16 lg:h-96 h-32 flex">
                    <div className=" w-1/2 lg:h-96 md:h-96 h-28">
                        <div className="absolute 2xl:mr-60 xl:mr-40 lg:mr-16 md:mr-10">
                            <Fade delay={3000}>
                                <div className="3xl:mt-52 3xl:mr-44 lg:mt-40 md:mt-28 mt-40 lg:w-44 md:w-36 w-28">
                                    <p className="lg:text-xl text-left text-black text-sm">İsterse gönderilerini</p>
                                    <p className="text-left text-black lg:text-sm md:text-sm text-xs"> düzenleyebilir, oy verip yorum yapar veya paylaşır.   </p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className={cn(style.border, "3xl:h-92 sm:w-96 w-80 h-72 lg:h-100 md:h-96 lg:w-1/2 md:w-1/2 rounded-r-3xl flex")} style={{ backgroundColor: backgroundLogo }}>
                        <Fade delay={1500}>
                            <div className=" lg:mt-44 lg:mr-32 md:mr-36 h-20 lg:w-52 mt-36 mr-5">
                                <p className="lg:text-xl md:text-xl text-left text-white ">Kişiler diğer</p>
                                <p className="text-left text-white lg:text-sm md:text-sm text-xs w-32 mr-20">kullanıcıların paylaştığı kombinleri keşfeder.  </p>
                            </div>
                        </Fade>
                        <div className="3xl:mt-28">
                            <div className="lg:mt-28 md:mt-36 mt-68 absolute lg:left-20 md:left-16 left-48">
                                <div className={cn(`3xl:ml-16 xl:ml-14 lg:mt-60  md:mt-40 mt-7 mr-8 md:w-8 flex`)}>
                                    <p className="lg:-mr-3 md:-mr-3 -mr-3 lg:text-white md:text-white text-black lg:text-2xl md:text-lg text-sm lg:mt-2 md:mt-2 mt-2">Stily</p>
                                    <div className="lg:w-10 md:w-10 w-10 absolute lg:mr-14 md:mr-10 mr-7">
                                        <img src="/images/stily.png" alt="" />
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
                            <p className="text-white lg:text-2xl lg:ml-3 -mt-2">Chats</p>
                            <img className="h-7 -mt-1" src="/images/Stily/stily-chats.png" alt="" />
                        </div>
                        <img className="w-52" src="/images/vector.png" alt="" />
                    </div>
                    <div className="absolute mt-24">
                        <Circle1 fill="#35028E" onClick={handleClick} className={`z-10 transition-all duration-300 delay-2000 ${animationTwo ? "animate-ping" : "h-0"} absolute 3xl:ml-17 lg:bottom-6 md:bottom-4 bottom-2 lg:left-14 lg:ml-14 md:left-12 md:ml-10 left-12 ml-6 cursor-pointer`} />
                        <div className="lg:block md:block hidden">
                            <div className="z-10 absolute flex lg:mt-40 md:mt-28 lg:mr-10 md:mr-5">
                                <div className={(`absolute z-10 w-4 h-4 bg-pink-500 rounded-full -bottom-2 transition-all duration-300 delay-1300 ${animationTwo ? "opacity-1" : "opacity-0"}`)}></div>
                                <div className={cn(`border-dashed border-pink-500 border-b-2 transition-all duration-300 delay-1500 ${animationTwo ? "lg:w-60 lg:-mr-60 md:w-32 md:-mr-32" : "w-0"}`)}></div>
                                <Arrow fill="red" className={`h-4 w-4 absolute transform -rotate-90 transition-all duration-300 delay-1700 -mr-2 mt-9 ${animationTwo ? "opacity-1" : "opacity-0"} -mt-2 lg:block md:hidden lg:-mr-64`} />
                            </div>
                        </div>
                        {/* <div className="z-10 absolute left-10 bottom-24">
                            <div className={(`bg-pink-600 h-4 w-4 rounded-full `)}></div>
                            <div className={(` absolute -mt-2 border-dashed border-b-2 border-white w-32`)}></div>
                            <div className={(`absolute mr-32 -mt-16 border-dashed border-l-2 border-white h-16`)}></div>
                        </div> */}

                        {/* responsive */}
                        <div className="z24 absolute mt-16 mr-3 lg:hidden md:hidden">
                            <div className={(`absolute w-3 h-3 bg-pink-600 transition-all duration-300 delay-1300 ${animationTwo ? "opacity-1" : "opacity-0"} rounded-full`)}></div>
                            <div className={cn(`absolute border-dashed border-b-2 border-red-500 transition-all duration-300 delay-1300 ${animationTwo ? "w-16 -mr-16" : "w-0"} mt-1`)}></div>
                            {/* <div className={cn(`absolute border-dashed border-r-2 border-red-500 transition-all duration-300 delay-1700 ${animationTwo ? "h-10" : "h-0"} -mr-16 mt-1`)}>
                                <Arrow fill="red" className={`h-3 w-3 absolute  transition-all duration-300 delay-1900 -mr-2 mt-9 ${animationTwo ? "opacity-1" : "opacity-0"}`} />
                            </div> */}
                        </div>

                        <div className="z-10 absolute lg:bottom-32 bottom-16 left-14 flex  lg:mt-10 md:mt-16 mt-16">
                            <div className={(`z-10 lg:w-4 md:w-4 lg:h-4 md:h-4 w-3 h-3 bg-pink-500 transition-all duration-300 delay-700 ${animationTwo ? "opacity-1" : "opacity-0"} rounded-full absolute`)}></div>
                            <div className={(`absolute border-dashed border-white border-b-2 transition-all duration-300 delay-700 ${animationTwo ? "md:w-52 lg:w-52 w-24" : "w-0"} md:mt-1 lg:mt-2 mt-1`)}></div>
                            <div className={(`absolute border-dashed border-white border-l-2 transition-all duration-300 delay-900 ${animationTwo ? "lg:h-22 md:h-7 h-8 lg:-mt-20 -mt-7" : "h-0"} md:w-52 w-24 mt-2`)}></div>
                            <Arrow fill="#fff" className={`lg:h-4 lg:w-4 md:w-4 md:h-4 w-3 h-3 transform rotate-180 absolute  transition-all duration-300 delay-1000  ${animationTwo ? "opacity-1" : "opacity-0"} md:mr-15 md:mt-7 lg:-mt-22 mr-21 -mt-8`} />
                        </div>

                        {/* cart */}
                        <div className="-mt-3">
                            <div className="absolute 3xl:bottom-14 3xl:mr-32 lg:bottom-20 lg:mr-28 md:-bottom-10 md:-mr-24 -bottom-28 -mr-22">
                                <Cart background={"white"}
                                    text={'Kullanıcıların kendi tasarımlarını oluşturabildiği ve diğer tasarımcıları takip edebildiği sosyal medya uygulaması'} />
                            </div>
                        </div>
                        <Flip>
                            <img className="3xl:w-60  lg:w-52 md:w-40 w-32 -mt-4 ml-5 md:-mt-2" src="/images/Stily/stily2.png" alt="" />
                        </Flip>
                    </div>
                </div>
                <div className="mt-16 lg:h-96 h-32 flex">
                    <div className=" w-1/2 lg:h-96 md:h-96 h-28">
                        <div className="z-10 absolute 2xl:mr-52 xl:mr-28 md:mr-16">
                            <Fade delay={2200}>
                                <div className="mt-14">
                                    <img className="lg:w-80 md:w-72 md:-mt-5 w-32" src="/images/Stily/stily-2.png" alt="" />
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className={cn(style.border, "3xl:h-92 sm:w-96 w-80 h-72 lg:h-100 md:h-96 lg:w-1/2 md:w-1/2 rounded-r-3xl flex")} style={{ backgroundColor: backgroundLogo }}>
                        <Fade delay={1500}>
                            <div className="3xl:mr-10 lg:mt-24 lg:mr-14 md:mr-36 h-20 lg:w-52 mt-14 mr-5">
                                <p className="text-left text-white 3xl:text-lg 3xl:w-60 lg:w-52 lg:text-sm md:text-sm text-xs w-32 mr-20">Daha önceden butona basmış kişiler sıraya alınır ve diğer kullanıcılar ile karşılaşır. Kişi beğendiği kullanıcıyı seçerek %100 eşleşme gerçekleştirebilir</p>
                            </div>
                        </Fade>
                        <div className="3xl:mt-28">
                            <div className="lg:mt-28 md:mt-36 mt-68 absolute lg:left-20 md:left-16 left-48">
                                <div className={cn(`3xl:ml-16 xl:ml-14 lg:mt-60  md:mt-40 mt-7 mr-8 md:w-8 flex`)}>
                                    <p className="lg:-mr-3 md:-mr-3 -mr-3 lg:text-white md:text-white text-black lg:text-2xl md:text-lg text-sm lg:mt-2 md:mt-2 mt-2">Stily</p>
                                    <div className="lg:w-10 md:w-10 w-10 absolute lg:mr-14 md:mr-10 mr-7">
                                        <img src="/images/stily.png" alt="" />
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



            {/* page 3 */}

            <div ref={divThree} className={cn(page == "p3" ? "block" : "hidden", "w-full")}>
                <div className="flex justify-around">
                    <div className={cn(" absolute left-9 lg:block md:hidden hidden -mt-4")}>
                        <div className="absolute flex lg:mt-24 lg:mr-10">
                            <p className="text-white lg:text-2xl lg:ml-3 -mt-2">Combines</p>
                            <p className="text-white text-4xl -mt-3 -mr-2">+</p>
                        </div>
                        <img className="w-52" src="/images/vector.png" alt="" />
                    </div>
                    <div className="absolute mt-24">
                        <Circle1 fill="#35028E" onClick={handleClick} className={`z-10 transition-all duration-300 delay-2000 ${animationThree ? "animate-ping" : "h-0"} absolute 3xl:ml-25 lg:bottom-3 md:bottom-2 bottom-0 lg:left-16 lg:ml-22 md:left-12 md:ml-16 left-14 ml-9 cursor-pointer`} />
                        <div className="lg:block md:block hidden">
                            <div className="z-10 absolute flex lg:bottom-60 md:bottom-12 lg:mr-20 md:mr-5">
                                <div className={(`absolute w-4 h-4 transition-all duration-300 delay-1300 ${animationThree ? "opacity-1" : "opacity-0"} bg-pink-500 lg:-bottom-2 md:-bottom-2 rounded-full`)}></div>
                                <div className={cn(`border-dashed border-pink-500 border-b-2 transition-all duration-300 delay-1300 ${animationThree ? "lg:w-28 lg:-mr-28 md:w-20 md:-mr-20" : "w-0"} mt-1`)}></div>
                                <div className={cn(`border-dashed border-pink-500 border-r-2 transition-all duration-300 delay-1500 ${animationThree ? "lg:h-10 md:h-28" : "h-0"} lg:-mr-28 md:-mr-20`)}></div>
                                <div className={cn(`border-dashed border-pink-500 border-t-2 transition-all duration-300 delay-1700 ${animationThree ? "lg:w-16 lg:-mr-16 md:w-10 md:-mr-10" : "w-0"} `)}>
                                    <Arrow fill="red" className={`h-4 w-4 absolute flex transform -rotate-90 lg:-mt-2 md:-mt-2 lg:-mr-2 md:-mr-2 transition-all duration-300 delay-1900 ${animationThree ? "opacity-1" : "opacity-0"} `} />
                                </div>
                            </div>
                        </div>
                        {/* resopnsive */}
                        <div>
                            <div className="lg:hidden md:hidden">
                                <div className=" z-10 absolute flex mt-40 mr-2">
                                    <div className={(`w-3 h-3 transition-all duration-300 delay-300 ${animationThree ? "opacity-1" : "opacity-0"} bg-pink-500 rounded-full`)}></div>
                                    <div className={cn(`absolute border-dashed border-red-500 border-b-2 transition-all duration-300 ${animationThree ? "w-16 -mr-16" : "w-0"} mt-1`)}></div>
                                    <div className={cn(`absolute border-dashed border-red-500 border-r-2 transition-all duration-300 delay-300 ${animationThree ? "h-10 -mt-9" : "h-0"} -mr-16`)}></div>
                                    <Arrow fill="red" className={(`w-3 h-3 absolute flex transform rotate-180 transition-all duration-300 delay-500 ${animationThree ? "opacity-1" : "opacity-0"} -mr-4.5 -mt-10`)} />
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
                            <div className={(`z-10 absolute transition-all duration-300 delay-200 ${animationThree ? "opacity-1" : "opacity-0"} bg-pink-600 h-3 w-3 rounded-full mt-5 left-10`)}>
                                <div className={cn(`border-dashed border-white transition-all duration-300 ${animationThree ? "w-28" : "w-0"} border-t-2  h-6 mr-1 absolute mt-1 lg:block md:block`)}></div>
                                <div className={cn(`border-dashed border-white border-l-2 transition-all duration-300 delay-300 ${animationThree ? "h-5" : "h-0"} lg:w-52 md:w-53 w-28 lg:mr-5 lg:mt-1 md:mt-1 mt-1 mr-1`)}>
                                    <Arrow fill="#fff" className={cn(`transition-all duration-300 delay-500 ${animationThree ? "opacity-1" : "opacity-0"} w-3 h-3 absolute flex mt-5 mr-25`)} />
                                </div>
                            </div>
                        </div>
                        {/* cart */}
                        <div className="-mt-3">
                            <div className="absolute 3xl:bottom-14 3xl:mr-32 lg:bottom-20 lg:mr-28 md:-bottom-10 md:-mr-24 -bottom-28 -mr-22">
                                <Cart background={"white"}
                                    text={'Kullanıcıların kendi tasarımlarını oluşturabildiği ve diğer tasarımcıları takip edebildiği sosyal medya uygulaması'} />
                            </div>
                        </div>
                        <Flip>
                            <img className="3xl:w-60  lg:w-52 md:w-40 w-32 -mt-4 ml-5 md:-mt-2" src="/images/Stily/stily3.png" alt="" />
                        </Flip>

                    </div>
                </div>
                <div className="mt-16 lg:h-96 h-32 flex">
                    <div className="w-1/2">
                        <Fade delay={3000}>
                            <div className="flex">
                                <div className="right-0 md:mt-10">
                                    <img className="lg:w-52 md:w-32 w-24" src="/images/Stily/stily-3.png" alt="" />
                                </div>
                                <div className="text-left 3xl:mr-52 3xl:mt-40 lg:w-52 lg:mt-36 lg:mr-10 lg:block md:hidden hidden">
                                    {/* <p className="text-xl">Lorem ipsum dolor</p> */}
                                    <p>Dokun, ürün seç ve oluştur.</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className={cn(style.border, "3xl:h-92 sm:w-96 w-80 h-72 lg:h-100 md:h-96 lg:w-1/2 md:w-1/2 rounded-r-3xl flex")} style={{ backgroundColor: backgroundLogo }}>
                        <Fade delay={1700}>
                            <div className="lg:hidden md:hidden">
                                <div className=" lg:mt-52 lg:mr-36 md:mr-36 h-20 lg:w-52 mt-28 mr-5">
                                    <p className="lg:text-xl md:text-xl text-left text-white ">Kullanıcılar kendi</p>
                                    <p className="text-left text-white lg:text-sm md:text-sm text-xs w-32 mr-20"> tasarımlarını oluşturur ve yeni kombinler yapabilir.  </p>
                                </div>
                            </div>
                        </Fade>
                        <Fade delay={1700}>
                            <div className="lg:block md:block hidden">
                                <div className=" lg:mt-48 lg:mr-72 md:mr-40 md:mt-32 h-20 lg:w-52 mt-20">
                                    <p className="lg:text-xl md:text-xl text-left text-white ">Kullanıcılar kendi</p>
                                    <p className="text-left text-white lg:text-sm md:text-sm text-xs w-32 mr-20"> tasarımlarını oluşturur ve yeni kombinler yapabilir.   </p>
                                </div>
                            </div>
                        </Fade>
                        <div className="3xl:mt-28">
                            <div className="lg:mt-28 md:mt-36 mt-68 absolute lg:left-20 md:left-16 left-48">
                                <div className={cn(`3xl:ml-16 xl:ml-14 lg:mt-60  md:mt-40 mt-7 mr-8 md:w-8 flex`)}>
                                    <p className="lg:-mr-3 md:-mr-3 -mr-3 lg:text-white md:text-white text-black lg:text-2xl md:text-lg text-sm lg:mt-2 md:mt-2 mt-2">Stily</p>
                                    <div className="lg:w-10 md:w-10 w-10 absolute lg:mr-14 md:mr-10 mr-7">
                                        <img src="/images/stily.png" alt="" />
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
                            <p className="text-white lg:text-2xl lg:ml-3 -mt-2">Like</p>
                            <img className="h-7 -mt-2" src="/images/Stily/stily-like.png" alt="" />
                        </div>
                        <img className="w-52" src="/images/vector.png" alt="" />
                    </div>
                    <div className="absolute mt-24">
                        <Circle1 fill="#35028E" onClick={handleClick} className={`z-10 transition-all duration-300 delay-2000 ${animationFour ? "animate-ping" : "h-0"} absolute 3xl:ml-32 lg:bottom-3 md:bottom-2 bottom-0 lg:left-22 lg:ml-24 md:left-21 md:ml-14 left-24 ml-5 cursor-pointer`} />
                        <div className="lg:block md:block hidden">
                            <div className="z-10 absolute flex lg:bottom-16 md:bottom-12 lg:mr-10 md:mr-5">
                                <div className={(`absolute w-4 h-4 transition-all duration-300 delay-1300 ${animationFour ? "opacity-1" : "opacity-0"} bg-pink-500 lg:-bottom-2 md:-bottom-2 rounded-full`)}></div>
                                <div className={cn(`border-dashed border-pink-500 border-b-2 transition-all duration-300 delay-1300 ${animationFour ? "lg:w-28 lg:-mr-28 md:w-20 md:-mr-20" : "w-0"} mt-1`)}></div>
                                <div className={cn(`border-dashed border-pink-500 border-r-2 transition-all duration-300 delay-1500 ${animationFour ? "lg:h-36 md:h-28" : "h-0"} lg:-mr-28 md:-mr-20`)}></div>
                                <div className={cn(`border-dashed border-pink-500 border-t-2 transition-all duration-300 delay-1700 ${animationFour ? "lg:w-16 lg:-mr-16 md:w-10 md:-mr-10" : "w-0"} `)}>
                                    <Arrow fill="red" className={`h-4 w-4 absolute flex transform -rotate-90 lg:-mt-2 md:-mt-2 lg:-mr-2 md:-mr-2 transition-all duration-300 delay-1900 ${animationFour ? "opacity-1" : "opacity-0"} `} />
                                </div>
                            </div>
                        </div>
                        {/* resopnsive */}
                        <div>
                            <div className="lg:hidden md:hidden">
                                <div className=" z-10 absolute flex mt-48 mr-2">
                                    <div className={(`w-3 h-3  transition-all duration-1300 ${animationFour ? "opacity-1" : "opacity-0"} bg-pink-500 rounded-full`)}></div>
                                    <div className={cn(`absolute border-dashed border-red-500 border-b-2 transition-all duration-300 delay-1300 ${animationFour ? "w-16 -mr-16" : "w-0"} mt-1`)}></div>
                                    <div className={cn(`absolute border-dashed border-red-500 border-r-2 transition-all duration-300 delay-1500 ${animationFour ? "h-10 -mt-9" : "h-0"} -mr-16`)}></div>
                                    <Arrow fill="red" className={(`w-3 h-3 absolute flex transform rotate-180 transition-all duration-300 delay-1700 ${animationFour ? "opacity-1" : "opacity-0"} -mr-4.5 -mt-10`)} />
                                </div>
                            </div>
                        </div>
                        {/* cart */}
                        <div className="-mt-3">
                            <div className="absolute 3xl:bottom-14 3xl:mr-32 lg:bottom-20 lg:mr-28 md:-bottom-10 md:-mr-24 -bottom-28 -mr-22">
                                <Cart background={"white"}
                                    text={'Kullanıcıların kendi tasarımlarını oluşturabildiği ve diğer tasarımcıları takip edebildiği sosyal medya uygulaması'} />
                            </div>
                        </div>
                        <Flip>
                            <img className="3xl:w-60  lg:w-52 md:w-40 w-32 -mt-4 ml-5 md:-mt-2" src="/images/Stily/stily4.png" alt="" />
                        </Flip>

                    </div>
                </div>
                <div className="mt-16 lg:h-96 h-32 flex">
                    <div className=" w-1/2 lg:h-96 md:h-96 h-28">
                        <div className="absolute 2xl:mr-52 xl:mr-32 lg:mr-10">
                            <Fade delay={3000}>
                                <div className=" text-left text-black 3xl:mr-52 lg:w-80 lg:mt-20 md:mt-16 md:w-48 mt-20">
                                    <div className="lg:block md:block hidden">
                                        <div className="flex">
                                            <img className="z-10 lg:w-72 md:w-48 w-28" src="/images/Stily/stily-4.png" alt="" />
                                            <img className="lg:w-20 lg:h-24 rounded-xl transform -rotate-12 md:w-14 md:h-14 md:mt-5 md:-mr-10 w-28 lg:mt-10 lg:-mr-16" src="/images/Stily/stily-4-2.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="lg:w-60 md:w-44 xs:mr-3 -mr-10 w-28 lg:block md:block">
                                        <p className="lg:text-lg md:text-sm text-xs">Kişiler yaptığı paylaşımlara atılan yorum, puan vb. aktiviteleri inceleyebilir.   </p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className={cn(style.border, "3xl:h-92 sm:w-96 w-80 h-72 lg:h-100 md:h-96 lg:w-1/2 md:w-1/2 rounded-r-3xl flex")} style={{ backgroundColor: backgroundLogo }}>
                        <div className="3xl:mt-28">
                            <div className="lg:mt-28 md:mt-36 mt-68 absolute lg:left-20 md:left-16 left-48">
                                <div className={cn(`3xl:ml-16 xl:ml-14 lg:mt-60  md:mt-40 mt-7 mr-8 md:w-8 flex`)}>
                                    <p className="lg:-mr-3 md:-mr-3 -mr-3 lg:text-white md:text-white text-black lg:text-2xl md:text-lg text-sm lg:mt-2 md:mt-2 mt-2">Stily</p>
                                    <div className="lg:w-10 md:w-10 w-10 absolute lg:mr-14 md:mr-10 mr-7">
                                        <img src="/images/stily.png" alt="" />
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

            {/* page 5 */}
            <div ref={divFive} className={cn(page == "p5" ? "block" : "hidden", "w-full")}>
                <div className="flex justify-around">
                    <div className={cn(" absolute left-9 lg:block md:hidden hidden -mt-4")}>
                        <div className="absolute flex lg:mt-24 lg:mr-14">
                            <p className="text-white lg:text-2xl lg:ml-3 -mt-2">Profil</p>
                            <img className="h-7 -mt-2" src="/images/Stily/stily-user.png" alt="" />
                        </div>
                        <img className="w-52" src="/images/vector.png" alt="" />
                    </div>
                    <div className="absolute mt-24">
                        <Circle1 fill="#35028E" onClick={handleClick} className={`z-10 transition-all duration-300 delay-2000 ${animationFive ? "animate-ping" : "h-0"} absolute lg:bottom-3 md:bottom-2 bottom-0 lg:left-1 lg:ml-8 md:left-4 md:ml-3 left-5 cursor-pointer`} />
                        <div className="lg:block md:block hidden">
                            <div className="z-10 absolute flex lg:bottom-36 md:bottom-20 lg:mr-6 md:mr-5">
                                <div className={(`absolute w-4 h-4 transition-all duration-300 delay-1300 ${animationFive ? "opacity-1" : "opacity-0"} bg-pink-500 lg:-bottom-2 md:-bottom-2 rounded-full`)}></div>
                                <div className={cn(`border-dashed border-pink-500 border-b-2 transition-all duration-300 delay-1300 ${animationFive ? "lg:w-28 lg:-mr-28 md:w-20 md:-mr-20" : "w-0"} mt-1`)}></div>
                                <div className={cn(`border-dashed border-pink-500 border-r-2 transition-all duration-300 delay-1500 ${animationFive ? "lg:h-28 md:h-20" : "h-0"} lg:-mr-28 md:-mr-20`)}></div>
                                <div className={cn(`border-dashed border-pink-500 border-t-2 transition-all duration-300 delay-1700 ${animationFive ? "lg:w-16 lg:-mr-16 md:w-10 md:-mr-10" : "w-0"} `)}>
                                    <Arrow fill="red" className={`h-4 w-4 absolute flex transform -rotate-90 lg:-mt-2 md:-mt-2 lg:-mr-2 md:-mr-2 transition-all duration-300 delay-1900 ${animationFive ? "opacity-1" : "opacity-0"} `} />
                                </div>
                            </div>
                        </div>
                        {/* resopnsive */}
                        <div>
                            <div className="lg:hidden md:hidden">
                                <div className=" z-10 absolute flex mt-40 mr-2">
                                    <div className={(`w-3 h-3 transition-all duration-300 delay-300 ${animationFive ? "opacity-1" : "opacity-0"} bg-pink-500 rounded-full`)}></div>
                                    <div className={cn(`absolute border-dashed border-red-500 border-b-2 transition-all duration-300 ${animationFive ? "w-16 -mr-16" : "w-0"} mt-1`)}></div>
                                    <div className={cn(`absolute border-dashed border-red-500 border-r-2 transition-all duration-300 delay-300 ${animationFive ? "h-10 -mt-9" : "h-0"} -mr-16`)}></div>
                                    <Arrow fill="red" className={(`w-3 h-3 absolute flex transform rotate-180 transition-all duration-300 delay-500 ${animationFive ? "opacity-1" : "opacity-0"} -mr-4.5 -mt-10`)} />
                                </div>
                            </div>
                        </div>

                        <div className={(`z-10 absolute transition-all duration-300 delay-200 ${animationFive ? "opacity-1" : "opacity-0"} lg:w-4 md:w-4 md:h-4 lg:h-4 lg:block md:block hidden bg-pink-600 h-2 w-2 rounded-full lg:mt-44 md:mt-44 mt-16 left-8 lg:left-10`)}>
                            <div className="mt-2 -mr-2">
                                <div className={(`border-dashed border-white transition-all duration-300 delay-700 ${animationFive ? "lg:w-24 md:w-12" : "w-0"} border-t-2 absolute lg:mr-3 md:mr-4`)}></div>
                                <div className={(`border-dashed border-white border-r-2 transition-all duration-300 delay-700 ${animationFive ? "lg:h-28 md:h-10" : "h-0"} lg:w-20 md:w-12 lg:mr-28 md:mr-16`)}></div>
                                <div className={(`border-dashed border-white border-b-2 transition-all duration-300 delay-900 ${animationFive ? " lg:w-28 md:w-16" : "w-0"} lg:mr-28 md:mr-16`)}>
                                    <Arrow fill="#fff" className={(`w-3 h-3 lg:w-4 lg:h-4 absolute flex transform  transition-all duration-300 delay-1000 ${animationFive ? "opacity-1" : "opacity-0"} rotate-90 lg:mr-28 md:mr-16 -mt-11`)} />
                                </div>
                            </div>
                        </div>

                        {/* responsive */}
                        <div className="lg:hidden md:hidden ">
                            <div className={(`z-10 absolute transition-all duration-300 delay-700 ${animationFive ? "opacity-1" : "opacity-0"} bg-pink-600 h-3 w-3 rounded-full mt-5 left-10`)}>
                                <div className={cn(`border-dashed border-white transition-all duration-300 delay-700 ${animationFive ? "w-28" : "w-0"} border-t-2  h-6 mr-1 absolute mt-1 lg:block md:block`)}></div>
                                <div className={cn(`border-dashed border-white border-l-2 transition-all duration-300 delay-900 ${animationFive ? "h-5" : "h-0"} lg:w-52 md:w-53 w-28 lg:mr-5 lg:mt-1 md:mt-1 mt-1 mr-1`)}>
                                    <Arrow fill="#fff" className={cn(`transition-all duration-300 delay-1000 ${animationFive ? "opacity-1" : "opacity-0"} w-3 h-3 absolute flex mt-5 mr-25`)} />
                                </div>
                            </div>
                        </div>
                        {/* cart */}
                        <div className="-mt-3">
                            <div className="absolute 3xl:bottom-14 3xl:mr-32 lg:bottom-20 lg:mr-28 md:-bottom-10 md:-mr-24 -bottom-28 -mr-22">
                                <Cart background={"white"}
                                    text={'Kullanıcıların kendi tasarımlarını oluşturabildiği ve diğer tasarımcıları takip edebildiği sosyal medya uygulaması'} />
                            </div>
                        </div>
                        <Flip>
                            <img className="3xl:w-60  lg:w-52 md:w-40 w-32 -mt-4 ml-5 md:-mt-2" src="/images/Stily/stily5.png" alt="" />
                        </Flip>

                    </div>
                </div>
                <div className="mt-16 lg:h-96 h-32 flex">
                    <div className=" w-1/2 lg:h-96 md:h-96 h-28">
                        <div className="absolute 2xl:mr-60 xl:mr-44 lg:mr-28 md:mr-16">
                            <Fade delay={3000}>
                                <div className="3xl:mr-40">
                                    <img className="lg:w-52 md:w-48 w-28 -mt-5" src="/images/Stily/stily-5.png" alt="" />
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className={cn(style.border, "3xl:h-92 sm:w-96 w-80 h-72 lg:h-100 md:h-96 lg:w-1/2 md:w-1/2 rounded-r-3xl flex")} style={{ backgroundColor: backgroundLogo }}>
                        <Fade delay={1700}>
                            <div className="lg:hidden md:hidden">
                                <div className=" lg:mt-52 lg:mr-36 md:mr-36 h-20 lg:w-52 mt-28 mr-5">
                                    <p className="lg:text-xl md:text-xl text-left text-white ">Lorem ipsum dolor</p>
                                    <p className="text-left text-white lg:text-sm md:text-sm text-xs w-32 mr-20">Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do </p>
                                </div>
                            </div>
                        </Fade>
                        <Fade delay={1700}>
                            <div className="lg:block md:block hidden">
                                <div className=" lg:mt-40 lg:mr-72 md:mr-40 md:mt-32 h-20 lg:w-52 mt-20">
                                    <img className="lg:w-40 md:w-36 md:mr-5 lg:mr-5" src="/images/Stily/stily-5-2.png" alt="" />
                                </div>
                            </div>
                        </Fade>
                        <div className="3xl:mt-28">
                            <div className="lg:mt-28 md:mt-36 mt-68 absolute lg:left-20 md:left-16 left-48">
                                <div className={cn(`3xl:ml-16 xl:ml-14 lg:mt-60  md:mt-40 mt-7 mr-8 md:w-8 flex`)}>
                                    <p className="lg:-mr-3 md:-mr-3 -mr-3 lg:text-white md:text-white text-black lg:text-2xl md:text-lg text-sm lg:mt-2 md:mt-2 mt-2">Stily</p>
                                    <div className="lg:w-10 md:w-10 w-10 absolute lg:mr-14 md:mr-10 mr-7">
                                        <img src="/images/stily.png" alt="" />
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


export default PageThre
