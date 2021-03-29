import React, { FC, useEffect, useRef, useState } from 'react'
import cn from 'classnames';
import Circle1 from '@assets/svg/circle.svg'
import Arrow from '@assets/svg/arrow.svg'
import style from '@assets/styles/style.module.css'
import Cart from './AllPageCart'
import { useIntersectionObserver } from '@lib/hooks/use-intersection-observer';
import { Fade, Flip } from 'react-awesome-reveal';
import AppStore from '@assets/svg/app-store.svg'


interface Props {
    backgroundLogo?: string;

}
const PageTwo: FC<Props> = ({ backgroundLogo }) => {

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
                            <img className="h-8 -mt-2" src="/images/Flow/flow-profil.png" alt="" />
                        </div>
                        <img className="w-52" src="/images/vector.png" alt="" />
                    </div>

                    <div className="absolute mt-24">
                        <Circle1 fill="#35028E" onClick={handleClick} className={`z-10  transition-all duration-300 delay-2000 ${animation ? "animate-ping" : "h-0"} absolute 3xl:ml-8 lg:bottom-4 md:bottom-2 bottom-1 lg:left-16 lg:ml-5 md:left-20 left-14 -ml-1 cursor-pointer`} />
                        <div className="lg:block md:block hidden">
                            <div className="z-10 absolute flex lg:bottom-48 md:bottom-36 lg:mr-4">
                                <div className={(`absolute w-4 h-4 lg:-bottom-2 lg:-mr-14 md:-bottom-2 md:-mr-6 bg-pink-600 transition-all duration-300 delay-1300 ${animation ? "opacity-1" : "opacity-0"} rounded-full`)}></div>
                                <div className={cn(`border-dashed border-pink-500 border-b-2 transition-all duration-300 delay-1500 ${animation ? "lg:w-20 lg:-mr-32 md:w-16 md:-mr-24" : "w-0"}`)}></div>
                                <div className={cn(`border-dashed border-pink-500 border-r-2 transition-all duration-300 delay-1700 ${animation ? "lg:h-16 md:h-10" : "h-0"} lg:-mr-20 md:-mr-16`)}></div>
                                <div className={cn(`border-dashed border-pink-500 border-t-2 transition-all duration-300 delay-1900 ${animation ? "lg:w-16 lg:-mr-16 md:w-10 md:-mr-10" : "w-0"} `)}>
                                    <Arrow fill="red" className={`h-4 w-4 absolute flex transform -rotate-90 lg:-mt-2 md:-mt-2 lg:-mr-2 md:-mr-2 delay-1900 ${animation ? "opacity-1" : "opacity-0"} transition-all duration-300`} />
                                </div>
                            </div>
                        </div>

                        {/* responsive */}
                        <div className="z-10 absolute mt-16 mr-3 lg:hidden md:hidden">
                            <div className={(`absolute w-3 h-3 bg-pink-600 transition-all duration-300 delay-1300 ${animation ? "opacity-1" : "opacity-0"} rounded-full`)}></div>
                            <div className={cn(`absolute border-dashed border-b-2 border-red-500 transition-all duration-1300 ${animation ? "w-16 -mr-16" : "w-0"} mt-1`)}></div>
                            <div className={cn(`absolute border-dashed border-r-2 border-red-500 transition-all duration-300 delay-1500 ${animation ? "h-10" : "h-0"} -mr-16 mt-1`)}>
                                <Arrow fill="red" className={`h-3 w-3 absolute  transition-all duration-300 delay-1700 -mr-2 mt-9 ${animation ? "opacity-1" : "opacity-0"}`} />
                            </div>
                        </div>
                        <div className="z-10 absolute  left-14 flex  lg:mt-24 md:mt-16 mt-16">
                            <div className={(`z-10 w-4 h-4 bg-pink-500 transition-all duration-300 delay-700 ${animation ? "opacity-1" : "opacity-0"} rounded-full absolute`)}></div>
                            <div className={(`absolute border-dashed border-white border-b-2 transition-all duration-300 delay-700 ${animation ? "md:w-52 lg:w-52 w-24" : "w-0"} md:mt-1 lg:mt-1 mt-1`)}></div>
                            <div className={(`absolute border-dashed border-white border-l-2 transition-all duration-300 delay-900 ${animation ? "lg:h-14 md:h-7 h-8" : "h-0"} md:w-52 w-24 mt-1`)}></div>
                            <Arrow fill="#fff" className={`lg:h-4 lg:w-4 md:w-4 md:h-4 w-3 h-3 absolute  transition-all duration-300 delay-1000  ${animation ? "opacity-1" : "opacity-0"} md:mr-15 md:mt-7 lg:mt-14 mr-21 mt-7`} />
                        </div>
                        {/* cadr */}
                        <div className="-mt-0.6">
                            <div className="absolute 3xl:bottom-14 3xl:mr-32 lg:bottom-20 lg:mr-28 md:-bottom-10 md:-mr-24 -bottom-25 -mr-22">
                                <Cart background={backgroundLogo}
                                    text={'Kullanıcıların kendi programlarını oluşturabildiği yoga ve meditasyon uygulaması'} />
                            </div>
                        </div>

                        <Flip>
                            <img className="3xl:w-60  lg:w-52 md:w-40 w-32 -mt-4 ml-5 md:-mt-2" src="/images/Flow/flow1.png" alt="" />
                        </Flip>
                        <div className={(`absolute transition-all duration-300 delay-200 ${animation ? "opacity-1" : "opacity-0"} 3xl:mt-9 lg:top-48 md:top-36 md:-mr-10 lg:-mr-16 lg:block md:block hidden`)}>
                            <img className="lg:w-20 md:w-14 md:mt-1" src="/images/Flow/flow-1.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="mt-16 lg:h-96 h-32 flex">
                    <div className=" w-1/2 lg:h-96 md:h-96 h-28">
                        <div className="absolute 2xl:mr-60 xl:mr-36 lg:mr-10">
                            <Fade delay={3000}>
                                <div className="3xl:mt-52 3xl:mr-44 lg:mt-44 md:mt-28 mt-40 md:mr-5 lg:w-44 md:w-36 w-28">
                                    <p className="text-left text-black 3xl:text-lg lg:text-sm md:text-sm text-xs">Kullanıcı istediği kategoriden birini seçerek destek alabilir</p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className={cn(style.border, "3xl:h-92 sm:w-96 w-80 h-72 lg:h-100 md:h-96 lg:w-1/2 md:w-1/2 rounded-r-3xl flex")} style={{ backgroundColor: backgroundLogo }}>
                        <Fade delay={1500}>
                            <div className="lg:mt-52 3xl:mr-16 lg:mr-16 md:mr-36 left-0 h-20  mt-36 mr-5">
                                <p className="text-left text-white 3xl:text-lg 3xl:w-60 lg:w-60 lg:text-sm md:text-sm text-xs w-32 mr-20">Kişisel meditasyon programı tamamlanınca bir üst kademe için hak kazanılır</p>
                            </div>
                        </Fade>
                        <div className="3xl:mt-28">
                            <div className="lg:mt-28 md:mt-36 mt-68 absolute lg:left-20 md:left-28 left-44">
                                <div className={cn(`3xl:ml-12 lg:mt-60 lg:ml-10  md:mt-40 mt-8 md:w-8 flex`)}>
                                    <p className="lg:-mr-8 md:-mr-0 -mr-3 lg:text-white md:text-white text-black lg:text-2xl md:text-lg text-sm lg:mt-2 md:mt-2 mt-2">Flow</p>
                                    <div className="lg:w-10 md:w-10 w-8 absolute lg:mr-8 md:mr-14 mr-10">
                                        <img src="/images/flow.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute lg:left-0 md:left-0 left-24 lg:ml-5 md:ml-5 lg:mt-16 mt-4">
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
                        <div className="absolute flex lg:mt-22 lg:mr-14">
                            <h1 className="text-2xl ml-1 -mt-1 text-purple-500">Yoga</h1>
                            <img className="h-6 " src="/images/Flow/flow-yoga.png" alt="" />
                        </div>
                        <img className="w-52" src="/images/vector.png" alt="" />
                    </div>
                    <div className="absolute mt-24">
                        <Circle1 fill="#35028E" onClick={handleClick} className={`z-10  transition-all duration-300 delay-2000 ${animationTwo ? "animate-ping" : "h-0"} absolute 3xl:ml-24 lg:bottom-4 md:bottom-2 bottom-1 lg:left-14 lg:ml-20 md:left-28 md:ml-10 left-16 ml-5 cursor-pointer`} />
                        <div className="absolute mt-2 lg:block md:block hidden">
                            <div className="z-10 absolute lg:mt-24 lg:mr-16 md:mt-14 md:mr-14 flex">
                                <div className={(`absolute w-4 h-4 bg-pink-500 rounded-full  transition-all duration-300 delay-1300 ${animationTwo ? "opacity-1" : "opacity-0"}`)}></div>
                                <div className={(`absolute border-dashed border-b-2  transition-all duration-300 delay-1500 ${animationTwo ? "lg:w-48 md:w-40 lg:-mr-48 md:-mr-40" : "opacity-0"} border-red-500 mt-2`)}></div>
                                <Arrow fill="red" className={`w-4 h-4 absolute transform -rotate-90  transition-all duration-300 delay-1700  ${animationTwo ? "opacity-1" : "opacity-0"} lg:-mr-52 lg:mt-0.5 md:-mr-44 md:mt-0.5`} />
                            </div>
                        </div>
                        {/* responsive */}
                        <div className="z-10 absolute mt-16 mr-3 lg:hidden md:hidden">
                            <div className={(`absolute w-3 h-3 bg-pink-600 transition-all duration-300 delay-1300 ${animationTwo ? "opacity-1" : "opacity-0"} rounded-full`)}></div>
                            <div className={cn(`absolute border-dashed border-b-2 border-red-500 transition-all duration-300 delay-1500 ${animationTwo ? "w-16 -mr-16" : "w-0"} mt-1`)}></div>
                            <div className={cn(`absolute border-dashed border-r-2 border-red-500 transition-all duration-300 delay-1700 ${animationTwo ? "h-10" : "h-0"} -mr-16 mt-1`)}>
                                <Arrow fill="red" className={`h-3 w-3 absolute  transition-all duration-300 delay-1900 -mr-2 mt-9 ${animationTwo ? "opacity-1" : "opacity-0"}`} />
                            </div>
                        </div>
                        {/* responsive */}
                        <div className="z-10 absolute  left-14 flex mt-16 lg:hidden md:hidden">
                            <div className={(`z-10 w-3 h-3 bg-pink-500 transition-all duration-300 delay-700 ${animationTwo ? "opacity-1" : "opacity-0"} rounded-full absolute`)}></div>
                            <div className={(`absolute border-dashed border-white border-b-2 transition-all duration-300 delay-700 ${animationTwo ? "w-24" : "w-0"} mt-1`)}></div>
                            <div className={(`absolute border-dashed border-white border-l-2 transition-all duration-300 delay-900 ${animationTwo ? "h-8" : "h-0"} w-24 mt-1`)}></div>
                            <Arrow fill="#fff" className={`w-3 h-3 absolute  transition-all duration-300 delay-1000  ${animationTwo ? "opacity-1" : "opacity-0"} mr-21 mt-7`} />
                        </div>

                        <div className="z-10 absolute lg:block md:block hidden mr-48">
                            <div className="left-14 flex  lg:mt-44 md:mt-32 md:-mr-10 mt-16">
                                <div className={(`z-10 w-4 h-4 bg-pink-500 transition-all duration-300 delay-700 ${animationTwo ? "opacity-1" : "opacity-0"} rounded-full absolute -mt-1`)}></div>
                                <div className={(`absolute border-dashed border-white border-b-2 transition-all duration-300 delay-900 ${animationTwo ? "md:w-36 lg:w-40" : "w-0"} md:mt-1 lg:mt-1 mt-2`)}></div>
                                <Arrow fill="white" className={(`lg:w-4 lg:h-4 md:w-4 md:h-4 absolute transition-all duration-300 delay-1000 ${animationTwo ? "opacity-1" : "opacity-0"} transform rotate-90 lg:mr-40 md:mr-36 md:-mt-0.5 lg:-mt-0.5`)} />
                            </div>
                        </div>
                        {/* cadr */}
                        <div className="-mt-0.6">
                            <div className="absolute 3xl:bottom-14 3xl:mr-32 lg:bottom-20 lg:mr-28 md:-bottom-10 md:-mr-24 -bottom-25 -mr-22">
                                <Cart background={backgroundLogo}
                                    text={'Kullanıcıların kendi programlarını oluşturabildiği yoga ve meditasyon uygulaması'} />
                            </div>
                        </div>

                        <Flip>
                            <img className="3xl:w-60  lg:w-52 md:w-40 w-32 -mt-4 ml-5 md:-mt-2" src="/images/Flow/flow2.png" alt="" />
                        </Flip>

                    </div>
                </div>
                <div className="mt-16 lg:h-96 h-32 flex">
                    <div className=" w-1/2 lg:h-96 md:h-96 h-28">
                        <div className="absolute 3xl:mr-60 2xl:mr-52 xl:mr-36 lg:mr-10">
                            <Fade delay={3000}>
                                <div className=" lg:w-40 lg:mt-16 md:w-28 w-24 mr-2 mt-40 md:mt-14 md:mr-10">
                                    <img className="absolute rounded-lg" src="/images/Flow/flow-2.png" alt="" />
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className={cn(style.border, "3xl:h-92 sm:w-96 w-80 h-72 lg:h-100 md:h-96 lg:w-1/2 md:w-1/2 rounded-r-3xl flex")} style={{ backgroundColor: backgroundLogo }}>
                        <Fade delay={1500}>
                            <div className="lg:mt-52 lg:mr-48 md:mr-36 left-0 h-20 lg:w-52 mt-36 mr-5">
                                <p className="text-left text-white 3xl:text-lg 3xl:w-60 lg:text-sm md:text-sm text-xs w-32 mr-20">Kişi kendine özgün yoga programı hazırlayarak sıralı uygulamaya geçebilir</p>
                            </div>
                        </Fade>
                        <div className="3xl:mt-28">
                            <div className="lg:mt-28 md:mt-36 mt-68 absolute lg:left-20 md:left-28 left-44">
                                <div className={cn(`3xl:ml-12 lg:mt-60 lg:ml-10  md:mt-40 mt-8 md:w-8 flex`)}>
                                    <p className="lg:-mr-8 md:-mr-0 -mr-3 lg:text-white md:text-white text-black lg:text-2xl md:text-lg text-sm lg:mt-2 md:mt-2 mt-2">Flow</p>
                                    <div className="lg:w-10 md:w-10 w-8 absolute lg:mr-8 md:mr-14 mr-10">
                                        <img src="/images/flow.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute lg:left-0 md:left-0 left-24 lg:ml-5 md:ml-5 lg:mt-16 mt-4">
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
                        <div className="absolute flex lg:mt-20 lg:mr-12">
                            <img className="w-32" src="/images/Flow/flow-medit.png" alt="" />
                        </div>
                        <img className="w-52" src="/images/vector.png" alt="" />
                    </div>
                    <div className="absolute mt-24">
                        <Circle1 fill="#35028E" onClick={handleClick} className={`z-10  transition-all duration-300 delay-2000 ${animationThree ? "animate-ping" : "h-0"} absolute 3xl:ml-28 lg:bottom-4 md:bottom-2 bottom-1 lg:left-24 lg:ml-22 md:left-12 md:ml-24  left-14 ml-14 cursor-pointer`} />
                        <div className="lg:block md:block hidden">
                            <div className="z-10 absolute flex lg:bottom-20 md:bottom-14 lg:mr-6 md:mr-5">
                                <div className={(`absolute w-4 h-4 transition-all duration-300 delay-1300 ${animationThree ? "opacity-1" : "opacity-0"} bg-pink-500 lg:-bottom-2 md:-bottom-2 rounded-full`)}></div>
                                <div className={cn(`border-dashed border-pink-500 border-b-2 transition-all duration-300 delay-1300 ${animationThree ? "lg:w-28 lg:-mr-28 md:w-20 md:-mr-20" : "w-0"} mt-1`)}></div>
                                <div className={cn(`border-dashed border-pink-500 border-r-2 transition-all duration-300 delay-1500 ${animationThree ? "lg:h-24 md:h-14" : "h-0"} lg:-mr-28 md:-mr-20`)}></div>
                                <div className={cn(`border-dashed border-pink-500 border-t-2 transition-all duration-300 delay-1700 ${animationThree ? "lg:w-16 lg:-mr-16 md:w-10 md:-mr-10" : "w-0"} `)}>
                                    <Arrow fill="red" className={`h-4 w-4 absolute flex transform -rotate-90 lg:-mt-2 md:-mt-2 lg:-mr-2 md:-mr-2 transition-all duration-300 delay-1900 ${animationThree ? "opacity-1" : "opacity-0"} `} />
                                </div>
                            </div>
                        </div>
                        {/* resopnsive */}
                        <div>
                            <div className="lg:hidden md:hidden">
                                <div className=" z-10 absolute flex mt-44 mr-2">
                                    <div className={(`w-3 h-3 transition-all duration-300 delay-1300 ${animationThree ? "opacity-1" : "opacity-0"} bg-pink-500 rounded-full`)}></div>
                                    <div className={cn(`absolute border-dashed border-red-500 border-b-2 transition-all duration-300 delay-1500 ${animationThree ? "w-16 -mr-16" : "w-0"} mt-1`)}></div>
                                    <div className={cn(`absolute border-dashed border-red-500 border-r-2 transition-all duration-300 delay-1700 ${animationThree ? "h-10 -mt-9" : "h-0"} -mr-16`)}></div>
                                    <Arrow fill="red" className={(`w-3 h-3 absolute flex transform rotate-180 transition-all duration-300 delay-1900 ${animationThree ? "opacity-1" : "opacity-0"} -mr-4.5 -mt-10`)} />
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
                        {/* cadr */}
                        <div className="-mt-3">
                            <div className="absolute 3xl:bottom-14 3xl:mr-32 lg:bottom-20 lg:mr-28 md:-bottom-10 md:-mr-24 -bottom-25 -mr-22">
                                <Cart background={backgroundLogo}
                                    text={'Kullanıcıların kendi programlarını oluşturabildiği yoga ve meditasyon uygulaması'} />
                            </div>
                        </div>

                        <Flip>
                            <img className="3xl:w-60  lg:w-52 md:w-40 w-32 -mt-4 ml-5 md:-mt-2" src="/images/Flow/flow3.png" alt="" />
                        </Flip>

                    </div>
                </div>
                <div className="mt-16 lg:h-96 h-32 flex">
                    <div className=" w-1/2 lg:h-96 md:h-96 h-28">
                        <div className="absolute 2xl:mr-52 xl:mr-36 lg:mr-10">
                            <Fade delay={3000}>
                                <div className=" text-left text-black 3xl:mr-44 3xl:mt-80 lg:w-52 lg:mt-64 md:mt-52 md:mr-6 md:w-48 mt-16">
                                    <div className="lg:w-52 md:w-44 w-28">
                                        <p className=" lg:text-lg md:text-sm text-xs">Müzik kütüphanesi</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className={cn(style.border, "3xl:h-92 sm:w-96 w-80 h-72 lg:h-100 md:h-96 lg:w-1/2 md:w-1/2 rounded-r-3xl flex")} style={{ backgroundColor: backgroundLogo }}>
                        <Fade delay={1700}>
                            <div className="lg:hidden md:hidden">
                                <div className="h-20 mt-28 mr-5">
                                    <p className="lg:text-xl md:text-xl text-left text-white ">Lorem ipsum dolor</p>
                                    <p className="text-left text-white lg:text-sm md:text-sm text-xs w-32 mr-20">Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do </p>
                                </div>
                            </div>
                        </Fade>
                        <Fade delay={1700}>
                            <div className="lg:block md:block hidden">
                                <div className=" lg:mt-48 lg:mr-72 md:mr-40 md:mt-32 h-20 lg:w-52 mt-20">
                                    <p className="text-left text-white 3xl:text-lg 3xl:w-60 lg:text-sm md:text-sm text-xs w-32 mr-20">Kullanıcı meditasyon müziklerini seçerek arka planda dinleyebilir</p>
                                </div>
                            </div>
                        </Fade>
                        <div className="3xl:mt-28">
                            <div className="lg:mt-28 md:mt-36 mt-68 absolute lg:left-20 md:left-28 left-44">
                                <div className={cn(`3xl:ml-12 lg:mt-60 lg:ml-10  md:mt-40 mt-8 md:w-8 flex`)}>
                                    <p className="lg:-mr-8 md:-mr-0 -mr-3 lg:text-white md:text-white text-black lg:text-2xl md:text-lg text-sm lg:mt-2 md:mt-2 mt-2">Flow</p>
                                    <div className="lg:w-10 md:w-10 w-8 absolute lg:mr-8 md:mr-14 mr-10">
                                        <img src="/images/flow.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute lg:left-0 md:left-0 left-24 lg:ml-5 md:ml-5 lg:mt-16 mt-4">
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
                        <div className="absolute flex lg:mt-24 lg:mr-14">
                            <p className="text-purple-500 lg:text-2xl lg:ml-3 -mt-2">Video</p>
                            <img className="h-7 -mt-2" src="/images/Flow/flow-video.png" alt="" />
                        </div>
                        <img className="w-52" src="/images/vector.png" alt="" />
                    </div>
                    <div className="absolute mt-24">
                        <Circle1 fill="#35028E" onClick={handleClick} className={`z-10  transition-all duration-300 delay-2000 ${animationFour ? "animate-ping" : "h-0"} absolute lg:bottom-4 md:bottom-2 bottom-1 lg:left-4 lg:ml-5 md:left-5 md:ml-3  left-5 ml-1 cursor-pointer`} />
                        <div className="lg:block md:block hidden    ">
                            <div className="flex absolute z-10 lg:mt-24 lg:mr-10 md:mt-16 md:mr-10">
                                <div className={(`absolute w-4 h-4 bg-pink-500 rounded-full transition-all duration-300 delay-1300 ${animationFour ? "opacity-1" : "opacity-0"}`)}></div>
                                <div className={(`absolute border-dashed border-b-2 border-red-500 transition-all duration-300 delay-1300 ${animationFour ? "lg:w-32 lg:-mr-32 md:w-28 md:-mr-28" : "w-0"} lg:mt-2 md:mt-2`)}></div>
                                <Arrow fill="red" className={(`w-4 h-4 absolute flex transform -rotate-90 transition-all duration-300 delay-1500 ${animationFour ? "opacity-1" : "opacity-0"} -mr-4.5 lg:-mr-36 lg:block md:hidden`)} />
                            </div>
                        </div>
                        {/* resopnsive */}
                        <div>
                            <div className="lg:hidden md:hidden">
                                <div className=" z-10 absolute flex mt-44 mr-2">
                                    <div className={(`w-3 h-3 transition-all duration-300 delay-1300 ${animationFour ? "opacity-1" : "opacity-0"} bg-pink-500 rounded-full`)}></div>
                                    <div className={cn(`absolute border-dashed border-red-500 border-b-2 transition-all duration-300 delay-1300 ${animationFour ? "w-16 -mr-16" : "w-0"} mt-1`)}></div>
                                    <div className={cn(`absolute border-dashed border-red-500 border-r-2 transition-all duration-300 delay-1500 ${animationFour ? "h-10 -mt-9" : "h-0"} -mr-16`)}></div>
                                    <Arrow fill="red" className={(`w-3 h-3 absolute flex transform rotate-180 transition-all duration-300 delay-1700 ${animationFour ? "opacity-1" : "opacity-0"} -mr-4.5 -mt-10`)} />
                                </div>
                            </div>
                        </div>

                        <div className={(`z-10 absolute transition-all duration-300 delay-200 ${animationFour ? "opacity-1" : "opacity-0"} lg:w-4 md:w-4 md:h-4 lg:h-4 lg:block md:block hidden bg-pink-600 h-2 w-2 rounded-full lg:mt-14 md:mt-16 mt-16 left-8 lg:left-10`)}>
                            <div className="mt-2 -mr-2">
                                <div className={(`border-dashed border-white transition-all duration-300 delay-700 ${animationFour ? "lg:w-24 md:w-12" : "w-0"} border-t-2 absolute lg:mr-3 md:mr-4`)}></div>
                                <div className={(`border-dashed border-white border-r-2 transition-all duration-300 delay-700 ${animationFour ? "lg:h-28 md:h-10" : "h-0"} lg:w-20 md:w-12 lg:mr-28 md:mr-16`)}></div>
                                <div className={(`border-dashed border-white border-b-2 transition-all duration-300 delay-900 ${animationFour ? " lg:w-28 md:w-16" : "w-0"} lg:mr-28 md:mr-16`)}>
                                    <Arrow fill="#fff" className={(`w-3 h-3 lg:w-4 lg:h-4 absolute flex transform  transition-all duration-300 delay-1000 ${animationFour ? "opacity-1" : "opacity-0"} rotate-90 lg:mr-28 md:mr-16 -mt-11`)} />
                                </div>
                            </div>
                        </div>

                        {/* responsive */}
                        <div className="lg:hidden md:hidden ">
                            <div className={(`z-10 absolute transition-all duration-300 delay-700 ${animationFour ? "opacity-1" : "opacity-0"} bg-pink-600 h-3 w-3 rounded-full mt-5 left-10`)}>
                                <div className={cn(`border-dashed border-white transition-all duration-300 delay-700 ${animationFour ? "w-28" : "w-0"} border-t-2  h-6 mr-1 absolute mt-1 lg:block md:block`)}></div>
                                <div className={cn(`border-dashed border-white border-l-2 transition-all duration-300 delay-900 ${animationFour ? "h-5" : "h-0"} lg:w-52 md:w-53 w-28 lg:mr-5 lg:mt-1 md:mt-1 mt-1 mr-1`)}>
                                    <Arrow fill="#fff" className={cn(`transition-all duration-300 delay-1000 ${animationFour ? "opacity-1" : "opacity-0"} w-3 h-3 absolute flex mt-5 mr-25`)} />
                                </div>
                            </div>
                        </div>
                        {/* cadr */}
                        <div className="">
                            <div className="absolute 3xl:bottom-14 3xl:mr-32 lg:bottom-20 lg:mr-28 md:-bottom-10 md:-mr-24 -bottom-25 -mr-22">
                                <Cart background={backgroundLogo}
                                    text={'Kullanıcıların kendi programlarını oluşturabildiği yoga ve meditasyon uygulaması'} />
                            </div>
                        </div>

                        <Flip>
                            <img className="3xl:w-60  lg:w-52 md:w-40 w-32 -mt-4 ml-5 md:-mt-2" src="/images/Flow/flow4.png" alt="" />
                        </Flip>

                    </div>
                </div>
                <div className="mt-16 lg:h-96 h-32 flex">
                    <div className=" w-1/2 lg:h-96 md:h-96 h-28">
                        <div className="absolute z-10 2xl:mr-36 xl:mr-20 lg:-mr-10">
                            <Fade delay={3000}>
                                <div className="lg:w-60 lg:mt-24 md:mt-20 md:mr-16 md:w-36 mt-16 w-16">
                                    <img className="lg:mr-28 md:mr-16 mr-7" src="/images/Flow/flow-4.png" alt="" />
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className={cn(style.border, "3xl:h-92 sm:w-96 w-80 h-72 lg:h-100 md:h-96 lg:w-1/2 md:w-1/2 rounded-r-3xl flex")} style={{ backgroundColor: backgroundLogo }}>
                        <Fade delay={1700}>
                            <div className="lg:hidden md:hidden">
                                <div className=" h-20 mt-28 mr-5">
                                    <p className="text-left text-white lg:text-sm md:text-sm text-xs w-32 mr-20">Kullanıcılar kütüphanede bulunan videoları kategori bazlı arar ve izleyebilir</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade delay={1700}>
                            <div className="lg:block md:block hidden">
                                <div className=" lg:mt-48 lg:mr-72 md:mr-40 md:mt-32 h-20 mt-20">
                                    <p className="text-left text-white 3xl:text-lg 3xl:w-60 lg:w-52 lg:text-sm md:text-sm text-xs w-32 mr-20">Kullanıcılar kütüphanede bulunan videoları kategori bazlı arar ve izleyebilir</p>
                                </div>
                            </div>
                        </Fade>
                        <div className="3xl:mt-28">
                            <div className="lg:mt-28 md:mt-36 mt-68 absolute lg:left-20 md:left-28 left-44">
                                <div className={cn(`3xl:ml-12 lg:mt-60 lg:ml-10  md:mt-40 mt-8 md:w-8 flex`)}>
                                    <p className="lg:-mr-8 md:-mr-0 -mr-3 lg:text-white md:text-white text-black lg:text-2xl md:text-lg text-sm lg:mt-2 md:mt-2 mt-2">Flow</p>
                                    <div className="lg:w-10 md:w-10 w-8 absolute lg:mr-8 md:mr-14 mr-10">
                                        <img src="/images/flow.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute lg:left-0 md:left-0 left-24 lg:ml-5 md:ml-5 lg:mt-16 mt-4">
                                <div className="lg:mt-80 md:mt-80 mt-81 flex">
                                    <img src="/images/google.png" className="lg:w-25 lg:h-12 md:w-20 md:h-9 mr-2 w-20 h-10 -mt-11 lg:mt-3 md:mt-6" alt="" />
                                    <AppStore className="lg:w-28 lg:h-8  md:w-20 md:h-7 w-20 h-7 lg:mt-5 md:mt-7" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}


export default PageTwo
