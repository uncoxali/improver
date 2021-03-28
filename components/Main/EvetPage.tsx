import React, { FC, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import Circle1 from '@assets/svg/circle.svg';
import Arrow from '@assets/svg/arrow.svg';
import style from '@assets/styles/style.module.css';
import Cart from './AllPageCart';
import AppStore from '@assets/svg/app-store.svg';

import { Flip, Fade } from 'react-awesome-reveal';
import { useIntersectionObserver } from '@lib/hooks/use-intersection-observer';

interface Props {
    backgroundLogo?: string;
}
const PageFive: FC<Props> = ({ backgroundLogo }) => {
    const [page, setPage] = useState<string>('p1');
    const [animation, setAnimation] = useState<boolean>(false);
    const [animationTwo, setAnimationTwo] = useState<boolean>(false);
    const [animationThree, setAnimationThree] = useState<boolean>(false);
    const [animationFour, setAnimationFour] = useState<boolean>(false);

    const handleClick = () => {
        let a = page;
        if (a == 'p1') {
            a = 'p2';
        } else if (a == 'p2') {
            a = 'p3';
        } else if (a == 'p3') {
            a = 'p4';
        } else if (a == 'p4') {
            a = 'p1';
        }
        setPage(a);
    };

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
                setAnimation(true);
            } else {
                setAnimation(false);
            }
        }, 500);
    }, [view]);

    useEffect(() => {
        setTimeout(() => {
            if (viewTwo) {
                setAnimationTwo(true);
            } else {
                setAnimationTwo(false);
            }
        }, 500);
    }, [viewTwo]);

    useEffect(() => {
        setTimeout(() => {
            if (viewThree) {
                setAnimationThree(true);
            } else {
                setAnimationThree(false);
            }
        }, 500);
    }, [viewThree]);

    useEffect(() => {
        setTimeout(() => {
            if (viewFour) {
                setAnimationFour(true);
            } else {
                setAnimationFour(false);
            }
        }, 500);
    }, [viewFour]);

    return (
        <div
            className="relative w-full max-w-8xl mx-auto  flex flex-col min-h-screen 3xl:mt-28"
            style={{ direction: 'rtl' }}
        >
            {/* page 1 */}
            <div ref={divOne} className={cn(page == 'p1' ? 'block' : 'hidden', 'w-full')}>
                <div className="flex justify-around">
                    <div className={cn(' absolute left-9 lg:block md:hidden hidden -mt-4')}>
                        <div className="absolute flex lg:mt-24 lg:mr-14">
                            <p className="text-white lg:text-2xl lg:ml-3 -mt-2">Home</p>
                            <img className="h-6 -mt-1" src="/images/evet/home.png" alt="" />
                        </div>
                        <img className="w-52" src="/images/vector.png" alt="" />
                    </div>

                    <div className="absolute mt-24">
                        <Circle1
                            fill="#FDD96C"
                            onClick={handleClick}
                            className={`z-10  transition-all duration-300 delay-2000 ${
                                animation ? 'animate-ping' : 'h-0'
                            } absolute 3xl:left-20 3xl:bottom-2 lg:bottom-2 md:bottom-1 bottom-0 lg:left-16 lg:ml-5 md:left-20 left-14 cursor-pointer`}
                        />
                        <div className="lg:block md:block hidden">
                            <div className="z-10 absolute flex 3xl:bottom-52 lg:bottom-48 md:bottom-40 lg:mr-10 md:mr-5">
                                <div
                                    className={cn(
                                        `border-dashed border-pink-500 border-b-2 transition-all duration-300 delay-1300 ${
                                            animation
                                                ? 'lg:w-20 lg:-mr-32 md:w-16 md:-mr-24'
                                                : 'w-0'
                                        }`,
                                    )}
                                ></div>
                                <div
                                    className={cn(
                                        `border-dashed border-pink-500 border-r-2 transition-all duration-300 delay-1500 ${
                                            animation ? 'lg:h-16 md:h-10' : 'h-0'
                                        } lg:-mr-20 md:-mr-16`,
                                    )}
                                ></div>
                                <div
                                    className={cn(
                                        `border-dashed border-pink-500 border-t-2 transition-all duration-300 delay-1700 ${
                                            animation
                                                ? 'lg:w-16 lg:-mr-16 md:w-10 md:-mr-10'
                                                : 'w-0'
                                        } `,
                                    )}
                                >
                                    <Arrow
                                        fill="red"
                                        className={`h-4 w-4 absolute flex transform -rotate-90 lg:-mt-2 md:-mt-2 lg:-mr-2 md:-mr-2 delay-1900 ${
                                            animation ? 'opacity-1' : 'opacity-0'
                                        } transition-all duration-300`}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* responsive */}
                        <div className="lg:hidden md:hidden">
                            <div className=" z-10 absolute flex mt-36 mr-2">
                                <div
                                    className={`z-10 w-3 h-3 bg-pink-500 transition-all duration-300 delay-1300 ${
                                        animation ? 'opacity-1' : 'opacity-0'
                                    } rounded-full absolute`}
                                ></div>
                                <div
                                    className={cn(
                                        `absolute border-dashed border-red-500 border-b-2 transition-all duration-300 delay-1500 ${
                                            animation ? 'w-16 -mr-16' : 'w-0'
                                        } mt-1`,
                                    )}
                                ></div>
                                <div
                                    className={cn(
                                        `absolute border-dashed border-red-500 border-r-2 transition-all duration-300 delay-1700 ${
                                            animation ? 'h-7 -mt-6' : 'h-0'
                                        } -mr-16`,
                                    )}
                                ></div>
                                <Arrow
                                    fill="red"
                                    className={`w-3 h-3 absolute flex transform rotate-180 transition-all duration-300 delay-1900 ${
                                        animation ? 'opacity-1' : 'opacity-0'
                                    } -mr-4.5 -mt-7`}
                                />
                            </div>
                        </div>
                        <div className="z-10 absolute  left-14 flex  lg:mt-24 md:mt-16 mt-16">
                            <div
                                className={`z-10 w-3 h-3 bg-pink-500 transition-all duration-300 delay-700 ${
                                    animation ? 'opacity-1' : 'opacity-0'
                                } rounded-full absolute`}
                            ></div>
                            <div
                                className={`absolute border-dashed border-white border-b-2 transition-all duration-300 delay-700 ${
                                    animation ? 'md:w-52 lg:w-52 w-24' : 'w-0'
                                } md:mt-1 lg:mt-1 mt-1`}
                            ></div>
                            <div
                                className={`absolute border-dashed border-white border-l-2 transition-all duration-300 delay-900 ${
                                    animation ? 'lg:h-14 md:h-7 h-8' : 'h-0'
                                } md:w-52 w-24 mt-1`}
                            ></div>
                            <Arrow
                                fill="#fff"
                                className={`lg:h-4 lg:w-4 md:w-4 md:h-4 w-3 h-3 absolute  transition-all duration-300 delay-1000  ${
                                    animation ? 'opacity-1' : 'opacity-0'
                                } md:mr-15 md:mt-7 lg:mt-14 mr-21 mt-7`}
                            />
                        </div>
                        {/* card */}
                        <div className="">
                            <div className="absolute 3xl:bottom-14 3xl:mr-32 lg:bottom-20 lg:mr-28 md:-bottom-10 md:-mr-24 -bottom-28 -mr-22">
                                <Cart
                                    background={'white'}
                                    text={
                                        'Detaylı ürün ve kategori oluşturulmasını destekleyen yeni nesil E-Ticaret sistemi'
                                    }
                                />
                            </div>
                        </div>
                        <Flip>
                            <img
                                className="3xl:w-60  lg:w-52 md:w-40 w-32 -mt-4 ml-5 md:-mt-2"
                                src="/images/evet/1.png"
                                alt=""
                            />
                        </Flip>
                        <div className="z-10 absolute -mt-4">
                            <div
                                className={`3xl:-mt-60 lg:-mt-52 md:-mt-40 -mt-32 -mr-9 lg:block md:block hidden  transition-all duration-300 delay-1300 ${
                                    animation ? 'opacity-1' : 'opacity-0'
                                } bg-blue-400 md:w-10 md:h-10 3xl:w-14 3xl:-mr-10 3xl:h-14 lg:w-12 lg:h-13 h-5 rounded`}
                            >
                                <img src="/images/evet/evet-p1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 lg:h-96 h-32 flex">
                    <div className=" w-1/2 lg:h-96 md:h-96 h-28">
                        <div className="absolute">
                            <Fade delay={3000}>
                                <div className="3xl:mt-52 3xl:mr-72 lg:mt-44 md:mt-28 mt-24 md:mr-5 lg:mr-16 xl:mr-44 2xl:mr-64 lg:w-44 md:w-36 w-28">
                                    <p className="text-left text-black 3xl:text-lg  lg:text-sm md:text-sm text-xs">
                                        Ürün kategorisi
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div
                        className={cn(
                            style.border,
                            '3xl:h-92 sm:w-96 w-80 h-72 lg:h-100 md:h-96 lg:w-1/2 md:w-1/2 rounded-r-3xl flex',
                        )}
                        style={{ backgroundColor: backgroundLogo }}
                    >
                        <Fade delay={1500}>
                            <div className=" lg:mt-52 lg:mr-16 md:mr-36 h-20  mt-36 mr-5">
                                <p className="text-left text-white 3xl:text-lg 3xl:w-60 lg:w-52 lg:text-sm md:text-sm text-xs w-32 mr-20">
                                    Kişilerin kampanyalı ürünlere ulaşabileceği indirim ve reklam
                                    alanı
                                </p>
                            </div>
                        </Fade>
                        <div className="3xl:mt-28 xl:mt-8">
                            <div className="3xl:-ml-16 2xl:-ml-20 xl:-ml-16 lg:mt-28 md:mt-36 mt-68 absolute lg:left-20 md:left-16 xm:left-48">
                                <div className={cn(` lg:mt-60  md:mt-40 mt-7 flex`)}>
                                    <p className="lg:-mr-7 md:mr-3 lg:text-white md:text-white text-black lg:text-2xl md:text-lg text-sm lg:mt-2 md:mt-2 mt-2">
                                        Evet
                                    </p>
                                    <div className="lg:w-12 md:w-10 w-10 absolute lg:mr-10 mr-10">
                                        <img
                                            className={cn(style.shadowBtn, 'rounded-xl ')}
                                            src="/images/evet.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute lg:left-0 md:left-0 left-24 lg:ml-5 md:ml-5 ml-3 lg:mt-16 mt-5">
                                <div className="lg:mt-80 md:mt-80 mt-81 flex">
                                    <img
                                        src="/images/google.png"
                                        className="lg:w-25 lg:h-12 md:w-20 md:h-9 mr-2 w-20 h-10 -mt-11 lg:mt-3 md:mt-6"
                                        alt=""
                                    />
                                    <AppStore className="lg:w-28 lg:h-8  md:w-20 md:h-7 w-20 h-7 lg:mt-5 md:mt-7" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* page 2 */}
            <div ref={divTwo} className={cn(page == 'p2' ? 'block' : 'hidden', 'w-full')}>
                <div className="flex justify-around">
                    <div className={cn(' absolute left-9 lg:block md:hidden hidden -mt-4')}>
                        <div className="absolute flex lg:mt-24 lg:mr-10">
                            <p className="text-white lg:text-lg lg:ml-3 -mt-2">Categories</p>
                            <img className="h-6 -mt-2" src="/images/evet/layers.png" alt="" />
                        </div>
                        <img className="w-52" src="/images/vector.png" alt="" />
                    </div>
                    <div className="absolute mt-24">
                        <Circle1
                            fill="#FDD96C"
                            onClick={handleClick}
                            className={`z-10  transition-all duration-300 delay-2000 ${
                                animationTwo ? 'animate-ping' : 'h-0'
                            } absolute lg:bottom-2 md:bottom-1 bottom-0 3xl:left-24 3xl:bottom-2 lg:left-22 lg:ml-12 md:left-24 left-16 ml-5 cursor-pointer`}
                        />
                        <div className="z-10 lg:block md:block hidden absolute lg:mt-72 lg:mr-5 md:mt-52 md:mr-1">
                            <div className=" flex md:mt-3">
                                {/* <div className="h-3 w-3 bg-pink-500 rounded-full"></div> */}
                                <div
                                    className={`z-10 w-4 h-4 bg-pink-500 transition-all duration-300 delay-1300 ${
                                        animationTwo ? 'opacity-1' : 'opacity-0'
                                    } rounded-full absolute`}
                                ></div>
                                <div
                                    className={`absolute border-dashed border-b-2 border-red-500 transition-all duration-300 delay-1500 ${
                                        animationTwo
                                            ? ' lg:w-40 lg:-mr-40 md:w-32 md:-mr-32'
                                            : 'w-0'
                                    } lg:mt-2 md:mt-1 `}
                                ></div>
                                <Arrow
                                    fill="red"
                                    className={`w-4 h-4 absolute flex transform -rotate-90 transition-all duration-300 delay-1700 ${
                                        animationTwo ? 'opacity-1' : 'opacity-0'
                                    } lg:-mr-44 md:-mr-36 md:-mt-1 lg:mt-0.5`}
                                />
                            </div>
                        </div>
                        {/* responsive */}
                        <div className="lg:hidden md:hidden">
                            <div className=" z-10 absolute flex mt-40 mr-2">
                                <div
                                    className={`z-10 w-3 h-3 bg-pink-500 transition-all duration-300 delay-1300 ${
                                        animationTwo ? 'opacity-1' : 'opacity-0'
                                    } rounded-full absolute`}
                                ></div>
                                <div
                                    className={cn(
                                        `absolute border-dashed border-red-500 border-b-2 transition-all duration-300 delay-1500 ${
                                            animationTwo ? 'w-16 -mr-16' : 'w-0'
                                        } mt-1`,
                                    )}
                                ></div>
                                <div
                                    className={cn(
                                        `absolute border-dashed border-red-500 border-r-2 transition-all duration-300 delay-1700 ${
                                            animationTwo ? 'h-7 -mt-6' : 'h-0'
                                        } -mr-16`,
                                    )}
                                ></div>
                                <Arrow
                                    fill="red"
                                    className={`w-3 h-3 absolute flex transform rotate-180 transition-all duration-300 delay-1900 ${
                                        animationTwo ? 'opacity-1' : 'opacity-0'
                                    } -mr-4.5 -mt-7`}
                                />
                            </div>
                        </div>
                        <div
                            className={`z-10 absolute  lg:w-4 md:w-3 md:h-3 lg:h-4 lg:block md:block hidden duration-300 delay-700 ${
                                animationTwo ? 'opacity-1' : 'opacity-0'
                            } bg-pink-600 h-3 w-3 rounded-full lg:mt-28 md:mt-16 mt-16 left-8 lg:left-10 z-100 shadow`}
                        >
                            <div className="mt-2 -mr-2">
                                <div
                                    className={`border-dashed border-white transition-all duration-300 delay-700 ${
                                        animationTwo ? 'lg:w-28 md:w-16' : 'w-0'
                                    } border-t-2 absolute`}
                                ></div>
                                <div
                                    className={`border-dashed border-white border-r-2 transition-all duration-300 delay-700 ${
                                        animationTwo ? 'lg:h-12 md:h-10' : 'h-0'
                                    } lg:w-20 md:w-12 lg:mr-28 md:mr-16`}
                                ></div>
                                <div
                                    className={`border-dashed border-white border-b-2 transition-all duration-300 delay-900 ${
                                        animationTwo ? ' lg:w-28 md:w-16' : 'w-0'
                                    } lg:mr-28 md:mr-16`}
                                >
                                    <Arrow
                                        fill="#fff"
                                        className={`w-3 h-3 lg:w-4 lg:h-4 absolute flex transform  transition-all duration-300 delay-1000 ${
                                            animationTwo ? 'opacity-1' : 'opacity-0'
                                        } rotate-90 lg:mr-28 md:mr-16 -mt-11`}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="lg:hidden md:hidden ">
                            <div
                                className={`z-10 absolute  lg:w-4 md:w-4 md:h-4 lg:h-4 transition-all duration-300 delay-700 ${
                                    animationTwo ? 'opacity-1' : 'opacity-0'
                                } lg:block md:block bg-pink-600 h-3 w-3 rounded-full lg:mt-28 md:mt-16 mt-16 left-10 lg:left-10 z-100 `}
                            >
                                <div className="absolute mr-2">
                                    <div
                                        className={cn(
                                            `border-dashed border-white transition-all duration-300 delay-700 ${
                                                animationTwo ? 'lg:w-52 md:w-52 w-28' : 'w-0'
                                            } border-t-2  h-6 mr-1 absolute mt-1 lg:block md:block`,
                                        )}
                                    ></div>
                                    <div
                                        className={cn(
                                            `border-dashed border-white border-l-2 transition-all duration-300 delay-900 ${
                                                animationTwo ? 'lg:h-10 md:h-10 h-5' : 'h-0'
                                            } lg:w-52 md:w-53 w-28 lg:mr-5 lg:mt-1 md:mt-1 mt-1 mr-1`,
                                        )}
                                    >
                                        <Arrow
                                            fill="#fff"
                                            className={cn(
                                                `transition-all duration-300 delay-1000 ${
                                                    animationTwo ? 'opacity-1' : 'opacity-0'
                                                } lg:h-4 md:h-4 md:w-4 lg:w-4 w-3 h-3 absolute flex lg:mt-9 md:mt-8 lg:mr-15 md:mr-17 lg:-ml-13 mt-5 mr-25`,
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card */}
                        <div className="-mt-3">
                            <div className="absolute 3xl:bottom-14 3xl:mr-32 lg:bottom-20 lg:mr-28 md:-bottom-10 md:-mr-24 -bottom-28 -mr-22">
                                <Cart
                                    background={'white'}
                                    text={
                                        'Detaylı ürün ve kategori oluşturulmasını destekleyen yeni nesil E-Ticaret sistemi'
                                    }
                                />
                            </div>
                        </div>
                        <Flip>
                            <img
                                className=" 3xl:w-60  lg:w-52 md:w-40 w-32 -mt-4 ml-5 md:-mt-2"
                                src="/images/evet/2.png"
                                alt=""
                            />
                        </Flip>
                    </div>
                </div>
                <div className="mt-16 lg:h-96 h-32 flex">
                    <div className=" w-1/2 lg:h-96 md:h-96 h-28">
                        <div className="z-10 absolute lg:mr-5 xl:mr-40 2xl:mr-52">
                            <Fade delay={2000}>
                                <div className="lg:mr-40 p-2 lg:mt-28 md:mt-24 md:mr-24 mr-4 mt-8 rounded-2xl bg-yellow-300">
                                    <img
                                        className="lg:w-40 md:w-32 w-16"
                                        src="/images/evet/evet-p2.png"
                                        alt=""
                                    />
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div
                        className={cn(
                            style.border,
                            '3xl:h-92 sm:w-96 w-80 h-72 lg:h-100 md:h-96 lg:w-1/2 md:w-1/2 rounded-r-3xl flex',
                        )}
                        style={{ backgroundColor: backgroundLogo }}
                    >
                        <Fade delay={1500}>
                            <div className="lg:hidden md:hidden">
                                <div className=" lg:mt-52 lg:mr-36 md:mr-36 h-20 lg:w-52 mt-36 mr-5">
                                    <p className="text-left text-white lg:text-sm md:text-sm text-xs w-32 mr-20">
                                        Detaylandırılmış kategori menüsü
                                    </p>
                                </div>
                            </div>
                        </Fade>
                        <Fade delay={1500}>
                            <div className="lg:block md:block hidden">
                                <div className=" lg:mt-48 lg:mr-72 md:mr-40 md:mt-32 h-20 lg:w-52 mt-20">
                                    <p className="text-left text-white 3xl:text-lg 3xl:w-52 lg:text-sm md:text-sm text-xs w-32 mr-20">
                                        Detaylandırılmış kategori menüsü
                                    </p>
                                </div>
                            </div>
                        </Fade>
                        <div className="3xl:mt-28 xl:mt-8">
                            <div className="3xl:-ml-16 2xl:-ml-20 xl:-ml-16 lg:mt-28 md:mt-36 mt-68 absolute lg:left-20 md:left-16 xm:left-48">
                                <div className={cn(` lg:mt-60  md:mt-40 mt-7 flex`)}>
                                    <p className="lg:-mr-7 md:mr-3 lg:text-white md:text-white text-black lg:text-2xl md:text-lg text-sm lg:mt-2 md:mt-2 mt-2">
                                        Evet
                                    </p>
                                    <div className="lg:w-12 md:w-10 w-10 absolute lg:mr-10 mr-10">
                                        <img
                                            className={cn(style.shadowBtn, 'rounded-xl ')}
                                            src="/images/evet.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute lg:left-0 md:left-0 left-24 lg:ml-5 md:ml-5 ml-3 lg:mt-16 mt-5">
                                <div className="lg:mt-80 md:mt-80 mt-81 flex">
                                    <img
                                        src="/images/google.png"
                                        className="lg:w-25 lg:h-12 md:w-20 md:h-9 mr-2 w-20 h-10 -mt-11 lg:mt-3 md:mt-6"
                                        alt=""
                                    />
                                    <AppStore className="lg:w-28 lg:h-8  md:w-20 md:h-7 w-20 h-7 lg:mt-5 md:mt-7" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* page 3 */}
            <div ref={divThree} className={cn(page == 'p3' ? 'block' : 'hidden', 'w-full')}>
                <div className="flex justify-around">
                    <div className={cn(' absolute left-9 lg:block md:hidden hidden -mt-4')}>
                        <div className="absolute flex lg:mt-24 lg:mr-12">
                            <p className="text-white lg:text-lg lg:ml-3 -mt-2">Shopping</p>
                            <img className="h-6 -mt-1" src="/images/evet/shopping.png" alt="" />
                        </div>
                        <img className="w-52" src="/images/vector.png" alt="" />
                    </div>
                    <div className="absolute mt-24">
                        <Circle1
                            fill="#FDD96C"
                            onClick={handleClick}
                            className={`absolute z-10 ransition-all duration-300 delay-2000 ${
                                animationThree ? 'animate-ping' : 'h-0'
                            } lg:bottom-2 md:bottom-1 bottom-0 3xl:left-36 3xl:bottom-3 lg:left-32 lg:ml-14 md:left-40 md:-ml-2 left-22 ml-7 cursor-pointer`}
                        />
                        <div className="lg:block md:block hidden">
                            <div className="z-10 absolute flex lg:bottom-48 md:bottom-40 lg:mr-10 md:mr-5">
                                <div
                                    className={`z-10 w-4 h-4 bg-pink-500 transition-all duration-300 delay-1300 ${
                                        animationThree ? 'opacity-1' : 'opacity-0'
                                    } rounded-full lg:-bottom-2 md:-bottom-1 absolute -mr-6`}
                                ></div>
                                <div
                                    className={cn(
                                        `border-dashed border-pink-500 border-b-2 transition-all duration-300 delay-1500 ${
                                            animationThree
                                                ? 'lg:w-28 lg:-mr-32 md:w-10 md:-mr-16'
                                                : 'w-0'
                                        }`,
                                    )}
                                ></div>
                                <div
                                    className={cn(
                                        `border-dashed border-pink-500 border-r-2 transition-all duration-300 delay-1700 ${
                                            animationThree ? 'lg:h-16 md:h-10' : 'h-0'
                                        } lg:-mr-28 md:-mr-10`,
                                    )}
                                ></div>
                                <div
                                    className={cn(
                                        `border-dashed border-pink-500 border-t-2 transition-all duration-300 delay-1900 ${
                                            animationThree
                                                ? 'lg:w-16 lg:-mr-16 md:w-10 md:-mr-10'
                                                : 'w-0'
                                        } `,
                                    )}
                                >
                                    <Arrow
                                        fill="red"
                                        className={`h-4 w-4 absolute flex transform -rotate-90 lg:-mt-2 md:-mt-2 lg:-mr-2 md:-mr-2 delay-2000 ${
                                            animationThree ? 'opacity-1' : 'opacity-0'
                                        } transition-all duration-300`}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className={`z-10 absolute  lg:w-4 md:w-3 md:h-3 lg:h-4 lg:block md:block hidden duration-300 delay-700 ${
                                animationThree ? 'opacity-1' : 'opacity-0'
                            } bg-pink-600 h-2 w-2 rounded-full lg:mt-14 md:mt-12 mt-16 left-8 lg:left-10 z-100 shadow`}
                        >
                            <div className="mt-2 -mr-2">
                                <div
                                    className={`border-dashed border-white transition-all duration-300 delay-700 ${
                                        animationThree ? 'lg:w-28 md:w-16' : 'w-0'
                                    } border-t-2 absolute`}
                                ></div>
                                <div
                                    className={`border-dashed border-white border-r-2 transition-all duration-300 delay-700 ${
                                        animationThree ? 'lg:h-28 md:h-10' : 'h-0'
                                    } lg:w-20 md:w-12 lg:mr-28 md:mr-16`}
                                ></div>
                                <div
                                    className={`border-dashed border-white border-b-2 transition-all duration-300 delay-900 ${
                                        animationThree ? ' lg:w-28 md:w-16' : 'w-0'
                                    } lg:mr-28 md:mr-16`}
                                >
                                    <Arrow
                                        fill="#fff"
                                        className={`w-3 h-3 lg:w-4 lg:h-4 absolute flex transform  transition-all duration-300 delay-1000 ${
                                            animationThree ? 'opacity-1' : 'opacity-0'
                                        } rotate-90 lg:mr-28 md:mr-16 -mt-11`}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* responsive */}
                        <div className="lg:hidden md:hidden ">
                            <div
                                className={`z-10 absolute  lg:w-4 md:w-4 md:h-4 lg:h-4 transition-all duration-300 delay-700 ${
                                    animationThree ? 'opacity-1' : 'opacity-0'
                                } lg:block md:block bg-pink-600 h-3 w-3 rounded-full lg:mt-28 md:mt-16 mt-16 left-10 lg:left-10 z-100 shadow opacity-70`}
                            >
                                <div
                                    className={cn(
                                        `border-dashed border-white transition-all duration-300 delay-700 ${
                                            animationThree ? 'lg:w-52 md:w-52 w-28' : 'w-0'
                                        } border-t-2  h-6 mr-1 absolute mt-1 lg:block md:block`,
                                    )}
                                ></div>
                                <div
                                    className={cn(
                                        `border-dashed border-white border-l-2 transition-all duration-300 delay-700 ${
                                            animationThree ? 'lg:h-10 md:h-10 h-5' : 'h-0'
                                        } lg:w-52 md:w-53 w-28 lg:mr-5 lg:mt-1 md:mt-1 mt-1 mr-1`,
                                    )}
                                >
                                    <Arrow
                                        fill="#fff"
                                        className={cn(
                                            `transition-all duration-300 delay-900 ${
                                                animationThree ? 'opacity-1' : 'opacity-0'
                                            } lg:h-4 md:h-4 md:w-4 lg:w-4 w-3 h-3 absolute flex lg:mt-9 md:mt-8 lg:mr-15 md:mr-17 lg:-ml-13 mt-5 mr-25`,
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className={`absolute z-10 bottom-28 w-3 h-3 bg-pink-500 ${
                                animationThree ? 'opacity-1' : 'opacity-0'
                            } rounded-full lg:hidden md:hidden`}
                        >
                            <div
                                className={`border-dashed border-red-500 border-b-2  transition-all duration-300 delay-1300 ${
                                    animationThree ? 'w-10  -mr-10' : 'w-0'
                                } mt-1`}
                            ></div>
                        </div>
                        {/* card */}
                        <div className="-mt-3">
                            <div className="absolute 3xl:bottom-14 3xl:mr-32 lg:bottom-20 lg:mr-28 md:-bottom-10 md:-mr-24 -bottom-28 -mr-22">
                                <Cart
                                    background={'white'}
                                    text={
                                        'Detaylı ürün ve kategori oluşturulmasını destekleyen yeni nesil E-Ticaret sistemi'
                                    }
                                />
                            </div>
                        </div>
                        <Flip>
                            <img
                                className=" 3xl:w-60 object-cover lg:w-52 md:w-40 w-32 -mt-4 ml-5 md:-mt-2"
                                src="/images/evet/3.png"
                                alt=""
                            />
                        </Flip>
                    </div>
                </div>
                <div className="mt-16 lg:h-96 h-32 flex">
                    <div className=" w-1/2 lg:h-96 md:h-96 h-28">
                        <div className="z-10 absolute 3xl:mr-80 2xl:mr-52 xl:mr-32 lg:mr-28 md:mr-28 sm:mr-28 mr-5 mt-16">
                            <Fade delay={2500}>
                                <img
                                    className="3xl:w-52 3xl:h-96 md:w-36 md:h-64 lg:w-48 lg:h-80 md:mt-16 sm:w-36 sm:h-60 w-16 h-28"
                                    src="/images/evet/evet-p3.png"
                                    alt=""
                                />
                            </Fade>
                        </div>
                    </div>
                    <div
                        className={cn(
                            style.border,
                            '3xl:h-92 sm:w-96 w-80 h-72 lg:h-100 md:h-96 lg:w-1/2 md:w-1/2 rounded-r-3xl flex',
                        )}
                        style={{ backgroundColor: backgroundLogo }}
                    >
                        <Fade delay={1700}>
                            <div className="lg:hidden md:hidden">
                                <div className=" lg:mt-52 lg:mr-36 md:mr-36 h-20 lg:w-52 mt-36 mr-5">
                                    <p className="text-left text-white lg:text-sm md:text-sm text-xs w-32 mr-20">
                                        Sepete eklenen ürünler çıkış yapmadan incelenip, satın
                                        alınabilir
                                    </p>
                                </div>
                            </div>
                        </Fade>
                        <Fade delay={1700}>
                            <div className="lg:block md:block hidden">
                                <div className=" lg:mt-48 lg:mr-72 md:mr-40 md:mt-32 h-20 mt-20">
                                    <p className="text-left text-white 3xl:text-lg 3xl:w-60 lg:w-52 lg:text-sm md:text-sm text-xs w-32 mr-20">
                                        Sepete eklenen ürünler çıkış yapmadan incelenip, satın
                                        alınabilir
                                    </p>
                                </div>
                            </div>
                        </Fade>
                        <div className="3xl:mt-28 xl:mt-8">
                            <div className="3xl:-ml-16 2xl:-ml-20 xl:-ml-16 lg:mt-28 md:mt-36 mt-68 absolute lg:left-20 md:left-16 xm:left-48">
                                <div className={cn(` lg:mt-60  md:mt-40 mt-7 flex`)}>
                                    <p className="lg:-mr-7 md:mr-3 lg:text-white md:text-white text-black lg:text-2xl md:text-lg text-sm lg:mt-2 md:mt-2 mt-2">
                                        Evet
                                    </p>
                                    <div className="lg:w-12 md:w-10 w-10 absolute lg:mr-10 mr-10">
                                        <img
                                            className={cn(style.shadowBtn, 'rounded-xl ')}
                                            src="/images/evet.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute lg:left-0 md:left-0 left-24 lg:ml-5 md:ml-5 ml-3 lg:mt-16 mt-5">
                                <div className="lg:mt-80 md:mt-80 mt-81 flex">
                                    <img
                                        src="/images/google.png"
                                        className="lg:w-25 lg:h-12 md:w-20 md:h-9 mr-2 w-20 h-10 -mt-11 lg:mt-3 md:mt-6"
                                        alt=""
                                    />
                                    <AppStore className="lg:w-28 lg:h-8  md:w-20 md:h-7 w-20 h-7 lg:mt-5 md:mt-7" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* page 4 */}

            <div ref={divFour} className={cn(page == 'p4' ? 'block' : 'hidden', 'w-full')}>
                <div className="flex justify-around">
                    <div className={cn(' absolute left-9 lg:block md:hidden hidden -mt-4')}>
                        <div className="absolute flex lg:mt-24 lg:mr-12">
                            <p className="text-white lg:text-2xl lg:ml-3 -mt-2">Profile</p>
                            <img className="h-6 -mt-1" src="/images/evet/user.png" alt="" />
                        </div>
                        <img className="w-52" src="/images/vector.png" alt="" />
                    </div>
                    <div className="absolute mt-24">
                        <Circle1
                            fill="#FDD96C"
                            onClick={handleClick}
                            className={`z-10  transition-all duration-300 delay-2000 ${
                                animationFour ? 'animate-ping' : 'h-0'
                            } absolute lg:bottom-2 md:bottom-1 bottom-0 lg:left-9 md:left-8 left-6  cursor-pointer`}
                        />
                        <div className="lg:block md:block hidden">
                            <div className="z-10 absolute flex lg:mt-12 md:mt-10 mt-5">
                                <div
                                    className={`lg:w-4 md:w-4 lg:h-4 md:h-4 w-2 h-2 transition-all duration-300 delay-1300 ${
                                        animationFour ? 'opacity-1' : 'opacity-0'
                                    } bg-pink-500 rounded-full mr-6`}
                                ></div>
                                <div
                                    className={`border-dashed border-red-500 border-t-2 transition-all duration-300 delay-1300 ${
                                        animationFour
                                            ? 'lg:w-32 md:w-24 lg:-mr-32 md:-mr-24'
                                            : 'w-0'
                                    } mt-2`}
                                ></div>
                                <div
                                    className={`border-dashed border-red-500 border-r-2 transition-all duration-300 delay-1500 ${
                                        animationFour ? 'lg:h-48 md:h-40' : 'h-0'
                                    } lg:-mr-32 lg:mt-2 md:mt-2 md:-mr-24`}
                                ></div>
                                <div
                                    className={`border-dashed border-red-500 border-b-2  transition-all duration-300 delay-1700 ${
                                        animationFour
                                            ? ' lg:w-24 md:w-16 lg:-mr-24  md:-mr-16'
                                            : 'w-0'
                                    } lg:mt-2`}
                                ></div>
                                <Arrow
                                    fill="red"
                                    className={`transition-all duration-300 delay-1900 ${
                                        animationFour ? 'opacity-1' : 'opacity-0'
                                    } absolute transform -rotate-90 h-4 w-4 lg:mt-48 md:mt-40 md:-mr-32 lg:-mr-48`}
                                />
                            </div>
                        </div>
                        {/* responsive */}
                        <div className="z-10 absolute mt-16 mr-3 lg:hidden md:hidden">
                            <div
                                className={`absolute  transition-all duration-300 delay-1300 ${
                                    animationFour ? 'opacity-1' : 'opacity-0'
                                } w-3 h-3 bg-pink-600 rounded-full`}
                            ></div>
                            <div
                                className={cn(
                                    `absolute border-dashed border-b-2 border-red-500 transition-all duration-300 delay-1500 ${
                                        animationFour ? 'w-16 -mr-16' : 'w-0'
                                    } mt-1`,
                                )}
                            ></div>
                            <div
                                className={cn(
                                    `absolute border-dashed border-r-2 border-red-500 transition-all duration-300 delay-1700 ${
                                        animationFour ? 'h-10' : 'h-0'
                                    } -mr-16 mt-1`,
                                )}
                            >
                                <Arrow
                                    fill="red"
                                    className={`h-3 w-3 absolute  transition-all duration-300 delay-1900 -mr-2 mt-9 ${
                                        animationFour ? 'opacity-1' : 'opacity-0'
                                    }`}
                                />
                            </div>
                        </div>
                        {/* card */}
                        <div className="-mt-3">
                            <div className="absolute 3xl:bottom-14 3xl:mr-32 lg:bottom-20 lg:mr-28 md:-bottom-10 md:-mr-24 -bottom-28 -mr-22">
                                <Cart
                                    background={'white'}
                                    text={
                                        'Detaylı ürün ve kategori oluşturulmasını destekleyen yeni nesil E-Ticaret sistemi'
                                    }
                                />
                            </div>
                        </div>
                        <Flip>
                            <img
                                className="3xl:w-60  lg:w-52 md:w-40 w-32 -mt-4 ml-5 md:-mt-2"
                                src="/images/evet/4.png"
                                alt=""
                            />
                        </Flip>
                    </div>
                </div>
                <div className="mt-16 lg:h-96 h-32 flex">
                    <div className=" w-1/2 lg:h-96 md:h-96 h-28">
                        <Fade delay={3000}>
                            <div className="z-10 absolute 2xl:mr-40 xl:mr-32 lg:mr-5 md:mt-10">
                                <div className="3xl:mr-60 lg:mt-52 md:mt-44 mt-40 md:mr-1 lg:w-44 md:w-36 w-28">
                                    <p className="text-left 3xl:text-lg lg:text-sm md:text-sm text-xs">
                                        Profil kişiselleştirme ve destek ekranı
                                    </p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div
                        className={cn(
                            style.border,
                            '3xl:h-92 sm:w-96 w-80 h-72 lg:h-100 md:h-96 lg:w-1/2 md:w-1/2 rounded-r-3xl flex',
                        )}
                        style={{ backgroundColor: backgroundLogo }}
                    >
                        <div className="3xl:mt-28 xl:mt-8">
                            <div className="3xl:-ml-16 2xl:-ml-20 xl:-ml-16 lg:mt-28 md:mt-36 mt-68 absolute lg:left-20 md:left-16 xm:left-48">
                                <div className={cn(` lg:mt-60  md:mt-40 mt-7 flex`)}>
                                    <p className="lg:-mr-7 md:mr-3 lg:text-white md:text-white text-black lg:text-2xl md:text-lg text-sm lg:mt-2 md:mt-2 mt-2">
                                        Evet
                                    </p>
                                    <div className="lg:w-12 md:w-10 w-10 absolute lg:mr-10 mr-10">
                                        <img
                                            className={cn(style.shadowBtn, 'rounded-xl ')}
                                            src="/images/evet.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute lg:left-0 md:left-0 left-24 lg:ml-5 md:ml-5 ml-3 lg:mt-16 mt-5">
                                <div className="lg:mt-80 md:mt-80 mt-81 flex">
                                    <img
                                        src="/images/google.png"
                                        className="lg:w-25 lg:h-12 md:w-20 md:h-9 mr-2 w-20 h-10 -mt-11 lg:mt-3 md:mt-6"
                                        alt=""
                                    />
                                    <AppStore className="lg:w-28 lg:h-8  md:w-20 md:h-7 w-20 h-7 lg:mt-5 md:mt-7" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageFive;
