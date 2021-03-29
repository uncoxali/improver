import React, { FC, useEffect, useRef, useState } from 'react';
import Slider from '@components/Home/Slider';
import Menu from '@assets/svg/menu.svg';
import BackgroundColor from '@components/Home/BackgroundColor';
import cn from 'classnames';
import style from '@assets/styles/style.module.css';

import Form from '@components/Home/Forms';
import Footer from '@components/Home/Footer';
import { Zoom } from 'react-awesome-reveal';
import { useIntersectionObserver } from '@lib/hooks/use-intersection-observer';
import { Modal } from '@components/ui';
import LogoSlider from '@components/Logo/LogoSlider';
import BackgroundLogo from '@components/Logo/BackgroundLogo';

import MeetlyPage from '@components/Main/MeetlyPage';
import BeauticketPage from '@components/Main/BeauticketPage';
import EvetPage from '@components/Main/EvetPage';
import FlowPage from '@components/Main/FlowPage';
import MinimidmaksPage from '@components/Main/MinimidmaksPage';
import StilyPage from '@components/Main/StilyPage';
import WinglePage from '@components/Main/WinglePage';
import Circle1 from '@assets/svg/circle.svg';
import Cart from '../../components/Main/AllPageCart';

import FullPage from '../../components/Main/FullScrollPage';
// import './index.css';

const data = [
    {
        src: '/images/evet/1.png',
        backgroundColor: '#FDD96C',
        logo: '/images/logo/evet.png',
        text: 'Evet',
        button: '#FDD96C',
    },
    {
        src: '/images/Wingle/wingle1.png',
        backgroundColor: '#9ADEEC',
        logo: '/images/logo/wingle.png',
        text: 'Wingle',
        button: '#9ADEEC',
    },
    {
        src: '/images/Flow/flow1.png',
        backgroundColor: '#B893DD',
        logo: '/images/logo/flow.png',
        text: 'Flow',
        button: '#B893DD',
    },
    {
        src: '/images/Stily/stily1.png',
        backgroundColor: '#F2D474',
        logo: '/images/logo/stily.png',
        text: 'Stily',
        button: '#F2D474',
    },
    {
        src: '/images/Meetly/meetly1.png',
        backgroundColor: '#FDD96C',
        logo: '/images/logo/meetly.png',
        text: 'Meetly',
        button: '#FF9A9E',
    },
    {
        src: '/images/minimidmaks/minimidimaks1.png',
        backgroundColor: '#67D4DD',
        logo: '/images/logo/Minilogo.png',
        text: 'MiniMidiMaks',
        button: '#67D4DD',
    },
    {
        src: '/images/Beuticket/beuticket1.png',
        backgroundColor: '#FB5F7E',
        logo: '/images/logo/beuticket.png',
        text: 'Beuticket',
        button: '#FB5F7E',
    },
];
const dataImage = [
    { src: '/images/logo/evet.png', text: 'Evet' },
    { src: '/images/logo/wingle.png', text: 'Wingle' },
    { src: '/images/logo/flow.png', text: 'Flow' },
    { src: '/images/logo/stily.png', text: 'Stily' },
    { src: '/images/logo/meetly.png', text: 'Meetly' },
    { src: '/images/logo/Minilogo.png', text: 'MiniMidiMaks' },
    { src: '/images/logo/beuticket.png', text: 'Beuticket' },
];

const Home: FC = () => {
    const [color, setColor] = useState<any>();
    const [play, setPlay] = useState<any>();
    const [playAnim, setPlayAnim] = useState<any>();
    const [change, setChange] = useState<string>('page1');
    const [colorLogo, setColorLogo] = useState<string>('');
    const [show, setShow] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [screen, setScreen] = useState<any>();
    const [scroll, setScroll] = useState<any>(2);
    const [lock, setLock] = useState<boolean>(false);

    const [fullScroll, setFullScroll] = useState<any>();

    const elementRef = useRef<any>(null);
    const form = useRef<any>(null);
    const div = useRef<HTMLDivElement>(null);

    const fullPageScroll = useRef<any>(null);

    useEffect(() => {
        if (lock) return;
        if (scroll == 3) setLock(true);
        let fullScrollNew = new FullPage(1, scroll, fullPageScroll.current);

        fullScrollNew.init();
        setFullScroll(fullScrollNew);
    }, [scroll]);

    useEffect(() => {
        setPlay(!play);
        setPlayAnim(!playAnim);
    }, [color]);

    useEffect(() => {
        const screen = window.screen.width;
        screenWidth(screen);
    });

    const screenWidth = (screen: number) => {
        setScreen(screen > 450);
    };

    // click switch in the pages
    const handleClick = (index: number) => {
        fullScroll.scrollDown();
        setScroll(3);
        let a = change;
        if (index == 0) {
            a = 'page0';
        } else if (index == 1) {
            a = 'page1';
        } else if (index == 2) {
            a = 'page2';
        } else if (index == 3) {
            a = 'page3';
        } else if (index == 4) {
            a = 'page4';
        } else if (index == 5) {
            a = 'page5';
        } else if (index == 6) {
            a = 'page6';
        } else {
        }

        let color = colorLogo;
        if (index == 0) {
            color = '#FDD96C';
        } else if (index == 1) {
            color = '#9ADEEC';
        } else if (index == 2) {
            color = '#B893DD';
        } else if (index == 3) {
            color = '#F2D474';
        } else if (index == 4) {
            color = '#FF9A9E';
        } else if (index == 5) {
            color = '#67D4DD';
        } else if (index == 6) {
            color = '#FB5F7E';
        } else {
            color = '#FF9A9E';
        }
        setChange(a);
        setColorLogo(color);
        setShow(true);
    };

    // click switch in the pages
    const switchLogoPage = (index: number) => {
        let a = change;
        if (index == 0) {
            a = 'page0';
        } else if (index == 1) {
            a = 'page1';
        } else if (index == 2) {
            a = 'page2';
        } else if (index == 3) {
            a = 'page3';
        } else if (index == 4) {
            a = 'page4';
        } else if (index == 5) {
            a = 'page5';
        } else if (index == 6) {
            a = 'page6';
        } else {
        }

        let color = colorLogo;
        if (index == 0) {
            color = '#FDD96C';
        } else if (index == 1) {
            color = '#9ADEEC';
        } else if (index == 2) {
            color = '#B893DD';
        } else if (index == 3) {
            color = '#F2D474';
        } else if (index == 4) {
            color = '#FF9A9E';
        } else if (index == 5) {
            color = '#67D4DD';
        } else if (index == 6) {
            color = '#FB5F7E';
        } else {
            color = '#FF9A9E';
        }
        setChange(a);
        setColorLogo(color);
        setShow(true);
    };

    const logoClick = (index: number) => {
        fullScroll.scrollUp();

        let a = change;
        if (index == 0) {
            a = 'page0';
        } else if (index == 1) {
            a = 'page1';
        } else if (index == 2) {
            a = 'page2';
        } else if (index == 3) {
            a = 'page3';
        } else if (index == 4) {
            a = 'page4';
        } else if (index == 5) {
            a = 'page5';
        } else if (index == 6) {
            a = 'page6';
        } else {
        }

        let color = colorLogo;
        if (index == 0) {
            color = '#FDD96C';
        } else if (index == 1) {
            color = '#9ADEEC';
        } else if (index == 2) {
            color = '#B893DD';
        } else if (index == 3) {
            color = '#F2D474';
        } else if (index == 4) {
            color = '#FF9A9E';
        } else if (index == 5) {
            color = '#67D4DD';
        } else if (index == 6) {
            color = '#FB5F7E';
        } else {
            color = '#FF9A9E';
        }
        setChange(a);
        setColorLogo(color);
        setShow(true);
    };

    const local = () => {
        localStorage.setItem('state', 'true');
    };
    // open modal
    const mouseMove = () => {
        const a = localStorage.getItem('state');
        if (a == null) {
            setOpen(true);
            local();
        }
    };

    // scroll to form
    const contactUs = () => {
        fullScroll.scrollDown();
        fullScroll.scrollDown();
    };

    return (
        <div
            className="relative w-full max-w-8xl mx-auto  flex flex-col min-h-screen"
            onMouseLeave={() => mouseMove()}
        >
            <div className="absolute w-full h-screen overflow-hidden">
                <div ref={fullPageScroll} className="relative top-0 transition-all duration-300">
                    <section className="h-screen w-full sliderEffect">
                        <div className={cn('lg:-mt-1 md:-mt-5 sm:-mt-14 -mt-14')}>
                            <div className={' '}>
                                <div className="overflow-x-hidden absolute w-full -mt-2">
                                    <BackgroundColor
                                        animation={play}
                                        backgroundColor={color?.backgroundColor ?? '#FF9A9E'}
                                    />
                                </div>
                                <div className="flex lg:top-6 md:top-7 top-16 lg:mt-2 md:-mt-2 -mt-7 w-full absolute justify-center items-center">
                                    <div className="lg:mr-10 md:mr-10 mr-2 right-0 absolute">
                                        <img
                                            className="3xl:w-10 lg:w-10 md:w-10 w-10"
                                            src="/images/menu.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="relative text-left lg:mr-0 md:mr-0 mr-10">
                                        <div className="absolute -ml-5 3xl:w-14 lg:w-10 md:w-10 w-9">
                                            <img
                                                className="rounded-lg"
                                                src={(color as any)?.logo}
                                                alt=""
                                            />
                                        </div>
                                        <div className="ml-6 3xl:ml-12 3xl:mt-3 mt-2 absolute">
                                            <p className="font-bold">{(color as any)?.text}</p>
                                        </div>
                                    </div>
                                    <div className="lg:ml-10 md:ml-10 ml-3 w-20 md:w-28 lg:w-28 absolute left-0">
                                        <img
                                            className="3xl:w-28 lg:w-24 md:w-20 w-16"
                                            src="/images/logo/logoWhait.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                {/* Slider */}
                                <div className="lg:top-0 md:top-0 lg:mt-1 md:mt-7 mt-14">
                                    <Slider
                                        data={data}
                                        renderItem={({ src }, index, active) => (
                                            <div
                                                onClick={() => handleClick(index as number)}
                                                className="flex items-center justify-center cursor-pointer"
                                            >
                                                <Circle1
                                                    fill={color?.backgroundColor}
                                                    className={`absolute z-10 ${
                                                        active ? 'block' : 'hidden'
                                                    } animate-pingTouch lg:w-16 lg:h-16 md:w-10 md:h-10 w-7 h-7`}
                                                />
                                                <img
                                                    src={src}
                                                    alt="slider"
                                                    className={`3xl:w-48 lg:w-40 sm:w-40 xs:w-36 w-48 mt-10 md:w-40 transition-all duration-300 ${
                                                        active && 'transform scale-125'
                                                    }`}
                                                />
                                            </div>
                                        )}
                                        getColor={(color) => setColor(color)}
                                        buttonColor={(color as any)?.button}
                                    />
                                    <div className={cn(`flex justify-center -mt-20`)}>
                                        <button
                                            onClick={contactUs}
                                            className={cn(
                                                style.scale,
                                                style.shadowBtn,
                                                `transition-all duration-300 bg-white 3xl:w-36 3xl:text-lg w-28 p-2 rounded-full shadow-custom outline-none 3xl:-mt-3`,
                                            )}
                                            style={{ color: color?.button || '#B893DD' }}
                                        >
                                            Contact Us
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {show && (
                        <section className="h-screen w-full sliderEffect">
                            <div className="lg:mt-0 md:-mt-25 xs:-mt-25">
                                <Zoom>
                                    <div className={cn(`transform transition-all duration-1000`)}>
                                        <div className="overflow-x-hidden absolute w-full">
                                            <BackgroundLogo
                                                backgroundLogo={colorLogo || '#9ADEEC'}
                                                animation={playAnim}
                                            />
                                        </div>
                                        <div className="lg:-mt-24 -mt-10">
                                            <div className="h-16 mt-10 lg:mt-24 md:mt-24">
                                                <div className="lg:mr-10 md:mr-10 mr-4 mt-4 right-0 absolute ">
                                                    <img
                                                        className="lg:w-10 md:w-10 w-7"
                                                        src="/images/menu.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="lg:ml-10 md:ml-10 lg:w-24 w-14 ml-4 mt-4 md:w-20 absolute left-0 ">
                                                    <img
                                                        className=""
                                                        src="/images/logo/logoWhait.png"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="lg:mr-48 lg:ml-48 xl:-mt-5 3xl:mt-1 -mt-5">
                                                <LogoSlider
                                                    data={dataImage}
                                                    renderItem={({ src }, index) => (
                                                        <div
                                                            onClick={() =>
                                                                switchLogoPage(index as number)
                                                            }
                                                            className="cursor-pointer"
                                                        >
                                                            <img
                                                                src={src}
                                                                alt="slider"
                                                                className={` mohamdi 3xl:w-17 2xl:w-14 lg:w-14 w-10 md:w-14 mt-5 transition-all duration-300 rounded-full shadow-2xl`}
                                                            />
                                                        </div>
                                                    )}
                                                />
                                            </div>
                                            <div
                                                className={cn(
                                                    `right-2 absolute -mt-20 mr-7 lg:block hidden xl:-mt-16`,
                                                )}
                                            >
                                                <button
                                                    onClick={contactUs}
                                                    className={cn(
                                                        style.scale,
                                                        `transition-all duration-300 bg-white w-28 p-2 rounded-full shadow-inner outline-none`,
                                                    )}
                                                    style={{
                                                        color: colorLogo || '#9ADEEC',
                                                    }}
                                                >
                                                    Contact Us
                                                </button>
                                            </div>
                                        </div>
                                        <div className="-mt-4">
                                            <div className=" absolute z-10 mt-20 left-2 lg:hidden">
                                                <button
                                                    onClick={contactUs}
                                                    className={cn(
                                                        style.scale,
                                                        `animate-button ransition-all duration-300 delay-500 transform hover:scale-120 bg-white w-20 text-xs p-2 rounded-full shadow-2xl`,
                                                    )}
                                                    style={{
                                                        color: colorLogo || '#9ADEEC',
                                                    }}
                                                >
                                                    Contact Us
                                                </button>
                                            </div>
                                            <div
                                                className={cn(
                                                    '3xl:mt-2 2xl:mt-16  lg:mt-3 mt-2',
                                                    change == 'page0' ? 'block' : 'hidden',
                                                )}
                                            >
                                                <EvetPage backgroundLogo={colorLogo || '#FDD96C'} />
                                                <div className={cn('h-40')}></div>
                                            </div>
                                            <div
                                                className={cn(
                                                    '3xl:mt-2 2xl:mt-16  lg:mt-3  mt-2 h-screen lg:overflow-hidden md:overflow-hidden sm:overflow-hidden xs:overflow-hidden overflow-auto',
                                                    change == 'page1' ? 'block' : 'hidden',
                                                )}
                                            >
                                                <WinglePage
                                                    backgroundLogo={colorLogo || '#9ADEEC'}
                                                />
                                                <div className={cn('h-40')}></div>
                                            </div>
                                            <div
                                                className={cn(
                                                    '3xl:mt-2 2xl:mt-16  lg:mt-3  mt-2 h-screen lg:overflow-hidden md:overflow-hidden sm:overflow-hidden xs:overflow-hidden overflow-auto',
                                                    change == 'page2' ? 'block' : 'hidden',
                                                )}
                                            >
                                                <FlowPage backgroundLogo={colorLogo || '#FF9A9E'} />
                                                <div className={cn('h-40')}></div>
                                            </div>
                                            <div
                                                className={cn(
                                                    '3xl:mt-2 2xl:mt-16  lg:mt-3  mt-2 h-screen lg:overflow-hidden md:overflow-hidden sm:overflow-hidden xs:overflow-hidden overflow-auto',
                                                    change == 'page3' ? 'block' : 'hidden',
                                                )}
                                            >
                                                <StilyPage
                                                    backgroundLogo={colorLogo || '#FF9A9E'}
                                                />
                                                <div className={cn('h-40')}></div>
                                            </div>
                                            <div
                                                className={cn(
                                                    '3xl:mt-0 2xl:mt-16 lg:mt-0  mt-2 h-screen lg:overflow-hidden md:overflow-hidden sm:overflow-hidden xs:overflow-hidden overflow-auto',
                                                    change == 'page4' ? 'block' : 'hidden',
                                                )}
                                            >
                                                <MeetlyPage
                                                    backgroundLogo={colorLogo || '#FF9A9E'}
                                                />
                                                <div className={cn('h-40')}></div>
                                            </div>
                                            <div
                                                className={cn(
                                                    '3xl:mt-2 2xl:mt-16  lg:mt-3  mt-2 h-screen lg:overflow-hidden md:overflow-hidden sm:overflow-hidden xs:overflow-hidden overflow-auto',
                                                    change == 'page5' ? 'block' : 'hidden',
                                                )}
                                            >
                                                <MinimidmaksPage
                                                    backgroundLogo={colorLogo || '#FF9A9E'}
                                                />
                                                <div className={cn('h-40')}></div>
                                            </div>
                                            <div
                                                className={cn(
                                                    '3xl:mt-2 2xl:mt-16  lg:mt-0  mt-2 h-screen lg:overflow-hidden md:overflow-hidden sm:overflow-hidden xs:overflow-hidden overflow-auto',
                                                    change == 'page6' ? 'block' : 'hidden',
                                                )}
                                            >
                                                <BeauticketPage
                                                    backgroundLogo={colorLogo || '#FF9A9E'}
                                                />
                                                <div className={cn('h-40')}></div>
                                            </div>
                                        </div>
                                    </div>
                                </Zoom>
                            </div>
                        </section>
                    )}
                    <section className={cn(`h-screen w-full sliderEffect`)}>
                        <div className="lg:mt-0 md:-mt-24 xs:-mt-24">
                            <Modal className="w-full" onClose={() => setOpen(false)} visible={open}>
                                <div
                                    className="z-10 absolute lg:-mt-5 lg:right-9 md:-right-16 md:-mt-10 -right-24 flex mt-2 mr-32 cursor-pointer p-1"
                                    onClick={() => setOpen(false)}
                                >
                                    <img className="w-5" src="/images/cancel.png" alt="" />
                                </div>
                                <div
                                    className={cn(
                                        'lg:mt-10 md:mt-10 flex justify-center items-center',
                                    )}
                                >
                                    <Form backgroundForm={colorLogo || '#9ADEEC'} />
                                </div>
                            </Modal>
                        </div>
                        {/* slidet menu in form */}
                        <div className="lg:-mt-24 -mt-10">
                            {/* <Logo dataImage={dataImage} /> */}
                            <div className={cn('')} ref={form}>
                                <div className={cn(`transform transition-all duration-1000 `)}>
                                    <div className="">
                                        <div className="overflow-x-hidden overflow-y-hidden 3xl:h-52 lg:h-44 md:h-40 sm:h-40 h-36  absolute w-full">
                                            <BackgroundLogo
                                                backgroundLogo={colorLogo || '#9ADEEC'}
                                                animation={playAnim}
                                            />
                                        </div>
                                        <div className="lg:-mt-6 md:-mt-6">
                                            <div className="h-16 mt-10 lg:mt-24 md:mt-24">
                                                <div className="lg:mr-10 md:mr-10 mr-4 mt-4 w-8 right-0 absolute ">
                                                    <img
                                                        className="lg:w-10 md:w-10 xs:w-10 xm:w-7"
                                                        src="/images/menu.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="mohamdi lg:ml-10 md:ml-10 3xl:w-28 lg:w-24 xs:w-20 xm:w-16 ml-4 mt-4 md:w-20 absolute left-0 ">
                                                    <img
                                                        className=""
                                                        src="/images/logo/logoWhait.png"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="lg:mr-48 lg:ml-48 xl:-mt-5 -mt-2">
                                                <LogoSlider
                                                    data={dataImage}
                                                    renderItem={({ src }, index) => (
                                                        <div
                                                            onClick={() =>
                                                                logoClick(index as number)
                                                            }
                                                            className="cursor-pointer"
                                                        >
                                                            <img
                                                                src={src}
                                                                alt="slider"
                                                                className={`3xl:w-16 w-10 md:w-14 mt-5 transition-all duration-300 rounded-full shadow-2xl`}
                                                            />
                                                        </div>
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {screen == false && (
                                    <div
                                        className={cn(
                                            `xs:mt-10 mt-7 flex justify-center items-center overflow-auto`,
                                        )}
                                    >
                                        <Form backgroundForm={colorLogo || '#9ADEEC'} />
                                    </div>
                                )}

                                {screen == true && (
                                    <div
                                        className={cn(
                                            `3xl:mt-16 xl:mt-10 md:mt-10 flex justify-center items-center`,
                                        )}
                                    >
                                        <Form backgroundForm={colorLogo || '#9ADEEC'} />
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* <div className={cn(`mt-16`)}>
                                <Footer backgroundFooter={colorLogo || '#9ADEEC'} />
                            </div> */}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Home;
