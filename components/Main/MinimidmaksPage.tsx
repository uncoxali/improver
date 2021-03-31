import React, { FC, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import Circle1 from '@assets/svg/circle.svg';
import Arrow from '@assets/svg/arrow.svg';
import { Bounce, Fade } from 'react-awesome-reveal';
import { useIntersectionObserver } from '@lib/hooks/use-intersection-observer';
import style from '@assets/styles/style.module.css';
import Cart from './AllPageCart';
import AppStore from '@assets/svg/app-store.svg';

interface Props {
    backgroundLogo?: string;
}
const PageSix: FC<Props> = ({ backgroundLogo }) => {
    const divOne = useRef<HTMLDivElement>(null);
    const divTwo = useRef<HTMLDivElement>(null);
    const divThree = useRef<HTMLDivElement>(null);
    const divFour = useRef<HTMLDivElement>(null);
    const divFive = useRef<HTMLDivElement>(null);

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
            a = 'p1';
        }
        setPage(a);
    };

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
                        <div className="absolute flex lg:mt-24 lg:mr-16">
                            <p className="text-green-550 lg:text-xl lg:ml-3 -mt-2">Keşfet</p>
                            <img
                                className="h-5 -mt-1"
                                src="/images/minimidmaks/minimidimaks-menu.png"
                                alt=""
                            />
                        </div>
                        <img className="w-52" src="/images/vector.png" alt="" />
                    </div>

                    <div className="absolute mt-24">
                        <Circle1
                            fill="#67D4DD"
                            onClick={handleClick}
                            className={`z-10  transition-all duration-300 delay-2000 ${
                                animation ? 'animate-ping' : 'h-0'
                            } absolute 3xl:ml-14 lg:bottom-2 md:bottom-1 bottom-0 lg:left-10 lg:ml-12 md:left-12 md:ml-5 left-12 ml-2 cursor-pointer`}
                        />
                        <div className="lg:block md:block hidden">
                            <div className="z-10 absolute flex lg:bottom-48 md:bottom-12 lg:mr-10 md:mr-5">
                                <div
                                    className={`absolute w-4 h-4 transition-all duration-300 delay-1300 ${
                                        animation ? 'opacity-1' : 'opacity-0'
                                    } bg-pink-500 lg:-bottom-2 md:-bottom-2 rounded-full`}
                                ></div>
                                <div
                                    className={cn(
                                        `border-dashed border-pink-500 border-b-2 transition-all duration-300 delay-1300 ${
                                            animation
                                                ? 'lg:w-28 lg:-mr-28 md:w-20 md:-mr-20'
                                                : 'w-0'
                                        } mt-1`,
                                    )}
                                ></div>
                                <div
                                    className={cn(
                                        `border-dashed border-pink-500 border-r-2 transition-all duration-300 delay-1500 ${
                                            animation ? 'lg:h-16 md:h-28' : 'h-0'
                                        } lg:-mr-28 md:-mr-20`,
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
                                        className={`h-4 w-4 absolute flex transform -rotate-90 lg:-mt-2 md:-mt-2 lg:-mr-2 md:-mr-2 transition-all duration-300 delay-1900 ${
                                            animation ? 'opacity-1' : 'opacity-0'
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
                                            animation ? 'opacity-1' : 'opacity-0'
                                        } bg-pink-500 rounded-full`}
                                    ></div>
                                    <div
                                        className={cn(
                                            `absolute border-dashed border-red-500 border-b-2 transition-all duration-300 delay-1300 ${
                                                animation ? 'w-16 -mr-16' : 'w-0'
                                            } mt-1`,
                                        )}
                                    ></div>
                                    <div
                                        className={cn(
                                            `absolute border-dashed border-red-500 border-r-2 transition-all duration-300 delay-1500 ${
                                                animation ? 'h-10 -mt-9' : 'h-0'
                                            } -mr-16`,
                                        )}
                                    ></div>
                                    <Arrow
                                        fill="red"
                                        className={`w-3 h-3 absolute flex transform rotate-180 transition-all duration-300 delay-1700 ${
                                            animation ? 'opacity-1' : 'opacity-0'
                                        } -mr-4.5 -mt-10`}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="z-10 absolute  left-14 flex  lg:mt-24 md:mt-20 mt-14">
                            <div
                                className={`z-10 lg:w-4 lg:h-4 md:w-4 transition-all duration-300 delay-700 ${
                                    animation ? 'opacity-1' : 'opacity-0'
                                } md:h-4 w-3 h-3 bg-pink-500 rounded-full absolute`}
                            ></div>
                            <div
                                className={`absolute border-dashed border-white border-b-2 transition-all duration-300 delay-700 ${
                                    animation ? 'md:w-52 lg:w-52 w-24' : 'w-0'
                                } md:mt-2 lg:mt-2 mt-1`}
                            ></div>
                            <div
                                className={`absolute border-dashed border-white border-l-2 transition-all duration-300 delay-900 ${
                                    animation ? 'lg:h-14 md:h-14 h-16' : 'h-0'
                                } lg:mt-2 md:mt-2 md:w-52 w-24 mt-1`}
                            ></div>
                            <Arrow
                                fill="#fff"
                                className={`lg:h-4 lg:w-4 md:w-4 md:h-4 w-3 h-3 absolute  transition-all duration-300 delay-1000  ${
                                    animation ? 'opacity-1' : 'opacity-0'
                                } md:mr-15 md:mt-14 lg:mt-14 mr-21 mt-16`}
                            />
                        </div>
                        {/* card */}
                        <div className="-mt-0.6">
                            <div className="absolute 3xl:bottom-14 3xl:mr-32 lg:bottom-20 lg:mr-28 md:-bottom-10 md:-mr-24 -bottom-28 -mr-22">
                                <Cart
                                    background={backgroundLogo}
                                    text={
                                        'Fotoğrafları kalıcı hatıralara dönüştürebilen, mobil baskı uygulaması'
                                    }
                                />
                            </div>
                        </div>
                        <Bounce>
                            <img
                                className="3xl:w-60  lg:w-52 md:w-40 w-32 -mt-4 ml-5 md:-mt-2"
                                src="/images/minimidmaks/minimidimaks1.png"
                                alt=""
                            />
                        </Bounce>
                    </div>
                </div>
                <div className="mt-16 lg:h-96 h-32 flex">
                    <div className=" w-1/2 lg:h-96 md:h-96 h-28">
                        <div className="z-10 absolute 3xl:mr-72 2xl:mr-60 xl:mr-52 lg:mr-20 md:mr-20">
                            <Fade delay={3000}>
                                <div className="text-left text-black lg:w-80 lg:mt-20 md:mt-16 md:w-72 w-28 mt-7">
                                    <img
                                        className="shadow-2xl"
                                        src="/images/minimidmaks/minimidimaks-1.png"
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
                            <div className="3xl:mr-10 lg:mt-52 lg:mr-16 md:mr-36 h-20 mt-36 mr-6">
                                <p className="text-left text-white 3xl:text-lg lg:w-52 3xl:w-60 lg:text-sm md:text-sm text-xs w-32 mr-20">
                                    Kullanıcılar fotoğraflarını çeşitli baskı teknikleriyle sipariş
                                    edebilir
                                </p>
                            </div>
                        </Fade>
                        <div className="3xl:mt-28">
                            <div className="3xl:ml-5 lg:mt-28 md:mt-32 mt-68 absolute lg:left-20 md:left-1 -mr-52">
                                <div className={cn(`lg:mt-60  md:mt-44 mt-7 md:w-8 flex`)}>
                                    <p className="lg:-mr-32 md:-mr-28 -mr-5 lg:text-white md:text-white text-black lg:text-2xl md:text-lg text-sm lg:mt-2 md:mt-2 mt-2">
                                        MiniMidiMaks
                                    </p>
                                    <div className="lg:w-12 md:w-10 w-10 absolute lg:mr-6 md:-mr-0 mr-16">
                                        <img
                                            className={cn(style.shadowBtn, 'rounded-lg')}
                                            src="/images/Minilogo.png"
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
                        <div className="absolute flex lg:mt-24 lg:mr-16">
                            <p className="text-green-550 lg:text-xl lg:ml-2 -mt-2 -mr-3">
                                Taslaklar
                            </p>
                            <div className="-mt-1">
                                <img
                                    className="w-5"
                                    src="/images/minimidmaks/minimidimaks-layer.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <img className="w-52" src="/images/vector.png" alt="" />
                    </div>
                    <div className="absolute mt-24">
                        <Circle1
                            fill="#67D4DD"
                            onClick={handleClick}
                            className={`z-10  transition-all duration-300 delay-2000 ${
                                animationTwo ? 'animate-ping' : 'h-0'
                            } absolute 3xl:ml-24 lg:bottom-2 md:bottom-1 bottom-0 lg:left-14 lg:ml-20 md:left-20 md:ml-6 left-14 ml-7 cursor-pointer`}
                        />
                        <div className="lg:block md:block hidden">
                            <div className="z-10 absolute flex lg:bottom-52 md:bottom-12 lg:mr-10 md:mr-5">
                                <div
                                    className={`absolute w-4 h-4 transition-all duration-300 delay-1300 ${
                                        animationTwo ? 'opacity-1' : 'opacity-0'
                                    } bg-pink-500 lg:-bottom-2 md:-bottom-2 rounded-full`}
                                ></div>
                                <div
                                    className={cn(
                                        `border-dashed border-pink-500 border-b-2 transition-all duration-300 delay-1300 ${
                                            animationTwo
                                                ? 'lg:w-28 lg:-mr-28 md:w-20 md:-mr-20'
                                                : 'w-0'
                                        } mt-1`,
                                    )}
                                ></div>
                                <div
                                    className={cn(
                                        `border-dashed border-pink-500 border-r-2 transition-all duration-300 delay-1500 ${
                                            animationTwo ? 'lg:h-16 md:h-28' : 'h-0'
                                        } lg:-mr-28 md:-mr-20`,
                                    )}
                                ></div>
                                <div
                                    className={cn(
                                        `border-dashed border-pink-500 border-t-2 transition-all duration-300 delay-1700 ${
                                            animationTwo
                                                ? 'lg:w-16 lg:-mr-16 md:w-10 md:-mr-10'
                                                : 'w-0'
                                        } `,
                                    )}
                                >
                                    <Arrow
                                        fill="red"
                                        className={`h-4 w-4 absolute flex transform -rotate-90 lg:-mt-2 md:-mt-2 lg:-mr-2 md:-mr-2 transition-all duration-300 delay-1900 ${
                                            animationTwo ? 'opacity-1' : 'opacity-0'
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
                                            animationTwo ? 'opacity-1' : 'opacity-0'
                                        } bg-pink-500 rounded-full`}
                                    ></div>
                                    <div
                                        className={cn(
                                            `absolute border-dashed border-red-500 border-b-2 transition-all duration-300 delay-1300 ${
                                                animationTwo ? 'w-16 -mr-16' : 'w-0'
                                            } mt-1`,
                                        )}
                                    ></div>
                                    <div
                                        className={cn(
                                            `absolute border-dashed border-red-500 border-r-2 transition-all duration-300 delay-1500 ${
                                                animationTwo ? 'h-10 -mt-9' : 'h-0'
                                            } -mr-16`,
                                        )}
                                    ></div>
                                    <Arrow
                                        fill="red"
                                        className={`w-3 h-3 absolute flex transform rotate-180 transition-all duration-300 delay-1700 ${
                                            animationTwo ? 'opacity-1' : 'opacity-0'
                                        } -mr-4.5 -mt-10`}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="z-10 absolute  left-14 flex  lg:mt-24 md:mt-20 mt-14">
                            <div
                                className={`z-10 lg:w-4 lg:h-4 md:w-4 transition-all duration-300 delay-700 ${
                                    animationTwo ? 'opacity-1' : 'opacity-0'
                                } md:h-4 w-3 h-3 bg-pink-500 rounded-full absolute`}
                            ></div>
                            <div
                                className={`absolute border-dashed border-white border-b-2 transition-all duration-300 delay-700 ${
                                    animationTwo ? 'md:w-52 lg:w-52 w-24' : 'w-0'
                                } md:mt-2 lg:mt-2 mt-1`}
                            ></div>
                            <div
                                className={`absolute border-dashed border-white border-l-2 transition-all duration-300 delay-900 ${
                                    animationTwo ? 'lg:h-14 md:h-14 h-16' : 'h-0'
                                } lg:mt-2 md:mt-2 md:w-52 w-24 mt-1`}
                            ></div>
                            <Arrow
                                fill="#fff"
                                className={`lg:h-4 lg:w-4 md:w-4 md:h-4 w-3 h-3 absolute  transition-all duration-300 delay-1000  ${
                                    animationTwo ? 'opacity-1' : 'opacity-0'
                                } md:mr-15 md:mt-14 lg:mt-14 mr-21 mt-16`}
                            />
                        </div>
                        {/* card */}
                        <div className="-mt-3">
                            <div className="absolute 3xl:bottom-14 3xl:mr-32 lg:bottom-20 lg:mr-28 md:-bottom-10 md:-mr-24 -bottom-28 -mr-22">
                                <Cart
                                    background={backgroundLogo}
                                    text={
                                        'Fotoğrafları kalıcı hatıralara dönüştürebilen, mobil baskı uygulaması'
                                    }
                                />
                            </div>
                        </div>
                        <Bounce>
                            <img
                                className="3xl:w-60  lg:w-52 md:w-40 w-32 -mt-4 ml-5 md:-mt-2"
                                src="/images/minimidmaks/minimidimaks2.png"
                                alt=""
                            />
                        </Bounce>
                    </div>
                </div>
                <div className="mt-16 lg:h-96 h-32 flex">
                    <div className=" w-1/2 lg:h-96 md:h-96 h-28">
                        <div className="z-10 absolute 3xl:mr-64 2xl:mr-52 xl:mr-36 lg:mr-10">
                            <Fade delay={3000}>
                                <div className="text-left text-black lg:w-64 lg:mt-7 md:mt-16 md:w-48 w-24 mt-7 mr-3">
                                    <img
                                        className="shadow-2xl"
                                        src="/images/minimidmaks/minimidimaks-2.png"
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
                            <div className="3xl:mr-10 lg:mt-52 lg:mr-16 md:mr-36 h-20 lg:w-52 mt-36 mr-7">
                                <p className="text-left text-white 3xl:text-lg 3xl:w-60 lg:w-52 lg:text-sm md:text-sm text-xs w-32 mr-20">
                                    Kullanıcı oluşturduğu modelleri taslak halinde görür ve
                                    düzenleyebilir
                                </p>
                            </div>
                        </Fade>
                        <div className="3xl:mt-28">
                            <div className="3xl:ml-5 lg:mt-28 md:mt-32 mt-68 absolute lg:left-20 md:left-1 -mr-52">
                                <div className={cn(`lg:mt-60  md:mt-44 mt-7 md:w-8 flex`)}>
                                    <p className="lg:-mr-32 md:-mr-28 -mr-5 lg:text-white md:text-white text-black lg:text-2xl md:text-lg text-sm lg:mt-2 md:mt-2 mt-2">
                                        MiniMidiMaks
                                    </p>
                                    <div className="lg:w-12 md:w-10 w-10 absolute lg:mr-6 md:-mr-0 mr-16">
                                        <img
                                            className={cn(style.shadowBtn, 'rounded-lg')}
                                            src="/images/Minilogo.png"
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
                        <div className="absolute flex lg:mt-24 lg:mr-16">
                            <p className="text-white lg:text-xl lg:ml-3 -mt-2 -mr-4">Categories</p>
                            <div className="-mt-2 -mr-2">
                                <img
                                    className="w-7"
                                    src="/images/minimidmaks/minimidimaks-layer2.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <img className="w-52" src="/images/vector.png" alt="" />
                    </div>
                    <div className="absolute mt-24">
                        <Circle1
                            fill="#67D4DD"
                            onClick={handleClick}
                            className={`z-10  transition-all duration-300 delay-2000 ${
                                animationThree ? 'animate-ping' : 'h-0'
                            } absolute 3xl:ml-32 lg:bottom-2 md:bottom-1 bottom-0 lg:left-22 lg:ml-24 md:left-22 md:ml-14 left-24 ml-5 cursor-pointer`}
                        />

                        <div className="z-10 absolute  left-14 flex  lg:mt-24 md:mt-20 mt-14">
                            <div
                                className={`z-10 lg:w-4 lg:h-4 md:w-4 transition-all duration-300 delay-900 ${
                                    animationThree ? 'opacity-1' : 'opacity-0'
                                } md:h-4 w-3 h-3 bg-pink-500 rounded-full absolute`}
                            ></div>
                            <div
                                className={`absolute border-dashed border-white border-b-2 transition-all duration-300 delay-900 ${
                                    animationThree ? 'md:w-52 lg:w-52 w-24' : 'w-0'
                                } md:mt-2 lg:mt-2 mt-1`}
                            ></div>
                            <div
                                className={`absolute border-dashed border-white border-l-2 transition-all duration-300 delay-1100 ${
                                    animationThree ? 'lg:h-14 md:h-14 h-16' : 'h-0'
                                } lg:mt-2 md:mt-2 md:w-52 w-24 mt-1`}
                            ></div>
                            <Arrow
                                fill="#fff"
                                className={`lg:h-4 lg:w-4 md:w-4 md:h-4 w-3 h-3 absolute  transition-all duration-300 delay-1300  ${
                                    animationThree ? 'opacity-1' : 'opacity-0'
                                } md:mr-15 md:mt-14 lg:mt-14 mr-21 mt-16`}
                            />
                        </div>
                        {/* card */}
                        <div className="-mt-3">
                            <div className="absolute 3xl:bottom-14 3xl:mr-32 lg:bottom-20 lg:mr-28 md:-bottom-10 md:-mr-24 -bottom-28 -mr-22">
                                <Cart
                                    background={backgroundLogo}
                                    text={
                                        'Fotoğrafları kalıcı hatıralara dönüştürebilen, mobil baskı uygulaması'
                                    }
                                />
                            </div>
                        </div>
                        <Bounce>
                            <img
                                className="3xl:w-60  lg:w-52 md:w-40 w-32 -mt-4 ml-5 md:-mt-2"
                                src="/images/minimidmaks/minimidimaks3.png"
                                alt=""
                            />
                        </Bounce>
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
                        <Fade delay={3000} className="lg:mt-10 md:mt-10 mt-5">
                            <div className="3xl:mr-10 lg:mt-52 lg:mr-16 md:mr-36 h-20 mt-36 mr-7">
                                <p className="text-left text-white 3xl:text-lg lg:w-52 3xl:w-60 lg:text-sm md:text-sm text-xs w-32 mr-20">
                                    Sepete eklenen ürünlerin detaylarına erişilir, ödeme metodu
                                    eklenip satın alınabilir
                                </p>
                            </div>
                        </Fade>
                        <div className="3xl:mt-28">
                            <div className="3xl:ml-5 lg:mt-28 md:mt-32 mt-68 absolute lg:left-20 md:left-1 -mr-52">
                                <div className={cn(`lg:mt-60  md:mt-44 mt-7 md:w-8 flex`)}>
                                    <p className="lg:-mr-32 md:-mr-28 -mr-5 lg:text-white md:text-white text-black lg:text-2xl md:text-lg text-sm lg:mt-2 md:mt-2 mt-2">
                                        MiniMidiMaks
                                    </p>
                                    <div className="lg:w-12 md:w-10 w-10 absolute lg:mr-6 md:-mr-0 mr-16">
                                        <img
                                            className={cn(style.shadowBtn, 'rounded-lg')}
                                            src="/images/Minilogo.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute lg:left-0 md:left-0 left-24 lg:ml-5 md:ml-5 ml-3 lg:mt-16 mt-7">
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
                        <div className="absolute flex lg:mt-24 lg:mr-16">
                            <p className="text-green-550 lg:text-xl lg:ml-3 -mt-2">Home</p>
                            <img
                                className="h-5 -mt-1"
                                src="/images/minimidmaks/minimidimaks-menu.png"
                                alt=""
                            />
                        </div>
                        <img className="w-52" src="/images/vector.png" alt="" />
                    </div>
                    <div className="absolute mt-24">
                        <Circle1
                            fill="#67D4DD"
                            onClick={handleClick}
                            className={`z-10  transition-all duration-300 delay-2000 ${
                                animationFour ? 'animate-ping' : 'h-0'
                            } absolute lg:bottom-2 md:bottom-1 bottom-0 lg:left-5 lg:ml-4 md:left-5 md:ml-3 left-1 ml-5 cursor-pointer`}
                        />
                        <div className="lg:block md:block hidden">
                            <div className="z-10 absolute flex lg:bottom-64 md:bottom-52 lg:mr-10 md:mr-5">
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
                                            animationFour ? 'lg:h-12 md:h-10' : 'h-0'
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
                                        className={`w-3 h-3  transition-all duration-200 delay-1300 ${
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
                        <div className="-mt-4">
                            <div className="absolute 3xl:bottom-14 3xl:mr-32 lg:bottom-20 lg:mr-28 md:-bottom-10 md:-mr-24 -bottom-28 -mr-22">
                                <Cart
                                    background={backgroundLogo}
                                    text={
                                        'Fotoğrafları kalıcı hatıralara dönüştürebilen, mobil baskı uygulaması'
                                    }
                                />
                            </div>
                        </div>
                        <Bounce>
                            <img
                                className="3xl:w-60  lg:w-52 md:w-40 w-32 -mt-4 ml-5 md:-mt-2"
                                src="/images/minimidmaks/minimidimaks4.png"
                                alt=""
                            />
                        </Bounce>
                    </div>
                </div>
                <div className="mt-16 lg:h-96 h-32 flex">
                    <div className=" w-1/2 lg:h-96 md:h-96 h-28">
                        <div className="z-10 absolute 3xl:mr-68 2xl:mr-52 xl:mr-40 lg:mr-20 md:mr-10">
                            <Fade delay={3000}>
                                <div className="text-left text-black lg:w-80 lg:mt-3 md:mt-5 md:w-72 w-36 mt-7 -mr-4">
                                    <img
                                        className="shadow-2xl"
                                        src="/images/minimidmaks/minimidimaks-3.png"
                                        alt="test"
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
                            <div className="3xl:mr-10 lg:mt-52 lg:mr-16 md:mr-36 h-20 mt-36 mr-7">
                                <p className="text-left text-white 3xl:text-lg 3xl:w-60 lg:w-52 lg:text-sm md:text-sm text-xs w-32 mr-20">
                                    Kullanıcı profilini düzenler, hediye kartı oluşturur ve
                                    sevdikleriyle paylaşabilir
                                </p>
                            </div>
                        </Fade>
                        <div className="3xl:mt-28">
                            <div className="3xl:ml-5 lg:mt-28 md:mt-32 mt-68 absolute lg:left-20 md:left-1 -mr-52">
                                <div className={cn(`lg:mt-60  md:mt-44 mt-7 md:w-8 flex`)}>
                                    <p className="lg:-mr-32 md:-mr-28 -mr-5 lg:text-white md:text-white text-black lg:text-2xl md:text-lg text-sm lg:mt-2 md:mt-2 mt-2">
                                        MiniMidiMaks
                                    </p>
                                    <div className="lg:w-12 md:w-10 w-10 absolute lg:mr-6 md:-mr-0 mr-16">
                                        <img
                                            className={cn(style.shadowBtn, 'rounded-lg')}
                                            src="/images/Minilogo.png"
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

export default PageSix;
