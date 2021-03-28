import React, { FC } from 'react';
import style from '@assets/styles/style.module.css';
import Qout from '@assets/svg/qout.svg';
import cn from 'classnames';

interface Props {
    background?: string;
    className?: string;
    text?: string;
}
const AllPageCart: FC<Props> = ({ background, text }) => {
    return (
        <div>
            <div className="absolute -bottom-30">
                <div
                    className={cn(
                        style.cart,
                        'bg-yellow-300 3xl:w-93 lg:w-95 lg:h-28 md:w-95 md:h-28 w-80 h-24',
                    )}
                ></div>
                <div className="absolute lg:-mt-8 md:-mt-8 lg:mr-16 md:mr-16 mr-5 -mt-7">
                    <Qout fill={background} className="transform rotate-180 w-10" />
                </div>
                <div className="absolute lg:left-10 md:left-10 left-9 lg:-mt-24 md:-mt-24 -mt-20">
                    <Qout fill={background} className="-mt-3" />
                </div>
                <div className="absolute text-left 3xl:mr-28 3xl:-mt-24 lg:-mt-22 lg:mr-24 md:-mt-22 md:mr-24 -mt-20 mr-10 lg:text-base md:text-base text-sm">
                    <p className="ml-16 3xl:mt-2 lg:mt-0 lg:text-sm 3xl:text-base">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default AllPageCart;
