import React, { FC, useEffect, useRef, useState } from 'react'


interface Props {
    backgroundColor?: string;
    animation?: boolean;
}

const Back: FC<Props> = ({ backgroundColor, animation }) => {


    const [scroll, setScroll] = useState<number>(-3800)
    const [anim, setAnim] = useState<boolean>(false)

    // console.log(scroll)
    useEffect(() => {
        let a = anim
        let s = scroll
        if (scroll == -3800) {
            a = false
        } else if (scroll == -1000) {
            a = true
        }
        s = a ? scroll - 100 : scroll + 100
        setAnim(a)
        setScroll(s)
    }, [animation])

    return (

        <div className="">
            <svg className="transition-all duration-1000 transform 3xl:h-120 2xl:h-116 lg:h-125 h-115" style={{ marginTop: "-9%", transform: `translateX(${scroll}px)` }} width="5670" height="800" viewBox="0 0 5670 910" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 0H3714.7H3909.79H5670V816.274C5546.11 758.421 5208.23 638.214 4847.82 752.252C4487.41 866.29 4072.3 819.775 3909.79 782.262C3901.41 780.328 3888.51 777.242 3872.78 773.484L3872.74 773.472L3872.7 773.464L3872.7 773.463C3812.96 759.18 3712.65 735.195 3665.23 727.636C3259.73 663.001 3029.82 718.16 2773.02 779.771C2500.49 845.154 2197.68 917.803 1622.6 862.266C1419.56 842.657 1251.22 806.276 1084.02 770.144C783.738 705.249 487.172 641.158 0 676.494V0Z" fill="url(#paint0_linear)" />
                <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M3877.12 30L35 45.6023V638C619.566 620.141 848.278 698.854 1068.16 774.53C1296.66 853.169 1515.62 928.527 2114.46 888.834C2399.86 869.916 2663.26 882.515 2921.42 894.864C3237.6 909.988 3545.9 924.735 3877.12 880.741C3900.43 877.645 3928.64 872.673 3961.22 866.932C4123.43 838.346 4393.93 790.678 4706.38 860.427C4912.84 906.517 5198.5 954.494 5644.39 771.5V30H3984.17H3877.12Z" fill="url(#paint1_linear)" />
                <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M5670 409.577C5319.44 364.424 4897.65 381.608 5361.09 543.741L5661.05 554.739L3888.69 621.271H66.2789L9 651.5C26.8831 655.755 46.7902 663.636 72.0373 673.631C189.274 720.044 421.654 812.041 1101.19 798.275C1135.68 797.576 1163.55 797.026 1188.17 796.541C1304.61 794.244 1348.6 793.376 1678.31 784.933C1922.43 778.681 2232.49 800.12 2562.05 822.908C3125.02 861.836 3744.93 904.7 4190.37 820.193C4328.82 803.586 4523.98 771.074 4730.87 736.61C5084.66 677.673 5472.71 613.028 5670 612.452V409.577Z" fill="url(#paint2_linear)" />
                <defs>
                    <linearGradient id="paint0_linear" x1="0" y1="441" x2="5670" y2="441" gradientUnits="userSpaceOnUse">
                        <stop className="transition-all duration-1000 transform " stopColor={backgroundColor} />
                        <stop offset="0.994792" stopColor={backgroundColor} />
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="35" y1="469.986" x2="5644.39" y2="469.986" gradientUnits="userSpaceOnUse">
                        <stop className="transition-all duration-1000 transform " stopColor={backgroundColor} />
                        <stop offset="0.994792" stopColor={backgroundColor} />
                    </linearGradient>
                    <linearGradient id="paint2_linear" x1="9" y1="628.5" x2="5670" y2="628.5" gradientUnits="userSpaceOnUse">
                        <stop className="transition-all duration-1000 transform " stopColor={backgroundColor} />
                        <stop offset="0.994792" stopColor={backgroundColor} />
                    </linearGradient>
                </defs>
            </svg>
        </div>

    )
}

export default Back

