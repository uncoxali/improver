import React, { FC, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import Circle1 from '@assets/svg/circle.svg';
import Arrow from '@assets/svg/arrow.svg';
import { useIntersectionObserver } from '@lib/hooks/use-intersection-observer';
import { Flip, Fade } from 'react-awesome-reveal';
import style from '@assets/styles/style.module.css';
import Image from 'next/image';
import Cart from './AllPageCart';
import AppStore from '@assets/svg/app-store.svg';

interface Props {
    backgroundLogo?: string;
}
const PageSeven: FC<Props> = ({ backgroundLogo }) => {
    const [page, setPage] = useState<string>('p1');
    const [animation, setAnimation] = useState<boolean>(false);
    const [animationTwo, setAnimationTwo] = useState<boolean>(false);
    const [animationThree, setAnimationThree] = useState<boolean>(false);
    const [animationFour, setAnimationFour] = useState<boolean>(false);
    const [animationFive, setAnimationFive] = useState<boolean>(false);

    const handleClick = () => {
        let a = page;
        if (a == 'p1') {
            a = 'p2';
        } else if (a == 'p2') {
            a = 'p3';
        } else if (a == 'p3') {
            a = 'p4';
        } else if (a == 'p4') {
            a = 'p5';
        } else if (a == 'p5') {
            a = 'p1';
        } else {
        }
        setPage(a);
    };

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

    useEffect(() => {
        setTimeout(() => {
            if (viewFive) {
                setAnimationFive(true);
            } else {
                setAnimationFive(false);
            }
        }, 500);
    }, [viewFive]);

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
                            <p className="text-pink-500 lg:text-2xl lg:ml-3 -mt-2">Keşfet</p>
                            <img
                                className="h-6 -mt-1"
                                src="/images/Beuticket/beuticket-direction.png"
                                alt=""
                            />
                        </div>
                        <img className="w-52" src="/images/vector.png" alt="" />
                    </div>

                    <div className="absolute mt-24">
                        <Circle1
                            fill="#FF9A9E"
                            onClick={handleClick}
                            className={`z-10   transition-all duration-300 delay-2000 ${
                                animation ? 'animate-ping' : 'h-0'
                            } absolute 3xl:ml-9 lg:bottom-3 md:bottom-2 bottom-1 lg:left-12 lg:ml-6 md:left-14 md:ml-0 left-10 ml-1 cursor-pointer`}
                        />
                        <div className="lg:block md:block hidden">
                            <div className="z-10 absolute flex lg:bottom-48 md:bottom-40 lg:mr-10 md:mr-5">
                                <div
                                    className={`absolute z-10 w-4 h-4 bg-pink-500 rounded-full -bottom-2 transition-all duration-300 delay-1300 ${
                                        animation ? 'opacity-1' : 'opacity-0'
                                    }`}
                                ></div>
                                <div
                                    className={cn(
                                        `border-dashed border-pink-500 border-b-2 transition-all duration-300 delay-1300 ${
                                            animation
                                                ? 'lg:w-32 lg:-mr-32 md:w-16 md:-mr-24'
                                                : 'w-0'
                                        }`,
                                    )}
                                ></div>
                                <div
                                    className={cn(
                                        `border-dashed border-pink-500 border-r-2 transition-all duration-300 delay-1500 ${
                                            animation ? 'lg:h-16 md:h-10' : 'h-0'
                                        } lg:-mr-32 md:-mr-16`,
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
                        <div className="z-10 absolute mt-16 mr-3 lg:hidden md:hidden">
                            <div
                                className={`absolute w-2 h-2 bg-pink-600 transition-all duration-300 delay-1300 ${
                                    animation ? 'opacity-1' : 'opacity-0'
                                } rounded-full`}
                            ></div>
                            <div
                                className={cn(
                                    `absolute border-dashed border-b-2 border-red-500 transition-all duration-300 delay-1300 ${
                                        animation ? 'w-16 -mr-16' : 'w-0'
                                    } mt-1`,
                                )}
                            ></div>
                            <div
                                className={cn(
                                    `absolute border-dashed border-r-2 border-red-500 transition-all duration-300 delay-1500 ${
                                        animation ? 'h-10' : 'h-0'
                                    } -mr-16 mt-1`,
                                )}
                            >
                                <Arrow
                                    fill="red"
                                    className={`h-3 w-3 absolute  transition-all duration-300 delay-1700 -mr-2 mt-9 ${
                                        animation ? 'opacity-1' : 'opacity-0'
                                    }`}
                                />
                            </div>
                        </div>
                        {/* card */}
                        <div className="-mt-3">
                            <div className="absolute 3xl:bottom-14 3xl:mr-32 lg:bottom-20 lg:mr-28 md:-bottom-10 md:-mr-24 -bottom-28 -mr-22">
                                <Cart
                                    background={backgroundLogo}
                                    text={
                                        'Çevrede bulunan işletmeleri keşfedip, randevu ve bilgi alınabilen rezervasyon uygulaması'
                                    }
                                />
                            </div>
                        </div>
                        <Flip>
                            <img
                                className="3xl:w-60  lg:w-52 md:w-40 w-32 -mt-4 ml-5 md:-mt-2"
                                src="/images/Beuticket/beuticket1.png"
                                alt=""
                            />
                        </Flip>
                    </div>
                </div>
                <div className="mt-16 lg:h-96 h-32 flex">
                    <div className=" w-1/2 lg:h-96 md:h-96 h-28">
                        <div className="absolute 2xl:mr-60 xl:mr-40 lg:mr-20 md:mr-10">
                            <Fade delay={3000}>
                                <div className="3xl:mr-28 3xl:mt-60 lg:mt-44 md:mt-28 mt-40 md:mr-5 lg:w-44 md:w-36 w-28">
                                    <p className="text-left text-black 3xl:text-lg 3xl:w-60 lg:w-52 lg:text-sm md:text-sm text-xs">
                                        Kullanıcı filtreleme yaparak çevresinde bulunan hizmetleri
                                        keşfeder
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
                        <div className="3xl:mt-28">
                            <div className="lg:mt-28 md:mt-36 mt-68 absolute lg:left-20 md:left-16 xm:left-44">
                                <div
                                    className={cn(
                                        `lg:mt-60 lg:-mr-1  md:mt-40 mt-10 mr-8 md:w-8 flex`,
                                    )}
                                >
                                    <p className="lg:-mr-3 md:-mr-3 -mr-3 lg:text-white md:text-white text-black lg:text-2xl md:text-lg text-sm lg:mt-2 md:mt-2 mt-2">
                                        Beuticket
                                    </p>
                                    <div className="lg:w-12 md:w-10 w-7 absolute lg:mr-24 md:mr-20 mr-14">
                                        <img src="/images/beuticket.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute lg:left-0 md:left-0 left-24 lg:ml-5 md:ml-5 lg:mt-16 mt-5">
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
                        <div className="absolute flex lg:mt-24 lg:mr-12">
                            <p className="text-pink-500 lg:text-2xl lg:ml-3 -mt-2">Discount</p>
                            <img
                                className="h-6 -mt-1"
                                src="/images/Beuticket/beuticket-discount.png"
                                alt=""
                            />
                        </div>
                        <img className="w-52" src="/images/vector.png" alt="" />
                    </div>
                    <div className="absolute mt-24">
                        <Circle1
                            fill="#FF9A9E"
                            onClick={handleClick}
                            className={`z-10  transition-all duration-300 delay-2000 ${
                                animationTwo ? 'animate-ping' : 'h-0'
                            } absolute 3xl:ml-17 lg:bottom-4 md:bottom-2 bottom-0 lg:left-14 lg:ml-14 md:left-12 md:ml-10 left-12 ml-5 cursor-pointer`}
                        />
                        <div className="z-10 absolute  left-14 flex  lg:mt-20 md:mt-16 mt-16">
                            <div
                                className={`z-10 w-4 h-4 bg-pink-500 transition-all duration-300 delay-1300 ${
                                    animationTwo ? 'opacity-1' : 'opacity-0'
                                } rounded-full absolute`}
                            ></div>
                            <div
                                className={`absolute border-dashed border-white border-b-2 transition-all duration-300 delay-1300 ${
                                    animationTwo ? 'md:w-52 lg:w-52 w-24' : 'w-0'
                                } md:mt-1 lg:mt-2 mt-1`}
                            ></div>
                            <div
                                className={`absolute border-dashed border-white border-l-2 transition-all duration-300 delay-1500 ${
                                    animationTwo ? 'lg:h-14 md:h-7 h-8' : 'h-0'
                                } md:w-52 w-24 mt-2`}
                            ></div>
                            <Arrow
                                fill="#fff"
                                className={`lg:h-4 lg:w-4 md:w-4 md:h-4 w-3 h-3 absolute  transition-all duration-300 delay-1700  ${
                                    animationTwo ? 'opacity-1' : 'opacity-0'
                                } md:mr-15 md:mt-7 lg:mt-14 mr-21 mt-8`}
                            />
                        </div>
                        <div
                            className={`z-10 absolute transition-all duration-300 delay-700 ${
                                animationTwo ? 'opacity-1' : 'opacity-0'
                            } lg:mt-22 md:mt-16 mt-10 -mr-14 md:-mr-20 lg:-mr-22`}
                        >
                            <img
                                className="3xl:h-20 3xl:mt-5 lg:w-32 lg:h-18 md:w-28 w-20 h-12 mt-0.5 rounded"
                                src="/images/Beuticket/beuticket-1.png"
                                alt=""
                            />
                        </div>
                        {/* card */}
                        <div className="-mt-0.6">
                            <div className="absolute 3xl:bottom-14 3xl:mr-32 lg:bottom-20 lg:mr-28 md:-bottom-10 md:-mr-24 -bottom-28 -mr-22">
                                <Cart
                                    background={backgroundLogo}
                                    text={
                                        'Çevrede bulunan işletmeleri keşfedip, randevu ve bilgi alınabilen rezervasyon uygulaması'
                                    }
                                />
                            </div>
                        </div>
                        <Flip>
                            <img
                                className="3xl:w-60  lg:w-52 md:w-40 w-32 -mt-4 ml-5 md:-mt-2"
                                src="/images/Beuticket/beuticket2.png"
                                alt=""
                            />
                        </Flip>
                    </div>
                </div>
                <div className="mt-16 lg:h-96 h-32 flex">
                    <div className=" w-1/2 lg:h-96 md:h-96 h-28"></div>
                    <div
                        className={cn(
                            style.border,
                            '3xl:h-92 sm:w-96 w-80 h-72 lg:h-100 md:h-96 lg:w-1/2 md:w-1/2 rounded-r-3xl flex',
                        )}
                        style={{ backgroundColor: backgroundLogo }}
                    >
                        <Fade delay={3000}>
                            <div className="3xl:mr-10 lg:mt-52 lg:mr-16 md:mr-36 h-20 mt-36 mr-5">
                                <p className="text-left text-white 3xl:w-60 3xl:text-lg lg:w-52 lg:text-sm md:text-sm text-xs w-32 mr-20">
                                    Firmalar kampanya ve indirim oluşturarak kullanıcılara
                                    ulaştırabilir
                                </p>
                            </div>
                        </Fade>
                        <div className="3xl:mt-28">
                            <div className="lg:mt-28 md:mt-36 mt-68 absolute lg:left-20 md:left-16 xm:left-44">
                                <div
                                    className={cn(
                                        `lg:mt-60 lg:-mr-1  md:mt-40 mt-10 mr-8 md:w-8 flex`,
                                    )}
                                >
                                    <p className="lg:-mr-3 md:-mr-3 -mr-3 lg:text-white md:text-white text-black lg:text-2xl md:text-lg text-sm lg:mt-2 md:mt-2 mt-2">
                                        Beuticket
                                    </p>
                                    <div className="lg:w-12 md:w-10 w-7 absolute lg:mr-24 md:mr-20 mr-14">
                                        <img src="/images/beuticket.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute lg:left-0 md:left-0 left-24 lg:ml-5 md:ml-5 lg:mt-16 mt-5">
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
                        <div className="absolute flex lg:mt-24 lg:mr-14">
                            <p className="text-pink-500 lg:text-2xl lg:ml-3 -mt-2">Helps</p>
                            <img
                                className="h-6 -mt-1"
                                src="/images/Beuticket/beuticket-question.png"
                                alt=""
                            />
                        </div>
                        <img className="w-52" src="/images/vector.png" alt="" />
                    </div>
                    <div className="absolute mt-24">
                        <Circle1
                            fill="#FF9A9E"
                            onClick={handleClick}
                            className={`z-10  transition-all duration-300 delay-2000 ${
                                animationThree ? 'animate-ping' : 'h-0'
                            } absolute 3xl:ml-28 lg:bottom-3 md:bottom-2 bottom-0 lg:left-16 lg:ml-22 md:left-12 md:ml-16 left-14 ml-9 cursor-pointer`}
                        />
                        <div className="z-10 absolute  left-14 flex  lg:mt-20 md:mt-16 mt-16">
                            <div
                                className={`z-10 w-4 h-4 bg-pink-500 transition-all duration-300 delay-1300 ${
                                    animationThree ? 'opacity-1' : 'opacity-0'
                                } rounded-full absolute`}
                            ></div>
                            <div
                                className={`absolute border-dashed border-white border-b-2 transition-all duration-300 delay-1300 ${
                                    animationThree ? 'md:w-52 lg:w-52 w-24' : 'w-0'
                                } md:mt-1 lg:mt-2 mt-1`}
                            ></div>
                            <div
                                className={`absolute border-dashed border-white border-l-2 transition-all duration-300 delay-1500 ${
                                    animationThree ? 'lg:h-14 md:h-7 h-8' : 'h-0'
                                } md:w-52 w-24 mt-2`}
                            ></div>
                            <Arrow
                                fill="#fff"
                                className={`lg:h-4 lg:w-4 md:w-4 md:h-4 w-3 h-3 absolute  transition-all duration-300 delay-1700  ${
                                    animationThree ? 'opacity-1' : 'opacity-0'
                                } md:mr-15 md:mt-7 lg:mt-14 mr-21 mt-8`}
                            />
                        </div>
                        {/* <div className={(`z-10 absolute transition-all duration-300 delay-200 ${animationTwo ? "opacity-1" : "opacity-0"} lg:mt-22 md:mt-16 mt-12 -mr-14 md:-mr-20 lg:-mr-22`)}>
                            <img className="lg:w-32 lg:h-20 md:w-28 w-20 h-10" src="/images/Beuticket/beuticket-1.png" alt="" />
                        </div> */}
                        {/* card */}
                        <div className="-mt-0.6">
                            <div className="absolute 3xl:bottom-14 3xl:mr-32 lg:bottom-20 lg:mr-28 md:-bottom-10 md:-mr-24 -bottom-28 -mr-22">
                                <Cart
                                    background={backgroundLogo}
                                    text={
                                        'Çevrede bulunan işletmeleri keşfedip, randevu ve bilgi alınabilen rezervasyon uygulaması'
                                    }
                                />
                            </div>
                        </div>
                        <Flip>
                            <img
                                className="3xl:w-60  lg:w-52 md:w-40 w-32 -mt-4 ml-5 md:-mt-2"
                                src="/images/Beuticket/beuticket3.png"
                                alt=""
                            />
                        </Flip>
                    </div>
                </div>
                <div className="mt-16 lg:h-96 h-32 flex">
                    <div className=" w-1/2 lg:h-96 md:h-96 h-28">
                        <div className="absolute">
                            {/* <Fade delay={1500}>
                                <div className="lg:mt-32 md:mt-28 mt-40 md:mr-5 lg:mr-52 lg:w-44 md:w-36 w-28">
                                    <p className="lg:text-xl text-left text-black text-sm">Lorem ipsum dolor</p>
                                    <p className="text-left text-black lg:text-sm md:text-sm text-xs">Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do </p>
                                </div>
                            </Fade> */}
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
                            <div className="3xl:mr-10 lg:mt-52 lg:mr-16 md:mr-36 h-20 mt-36 mr-5">
                                <p className="text-left text-white 3xl:w-60 3xl:text-lg lg:w-52 lg:text-sm md:text-sm text-xs w-32 mr-20">
                                    Kullanıcı erişmek istediği cevaplara hızlıca ulaşır
                                </p>
                            </div>
                        </Fade>
                        <div className="3xl:mt-28">
                            <div className="lg:mt-28 md:mt-36 mt-68 absolute lg:left-20 md:left-16 xm:left-44">
                                <div
                                    className={cn(
                                        `lg:mt-60 lg:-mr-1  md:mt-40 mt-10 mr-8 md:w-8 flex`,
                                    )}
                                >
                                    <p className="lg:-mr-3 md:-mr-3 -mr-3 lg:text-white md:text-white text-black lg:text-2xl md:text-lg text-sm lg:mt-2 md:mt-2 mt-2">
                                        Beuticket
                                    </p>
                                    <div className="lg:w-12 md:w-10 w-7 absolute lg:mr-24 md:mr-20 mr-14">
                                        <img src="/images/beuticket.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute lg:left-0 md:left-0 left-24 lg:ml-5 md:ml-5 lg:mt-16 mt-5">
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
                        <div className="absolute flex lg:mt-24 lg:mr-14">
                            <p className="text-pink-500 lg:text-2xl lg:ml-3 -mt-2">Home</p>
                            <img
                                className="h-6 -mt-1"
                                src="/images/Beuticket/beuticket-wallet.png"
                                alt=""
                            />
                        </div>
                        <img className="w-52" src="/images/vector.png" alt="" />
                    </div>
                    <div className="absolute mt-24">
                        <Circle1
                            fill="#FF9A9E"
                            onClick={handleClick}
                            className={`z-10  transition-all duration-300 delay-2000 ${
                                animationFour ? 'animate-ping' : 'h-0'
                            } absolute 3xl:ml-32 lg:bottom-3 md:bottom-2 bottom-0 lg:left-22 lg:ml-24 md:left-21 md:ml-14 left-24 ml-5 cursor-pointer`}
                        />
                        <div className="lg:block md:block hidden">
                            <div className="z-10 absolute flex lg:bottom-48 md:bottom-12 lg:mr-10 md:mr-5">
                                <div
                                    className={`absolute w-4 h-4 transition-all duration-300 delay-1300 ${
                                        animationFour ? 'opacity-1' : 'opacity-0'
                                    } bg-pink-500 lg:-bottom-2 md:-bottom-2 rounded-full`}
                                ></div>
                                <div
                                    className={cn(
                                        `border-dashed border-pink-500 border-b-2 transition-all duration-300 delay-1300 ${
                                            animationFour
                                                ? 'lg:w-28 lg:-mr-28 md:w-20 md:-mr-20'
                                                : 'w-0'
                                        } mt-1`,
                                    )}
                                ></div>
                                <div
                                    className={cn(
                                        `border-dashed border-pink-500 border-r-2 transition-all duration-300 delay-1500 ${
                                            animationFour ? 'lg:h-16 md:h-28' : 'h-0'
                                        } lg:-mr-28 md:-mr-20`,
                                    )}
                                ></div>
                                <div
                                    className={cn(
                                        `border-dashed border-pink-500 border-t-2 transition-all duration-300 delay-1700 ${
                                            animationFour
                                                ? 'lg:w-16 lg:-mr-16 md:w-10 md:-mr-10'
                                                : 'w-0'
                                        } `,
                                    )}
                                >
                                    <Arrow
                                        fill="red"
                                        className={`h-4 w-4 absolute flex transform -rotate-90 lg:-mt-2 md:-mt-2 lg:-mr-2 md:-mr-2 transition-all duration-300 delay-1900 ${
                                            animationFour ? 'opacity-1' : 'opacity-0'
                                        } `}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* resopnsive */}
                        <div>
                            <div className="lg:hidden md:hidden">
                                <div className=" z-10 absolute flex mt-48 mr-2">
                                    <div
                                        className={`w-3 h-3  transition-all duration-300 delay-1300 ${
                                            animationFour ? 'opacity-1' : 'opacity-0'
                                        } bg-pink-500 rounded-full`}
                                    ></div>
                                    <div
                                        className={cn(
                                            `absolute border-dashed border-red-500 border-b-2 transition-all duration-300 delay-1300 ${
                                                animationFour ? 'w-16 -mr-16' : 'w-0'
                                            } mt-1`,
                                        )}
                                    ></div>
                                    <div
                                        className={cn(
                                            `absolute border-dashed border-red-500 border-r-2 transition-all duration-300 delay-1500 ${
                                                animationFour ? 'h-10 -mt-9' : 'h-0'
                                            } -mr-16`,
                                        )}
                                    ></div>
                                    <Arrow
                                        fill="red"
                                        className={`w-3 h-3 absolute flex transform rotate-180 transition-all duration-300 delay-1700 ${
                                            animationFour ? 'opacity-1' : 'opacity-0'
                                        } -mr-4.5 -mt-10`}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="z-10 absolute  left-14 flex  lg:mt-24 md:mt-20 mt-14">
                            <div
                                className={`z-10 lg:w-4 lg:h-4 md:w-4 transition-all duration-300 delay-700 ${
                                    animationFour ? 'opacity-1' : 'opacity-0'
                                } md:h-4 w-3 h-3 bg-pink-500 rounded-full absolute`}
                            ></div>
                            <div
                                className={`absolute border-dashed border-white border-b-2 transition-all duration-300 delay-700 ${
                                    animationFour ? 'md:w-52 lg:w-52 w-24' : 'w-0'
                                } md:mt-2 lg:mt-2 mt-1`}
                            ></div>
                            <div
                                className={`absolute border-dashed border-white border-l-2 transition-all duration-300 delay-900 ${
                                    animationFour ? 'lg:h-14 md:h-14 h-16' : 'h-0'
                                } lg:mt-2 md:mt-2 md:w-52 w-24 mt-1`}
                            ></div>
                            <Arrow
                                fill="#fff"
                                className={`lg:h-4 lg:w-4 md:w-4 md:h-4 w-3 h-3 absolute  transition-all duration-300 delay-1000  ${
                                    animationFour ? 'opacity-1' : 'opacity-0'
                                } md:mr-15 md:mt-14 lg:mt-14 mr-21 mt-16`}
                            />
                        </div>
                        {/* card */}
                        <div className="absolute 3xl:bottom-14 3xl:mr-32 lg:bottom-20 lg:mr-28 md:-bottom-10 md:-mr-24 -bottom-28 -mr-22">
                            <Cart
                                background={backgroundLogo}
                                text={
                                    'Çevrede bulunan işletmeleri keşfedip, randevu ve bilgi alınabilen rezervasyon uygulaması'
                                }
                            />
                        </div>
                        <Flip>
                            <img
                                className="3xl:w-60  lg:w-52 md:w-40 w-32 -mt-4 ml-5 md:-mt-2"
                                src="/images/Beuticket/beuticket4.png"
                                alt=""
                            />
                        </Flip>
                    </div>
                </div>
                <div className="mt-16 lg:h-96 h-32 flex">
                    <div className=" w-1/2 lg:h-96 md:h-96 h-28">
                        <div className="z-10 absolute 3xl:mr-72 2xl:mr-60 xl:mr-44 lg:mr-20 md:mr-20">
                            <Fade delay={3000}>
                                <div className="text-left text-black lg:w-80 lg:mt-10 md:mt-16 md:w-48 w-44 mt-7 -mr-4">
                                    <Image
                                        width="500"
                                        height="600"
                                        src="/images/Beuticket/beuticket-2.png"
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
                        <Fade delay={1500} className="lg:mt-10 md:mt-10 mt-5">
                            <div className="3xl:mr-10 lg:mt-52 lg:mr-16 md:mr-16 h-20 mt-36 mr-5">
                                <p className="text-left text-white 3xl:text-lg 3xl:w-60 lg:w-52 lg:text-sm md:text-sm text-xs w-32 mr-20">
                                    Firmalar indirim kuponu ve hediye bakiye oluşturabilir
                                </p>
                            </div>
                        </Fade>
                        <div className="3xl:mt-28">
                            <div className="lg:mt-28 md:mt-36 mt-68 absolute lg:left-20 md:left-16 xm:left-44">
                                <div
                                    className={cn(
                                        `lg:mt-60 lg:-mr-1  md:mt-40 mt-10 mr-8 md:w-8 flex`,
                                    )}
                                >
                                    <p className="lg:-mr-3 md:-mr-3 -mr-3 lg:text-white md:text-white text-black lg:text-2xl md:text-lg text-sm lg:mt-2 md:mt-2 mt-2">
                                        Beuticket
                                    </p>
                                    <div className="lg:w-12 md:w-10 w-7 absolute lg:mr-24 md:mr-20 mr-14">
                                        <img src="/images/beuticket.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute lg:left-0 md:left-0 left-24 lg:ml-5 md:ml-5 lg:mt-16 mt-5">
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

            {/* page 5 */}
            <div ref={divFive} className={cn(page == 'p5' ? 'block' : 'hidden', 'w-full')}>
                <div className="flex justify-around">
                    <div className={cn(' absolute left-9 lg:block md:hidden hidden -mt-4')}>
                        <div className="absolute flex lg:mt-24 lg:mr-14">
                            <p className="text-pink-500 lg:text-2xl lg:ml-3 -mt-2">Menu</p>
                            <img
                                className="h-6 -mt-1"
                                src="/images/Beuticket/beuticket-menu.png"
                                alt=""
                            />
                        </div>
                        <img className="w-52" src="/images/vector.png" alt="" />
                    </div>
                    <div className="absolute mt-24">
                        <Circle1
                            fill="#FF9A9E"
                            onClick={handleClick}
                            className={`z-10  transition-all duration-300 delay-2000 ${
                                animationFive ? 'animate-ping' : 'h-0'
                            } absolute lg:bottom-3 md:bottom-2 bottom-0 lg:left-1 lg:ml-8 md:left-4 md:ml-3 left-6 cursor-pointer`}
                        />
                        <div className="lg:block md:block hidden">
                            <div className="z-10 absolute flex lg:bottom-60 md:bottom-52 lg:mr-10 md:mr-5">
                                <div
                                    className={`absolute w-4 h-4 transition-all duration-300 delay-1300 ${
                                        animationFive ? 'opacity-1' : 'opacity-0'
                                    } bg-pink-500 lg:-bottom-2 md:-bottom-2 rounded-full`}
                                ></div>
                                <div
                                    className={cn(
                                        `border-dashed border-pink-500 border-b-2 transition-all duration-300 delay-1300 ${
                                            animationFive
                                                ? 'lg:w-28 lg:-mr-28 md:w-20 md:-mr-20'
                                                : 'w-0'
                                        } mt-1`,
                                    )}
                                ></div>
                                <div
                                    className={cn(
                                        `border-dashed border-pink-500 border-r-2 transition-all duration-300 delay-1500 ${
                                            animationFive ? 'lg:h-16 md:h-8' : 'h-0'
                                        } lg:-mr-28 md:-mr-20`,
                                    )}
                                ></div>
                                <div
                                    className={cn(
                                        `border-dashed border-pink-500 border-t-2 transition-all duration-300 delay-1700 ${
                                            animationFive
                                                ? 'lg:w-16 lg:-mr-16 md:w-10 md:-mr-10'
                                                : 'w-0'
                                        } `,
                                    )}
                                >
                                    <Arrow
                                        fill="red"
                                        className={`h-4 w-4 absolute flex transform -rotate-90 lg:-mt-2 md:-mt-2 lg:-mr-2 md:-mr-2 transition-all duration-300 delay-1900 ${
                                            animationFive ? 'opacity-1' : 'opacity-0'
                                        } `}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* resopnsive */}
                        <div>
                            <div className="lg:hidden md:hidden">
                                <div className=" z-10 absolute flex mt-48 mr-2">
                                    <div
                                        className={`w-3 h-3  transition-all duration-200 delay-1300 ${
                                            animationFive ? 'opacity-1' : 'opacity-0'
                                        } bg-pink-500 rounded-full`}
                                    ></div>
                                    <div
                                        className={cn(
                                            `absolute border-dashed border-red-500 border-b-2 transition-all duration-300 delay-1300 ${
                                                animationFive ? 'w-16 -mr-16' : 'w-0'
                                            } mt-1`,
                                        )}
                                    ></div>
                                    <div
                                        className={cn(
                                            `absolute border-dashed border-red-500 border-r-2 transition-all duration-300 delay-1500 ${
                                                animationFive ? 'h-10 -mt-9' : 'h-0'
                                            } -mr-16`,
                                        )}
                                    ></div>
                                    <Arrow
                                        fill="red"
                                        className={`w-3 h-3 absolute flex transform rotate-180 transition-all duration-300 delay-1700 ${
                                            animationFive ? 'opacity-1' : 'opacity-0'
                                        } -mr-4.5 -mt-10`}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* card */}
                        <div className="-mt-0.6">
                            <div className="absolute 3xl:bottom-14 3xl:mr-32 lg:bottom-20 lg:mr-28 md:-bottom-10 md:-mr-24 -bottom-28 -mr-22">
                                <Cart
                                    background={backgroundLogo}
                                    text={
                                        'Çevrede bulunan işletmeleri keşfedip, randevu ve bilgi alınabilen rezervasyon uygulaması'
                                    }
                                />
                            </div>
                        </div>
                        <Flip>
                            <img
                                className="3xl:w-60  lg:w-52 md:w-40 w-32 -mt-4 ml-5 md:-mt-2"
                                src="/images/Beuticket/beuticket5.png"
                                alt=""
                            />
                        </Flip>
                    </div>
                </div>
                <div className="mt-16 lg:h-96 h-32 flex">
                    <div className=" w-1/2 lg:h-96 md:h-96 h-28">
                        <div className="z-10 absolute 2xl:mr-60 xl:mr-52 lg:mr-28 md:mr-16">
                            <Fade delay={3000} className="lg:mt-10 md:mt-10 mt-5">
                                <div className="3xl:mr-28 3xl:mt-44 lg:mt-32 mt-16 lg:w-48 md:w-44 w-32 -mr-5">
                                    <p className="text-left text-black 3xl:text-lg 3xl:w-60 lg:w-52 lg:text-sm md:text-sm text-xs">
                                        Kullanıcılar profil detaylarına ulaşır, düzenler, bakiye
                                        ekler vb. birçok işlemi gerçekleştirebilir
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
                        <div className="3xl:mt-28">
                            <div className="lg:mt-28 md:mt-36 mt-68 absolute lg:left-20 md:left-16 xm:left-44">
                                <div
                                    className={cn(
                                        `lg:mt-60 lg:-mr-1  md:mt-40 mt-10 mr-8 md:w-8 flex`,
                                    )}
                                >
                                    <p className="lg:-mr-3 md:-mr-3 -mr-3 lg:text-white md:text-white text-black lg:text-2xl md:text-lg text-sm lg:mt-2 md:mt-2 mt-2">
                                        Beuticket
                                    </p>
                                    <div className="lg:w-12 md:w-10 w-7 absolute lg:mr-24 md:mr-20 mr-14">
                                        <img src="/images/beuticket.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute lg:left-0 md:left-0 left-24 lg:ml-5 md:ml-5 lg:mt-16 mt-5">
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

export default PageSeven;
