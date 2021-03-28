import React, { ReactElement, useEffect, useState, useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import cn from 'classnames';
import style from '@assets/styles/style.module.css';

export interface SliderProps {
    data: any[];
    renderItem: (item: any, index: number, active: boolean) => ReactElement;
    getColor?: (item: any) => any;
    buttonColor?: any;
    animation?: boolean;
}
const Slider: React.FC<SliderProps> = ({ data, renderItem, getColor, buttonColor, animation }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef, slider] = useKeenSlider<any>({
        breakpoints: {
            '(max-width: 500px)': {
                slidesPerView: 2,
            },
            '(max-width: 330px)': {
                slidesPerView: 2,
            },
            '(min-width: 768px)': {
                slidesPerView: 3,
            },
            '(min-width: 665px)': {
                slidesPerView: 3,
            },
            '(min-width: 1100px)': {
                slidesPerView: 5,
            },
        },
        initial: 0,
        centered: true,
        slidesPerView: 4,
        loop: true,

        dragStart: () => {
            setPause(true);
        },
        dragEnd: () => {
            setPause(false);
        },
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide);
        },
    });
    const [pause, setPause] = React.useState(false);
    const timer = React.useRef<any>();
    React.useEffect(() => {
        sliderRef.current.addEventListener('mouseover', () => {
            setPause(true);
        });
        sliderRef.current.addEventListener('mouseout', () => {
            setPause(false);
        });
    }, [sliderRef]);

    React.useEffect(() => {
        timer.current = setInterval(() => {
            if (!pause && slider) {
                slider.next();
            }
        }, 3000);
        return () => {
            clearInterval(timer.current);
        };
    }, [pause, slider]);

    useEffect(() => {
        if (getColor) getColor(data[currentSlide]);
    }, [currentSlide]);

    return (
        <div className="relative w-full max-w-8xl mx-auto  flex flex-col">
            <div ref={sliderRef} className="keen-slider mt-24 ">
                {data?.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`keen-slider__slide 3xl:p-20 p-10 ${index === currentSlide}`}
                        >
                            <div
                                className={`transform flex justify-center items-center ${
                                    index === currentSlide
                                }`}
                            >
                                {renderItem(item, index, index === currentSlide)}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="w-full flex justify-center items-center mt-24">
                {data?.map((i, idx) => {
                    return (
                        <button
                            key={idx}
                            onClick={() => {
                                slider.moveToSlideRelative(idx);
                            }}
                            className={
                                'w-2 h-2 mx-1 bg-white rounded-full transform  transition-all -translate-y-4 duration-400 ' +
                                (currentSlide === idx ? 'w-4 bg-red-900' : 'bg-gray-500')
                            }
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Slider;
