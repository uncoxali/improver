import React, { FC, useEffect, useRef, useState } from 'react'
import cn from 'classnames';

interface Props {
    backgroundColor?: string;
    animation?: boolean;
    backgroundLogo?: string
}

const Back: FC<Props> = ({ animation, backgroundLogo }) => {


    const [scroll, setScroll] = useState<number>(-2000)
    const [anim, setAnim] = useState<boolean>(false)

    useEffect(() => {
        let a = anim
        let s = scroll
        if (scroll == -2000) {
            a = false
        } else if (scroll == -1000) {
            a = true
        }
        s = a ? scroll - 100 : scroll + 100
        setAnim(a)
        setScroll(s)
    }, [animation])

    return (
        <div className="lg:mt-10">
            <svg fill={backgroundLogo} className="transition-all duration-1000 transform 3xl:h-96 2xl:h-48  xl:h-44 md:h-68 h-52" style={{ marginTop: "-3%", transform: `translateX(${scroll}px)` }} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="3000pt" height="200pt" viewBox="0 0 3000 200" version="1.1">
                <defs>
                    <filter id="alpha" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%">
                        <feColorMatrix type="matrix" in="SourceGraphic" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                    </filter>
                    <image id="image12" width="3000" height="200" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAC7gAAADICAYAAAB4MKxCAAAABmJLR0QA/wD/AP+gvaeTAAALA0lEQVR4nO3aMRGAMADAwAI6UIF/C8hhYCkmuGuGfwURkDEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjHNp/7XB0BAAAAAAAAAAAAAADbfI9rdQQAAAAAAAAAAAAAAOyrAwAAAAAAAAAAAAAAYAyDOwAAAAAAAAAAAAAAEQZ3AAAAAAAAAAAAAAASDO4AAAAAAAAAAAAAACQY3AEAAAAAAAAAAAAASDC4AwAAAAAAAAAAAACQYHAHAAAAAAAAAAAAACDB4A4AAAAAAAAAAAAAQILBHQAAAAAAAAAAAACABIM7AAAAAAAAAAAAAAAJBncAAAAAAAAAAAAAABIM7gAAAAAAAAAAAAAAJBjcAQAAAAAAAAAAAABIMLgDAAAAAAAAAAAAAJBgcAcAAAAAAAAAAAAAIMHgDgAAAAAAAAAAAABAgsEdAAAAAAAAAAAAAIAEgzsAAAAAAAAAAAAAAAkGdwAAAAAAAAAAAAAAEgzuAAAAAAAAAAAAAAAkGNwBAAAAAAAAAAAAAEgwuAMAAAAAAAAAAAAAkGBwBwAAAAAAAAAAAAAgweAOAAAAAAAAAAAAAECCwR0AAAAAAAAAAAAAgASDOwAAAAAAAAAAAAAACQZ3AAAAAAAAAAAAAAASDO4AAAAAAAAAAAAAACQY3AEAAAAAAAAAAAAASDC4AwAAAAAAAAAAAACQYHAHAAAAAAAAAAAAACDB4A4AAAAAAAAAAAAAQILBHQAAAAAAAAAAAACABIM7AAAAAAAAAAAAAAAJBncAAAAAAAAAAAAAABIM7gAAAAAAAAAAAAAAJBjcAQAAAAAAAAAAAABIMLgDAAAAAAAAAAAAAJBgcAcAAAAAAAAAAAAAIMHgDgAAAAAAAAAAAABAgsEdAAAAAAAAAAAAAIAEgzsAAAAAAAAAAAAAAAkGdwAAAAAAAAAAAAAAEgzuAAAAAAAAAAAAAAAkGNwBAAAAAAAAAAAAAEgwuAMAAAAAAAAAAAAAkGBwBwAAAAAAAAAAAAAgweAOAAAAAAAAAAAAAECCwR0AAAAAAAAAAAAAgASDOwAAAAAAAAAAAAAACQZ3AAAAAAAAAAAAAAASDO4AAAAAAAAAAAAAACQY3AEAAAAAAAAAAAAASDC4AwAAAAAAAAAAAACQYHAHAAAAAAAAAAAAACDB4A4AAAAAAAAAAAAAQILBHQAAAAAAAAAAAACABIM7AAAAAAAAAAAAAAAJBncAAAAAAAAAAAAAABIM7gAAAAAAAAAAAAAAJBjcAQAAAAAAAAAAAABIMLgDAAAAAAAAAAAAAJBgcAcAAAAAAAAAAAAAIMHgDgAAAAAAAAAAAABAgsEdAAAAAAAAAAAAAIAEgzsAAAAAAAAAAAAAAAkGdwAAAAAAAAAAAAAAEgzuAAAAAAAAAAAAAAAkGNwBAAAAAAAAAAAAAEgwuAMAAAAAAAAAAAAAkGBwBwAAAAAAAAAAAAAgweAOAAAAAAAAAAAAAECCwR0AAAAAAAAAAAAAgASDOwAAAAAAAAAAAAAACQZ3AAAAAAAAAAAAAAASDO4AAAAAAAAAAAAAACQY3AEAAAAAAAAAAAAASDC4AwAAAAAAAAAAAACQYHAHAAAAAAAAAAAAACDB4A4AAAAAAAAAAAAAQILBHQAAAAAAAAAAAACABIM7AAAAAAAAAAAAAAAJBncAAAAAAAAAAAAAABIM7gAAAAAAAAAAAAAAJBjcAQAAAAAAAAAAAABIMLgDAAAAAAAAAAAAAJBgcAcAAAAAAAAAAAAAIMHgDgAAAAAAAAAAAABAgsEdAAAAAAAAAAAAAIAEgzsAAAAAAAAAAAAAAAkGdwAAAAAAAAAAAAAAEgzuAAAAAAAAAAAAAAAkGNwBAAAAAAAAAAAAAEgwuAMAAAAAAAAAAAAAkGBwBwAAAAAAAAAAAAAgweAOAAAAAAAAAAAAAECCwR0AAAAAAAAAAAAAgASDOwAAAAAAAAAAAAAACQZ3AAAAAAAAAAAAAAASDO4AAAAAAAAAAAAAACQY3AEAAAAAAAAAAAAASDC4AwAAAAAAAAAAAACQYHAHAAAAAAAAAAAAACDB4A4AAAAAAAAAAAAAQILBHQAAAAAAAAAAAACABIM7AAAAAAAAAAAAAAAJBncAAAAAAAAAAAAAABIM7gAAAAAAAAAAAAAAJBjcAQAAAAAAAAAAAABIMLgDAAAAAAAAAAAAAJBgcAcAAAAAAAAAAAAAIMHgDgAAAAAAAAAAAABAgsEdAAAAAAAAAAAAAIAEgzsAAAAAAAAAAAAAAAkGdwAAAAAAAAAAAAAAEgzuAAAAAAAAAAAAAAAkGNwBAAAAAAAAAAAAAEgwuAMAAAAAAAAAAAAAkGBwBwAAAAAAAAAAAAAgweAOAAAAAAAAAAAAAECCwR0AAAAAAAAAAAAAgASDOwAAAAAAAAAAAAAACQZ3AAAAAAAAAAAAAAASDO4AAAAAAAAAAAAAACQY3AEAAAAAAAAAAAAASDC4AwAAAAAAAAAAAACQYHAHAAAAAAAAAAAAACDB4A4AAAAAAAAAAAAAQILBHQAAAAAAAAAAAACABIM7AAAAAAAAAAAAAAAJBncAAAAAAAAAAAAAABIM7gAAAAAAAAAAAAAAJBjcAQAAAAAAAAAAAABIMLgDAAAAAAAAAAAAAJBgcAcAAAAAAAAAAAAAIMHgDgAAAAAAAAAAAABAgsEdAAAAAAAAAAAAAIAEgzsAAAAAAAAAAAAAAAkGdwAAAAAAAAAAAAAAEgzuAAAAAAAAAAAAAAAkGNwBAAAAAAAAAAAAAEgwuAMAAAAAAAAAAAAAkGBwBwAAAAAAAAAAAAAgweAOAAAAAAAAAAAAAECCwR0AAAAAAAAAAAAAgASDOwAAAAAAAAAAAAAACQZ3AAAAAAAAAAAAAAASDO4AAAAAAAAAAAAAACQY3AEAAAAAAAAAAAAASDC4AwAAAAAAAAAAAACQYHAHAAAAAAAAAAAAACDB4A4AAAAAAAAAAAAAQILBHQAAAAAAAAAAAACABIM7AAAAAAAAAAAAAAAJBncAAAAAAAAAAAAAABIM7gAAAAAAAAAAAAAAJBjcAQAAAAAAAAAAAABIMLgDAAAAAAAAAAAAAJBgcAcAAAAAAAAAAAAAIMHgDgAAAAAAAAAAAABAgsEdAAAAAAAAAAAAAIAEgzsAAAAAAAAAAAAAAAkGdwAAAAAAAAAAAAAAEgzuAAAAAAAAAAAAAAAkGNwBAAAAAAAAAAAAAEgwuAMAAAAAAAAAAAAAkGBwBwAAAAAAAAAAAAAgweAOAAAAAAAAAAAAAECCwR0AAAAAAAAAAAAAgASDOwAAAAAAAAAAAAAACQZ3AAAAAAAAAAAAAAASDO4AAAAAAAAAAAAAACQY3AEAAAAAAAAAAAAASDC4AwAAAAAAAAAAAACQYHAHAAAAAAAAAAAAACDB4A4AAAAAAAAAAAAAQILBHQAAAAAAAAAAAACABIM7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKR8o+sGdnS1krUAAAAASUVORK5CYII=" />
                    <mask id="mask0">
                        <g filter="url(#alpha)">
                            <use xlinkHref="#image12" />
                        </g>
                    </mask>
                    <clipPath id="clip2">
                        <path d="M 0 18 L 3000 18 L 3000 199.679688 L 0 199.679688 Z M 0 18 " />
                    </clipPath>

                    <clipPath id="clip1">
                        <rect x="0" y="0" width="3000" height="200" />
                    </clipPath>
                    <g id="surface11" clipPath="url(#clip1)">
                        <g clipPath="url(#clip2)" clipRule="nonzero">
                            <path d="M 458.480469 136.355469 C -709.660156 147.523438 -1250.480469 101.035156 -1393.230469 85.007812 L -1393.230469 18.222656 L 7809.894531 18.222656 L 7809.894531 135.636719 C 7611.09375 62.902344 7053.464844 31.539062 6835.285156 128.964844 C 6693.957031 192.066406 6112.785156 217.050781 5831.5625 187.023438 C 5560.027344 151.652344 5429.113281 116.953125 4827.839844 150.988281 C 3828.984375 240.40625 2209.890625 116.152344 1274.761719 127.453125 C 709.796875 134.277344 737.945312 133.6875 458.480469 136.355469 Z M 458.480469 136.355469 " />
                        </g>
                    </g>
                    <image id="image21" width="3000" height="200" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAC7gAAADICAYAAAB4MKxCAAAABmJLR0QA/wD/AP+gvaeTAAALD0lEQVR4nO3aOQGAQADAsONxhHeMsTEAHliuQ6KgArq893YMAAAAAAAAAAAAAACYbJ0dAAAAAAAAAAAAAAAAYxjcAQAAAAAAAAAAAACIMLgDAAAAAAAAAAAAAJBgcAcAAAAAAAAAAAAAIMHgDgAAAAAAAAAAAABAgsEdAAAAAAAAAAAAAIAEgzsAAAAAAAAAAAAAAAkGdwAAAAAAAAAAAAAAEgzuAAAAAAAAAAAAAAAkGNwBAAAAAAAAAAAAAEgwuAMAAAAAAAAAAAAAkGBwBwAAAAAAAAAAAAAgweAOAAAAAAAAAAAAAECCwR0AAAAAAAAAAAAAgASDOwAAAAAAAAAAAAAACQZ3AAAAAAAAAAAAAAASDO4AAAAAAAAAAAAAACQY3AEAAAAAAAAAAAAASDC4AwAAAAAAAAAAAACQYHAHAAAAAAAAAAAAACDB4A4AAAAAAAAAAAAAQILBHQAAAAAAAAAAAACABIM7AAAAAAAAAAAAAAAJBncAAAAAAAAAAAAAABIM7gAAAAAAAAAAAAAAJBjcAQAAAAAAAAAAAABIMLgDAAAAAAAAAAAAAJBgcAcAAAAAAAAAAAAAIMHgDgAAAAAAAAAAAABAgsEdAAAAAAAAAAAAAIAEgzsAAAAAAAAAAAAAAAkGdwAAAAAAAAAAAAAAEgzuAAAAAAAAAAAAAAAkGNwBAAAAAAAAAAAAAEgwuAMAAAAAAAAAAAAAkGBwBwAAAAAAAAAAAAAgweAOAAAAAAAAAAAAAECCwR0AAAAAAAAAAAAAgASDOwAAAAAAAAAAAAAACQZ3AAAAAAAAAAAAAAASDO4AAAAAAAAAAAAAACQY3AEAAAAAAAAAAAAASDC4AwAAAAAAAAAAAACQYHAHAAAAAAAAAAAAACDB4A4AAAAAAAAAAAAAQILBHQAAAAAAAAAAAACABIM7AAAAAAAAAAAAAAAJBncAAAAAAAAAAAAAABIM7gAAAAAAAAAAAAAAJBjcAQAAAAAAAAAAAABIMLgDAAAAAAAAAAAAAJBgcAcAAAAAAAAAAAAAIMHgDgAAAAAAAAAAAABAgsEdAAAAAAAAAAAAAIAEgzsAAAAAAAAAAAAAAAkGdwAAAAAAAAAAAAAAEgzuAAAAAAAAAAAAAAAkGNwBAAAAAAAAAAAAAEgwuAMAAAAAAAAAAAAAkGBwBwAAAAAAAAAAAAAgweAOAAAAAAAAAAAAAECCwR0AAAAAAAAAAAAAgASDOwAAAAAAAAAAAAAACQZ3AAAAAAAAAAAAAAASDO4AAAAAAAAAAAAAACQY3AEAAAAAAAAAAAAASDC4AwAAAAAAAAAAAACQYHAHAAAAAAAAAAAAACDB4A4AAAAAAAAAAAAAQILBHQAAAAAAAAAAAACABIM7AAAAAAAAAAAAAAAJBncAAAAAAAAAAAAAABIM7gAAAAAAAAAAAAAAJBjcAQAAAAAAAAAAAABIMLgDAAAAAAAAAAAAAJBgcAcAAAAAAAAAAAAAIMHgDgAAAAAAAAAAAABAgsEdAAAAAAAAAAAAAIAEgzsAAAAAAAAAAAAAAAkGdwAAAAAAAAAAAAAAEgzuAAAAAAAAAAAAAAAkGNwBAAAAAAAAAAAAAEgwuAMAAAAAAAAAAAAAkGBwBwAAAAAAAAAAAAAgweAOAAAAAAAAAAAAAECCwR0AAAAAAAAAAAAAgASDOwAAAAAAAAAAAAAACQZ3AAAAAAAAAAAAAAASDO4AAAAAAAAAAAAAACQY3AEAAAAAAAAAAAAASDC4AwAAAAAAAAAAAACQYHAHAAAAAAAAAAAAACDB4A4AAAAAAAAAAAAAQILBHQAAAAAAAAAAAACABIM7AAAAAAAAAAAAAAAJBncAAAAAAAAAAAAAABIM7gAAAAAAAAAAAAAAJBjcAQAAAAAAAAAAAABIMLgDAAAAAAAAAAAAAJBgcAcAAAAAAAAAAAAAIMHgDgAAAAAAAAAAAABAgsEdAAAAAAAAAAAAAIAEgzsAAAAAAAAAAAAAAAkGdwAAAAAAAAAAAAAAEgzuAAAAAAAAAAAAAAAkGNwBAAAAAAAAAAAAAEgwuAMAAAAAAAAAAAAAkGBwBwAAAAAAAAAAAAAgweAOAAAAAAAAAAAAAECCwR0AAAAAAAAAAAAAgASDOwAAAAAAAAAAAAAACQZ3AAAAAAAAAAAAAAASDO4AAAAAAAAAAAAAACQY3AEAAAAAAAAAAAAASDC4AwAAAAAAAAAAAACQYHAHAAAAAAAAAAAAACDB4A4AAAAAAAAAAAAAQILBHQAAAAAAAAAAAACABIM7AAAAAAAAAAAAAAAJBncAAAAAAAAAAAAAABIM7gAAAAAAAAAAAAAAJBjcAQAAAAAAAAAAAABIMLgDAAAAAAAAAAAAAJBgcAcAAAAAAAAAAAAAIMHgDgAAAAAAAAAAAABAgsEdAAAAAAAAAAAAAIAEgzsAAAAAAAAAAAAAAAkGdwAAAAAAAAAAAAAAEgzuAAAAAAAAAAAAAAAkGNwBAAAAAAAAAAAAAEgwuAMAAAAAAAAAAAAAkGBwBwAAAAAAAAAAAAAgweAOAAAAAAAAAAAAAECCwR0AAAAAAAAAAAAAgASDOwAAAAAAAAAAAAAACQZ3AAAAAAAAAAAAAAASDO4AAAAAAAAAAAAAACQY3AEAAAAAAAAAAAAASDC4AwAAAAAAAAAAAACQYHAHAAAAAAAAAAAAACDB4A4AAAAAAAAAAAAAQILBHQAAAAAAAAAAAACABIM7AAAAAAAAAAAAAAAJBncAAAAAAAAAAAAAABIM7gAAAAAAAAAAAAAAJBjcAQAAAAAAAAAAAABIMLgDAAAAAAAAAAAAAJBgcAcAAAAAAAAAAAAAIMHgDgAAAAAAAAAAAABAgsEdAAAAAAAAAAAAAIAEgzsAAAAAAAAAAAAAAAkGdwAAAAAAAAAAAAAAEgzuAAAAAAAAAAAAAAAkGNwBAAAAAAAAAAAAAEgwuAMAAAAAAAAAAAAAkGBwBwAAAAAAAAAAAAAgweAOAAAAAAAAAAAAAECCwR0AAAAAAAAAAAAAgASDOwAAAAAAAAAAAAAACQZ3AAAAAAAAAAAAAAASDO4AAAAAAAAAAAAAACQY3AEAAAAAAAAAAAAASDC4AwAAAAAAAAAAAACQYHAHAAAAAAAAAAAAACDB4A4AAAAAAAAAAAAAQILBHQAAAAAAAAAAAACABIM7AAAAAAAAAAAAAAAJBncAAAAAAAAAAAAAABIM7gAAAAAAAAAAAAAAJBjcAQAAAAAAAAAAAABIMLgDAAAAAAAAAAAAAJBgcAcAAAAAAAAAAAAAIMHgDgAAAAAAAAAAAABAgsEdAAAAAAAAAAAAAIAEgzsAAAAAAAAAAAAAAAkGdwAAAAAAAAAAAAAAEgzuAAAAAAAAAAAAAAAkGNwBAAAAAAAAAAAAAEgwuAMAAAAAAAAAAAAAkGBwBwAAAAAAAAAAAAAgweAOAAAAAAAAAAAAAECCwR0AAAAAAAAAAAAAgASDOwAAAAAAAAAAAAAACQZ3AAAAAAAAAAAAAAAS9vGc1+wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/voAOCoGTKy1124AAAAASUVORK5CYII=" />
                    <mask id="mask1">
                        <g filter="url(#alpha)">
                            <use xlinkHref="#image21" />
                        </g>
                    </mask>

                    <clipPath id="clip3">
                        <rect x="0" y="0" width="3000" height="200" />
                    </clipPath>
                    <g id="surface20" clipPath="url(#clip3)">
                        <path d="M -1267.160156 -355.296875 L 7043.777344 -355.296875 L 7043.777344 131.636719 C 6407.605469 238.9375 6000.050781 158.660156 5705.496094 131.636719 C 5170.183594 82.519531 4721.171875 132.695312 4522.371094 143.546875 C 3663.984375 190.40625 2913.4375 123.613281 2007.542969 148.289062 C 330.992188 193.960938 433.515625 61.097656 -1267.160156 82.453125 Z M -1267.160156 -355.296875 " />
                    </g>

                </defs>
                <g id="surface3">
                    <use xlinkHref="#surface11" mask="url(#mask0)" />
                    <use xlinkHref="#surface20" mask="url(#mask1)" />
                    <path d="M 4470.859375 -357.492188 L -1126.542969 -357.492188 L -1126.542969 96.445312 C 16.257812 59.75 462.992188 93.988281 1318.433594 130.5625 C 3001.535156 202.519531 3136.875 41.691406 4396.300781 130.5625 C 4486.613281 136.933594 4704.191406 160.808594 4764.816406 167 C 5009.6875 192.023438 5635.183594 223.054688 6178.253906 146.980469 C 6721.328125 70.910156 7230.46875 151.097656 7417.136719 189.6875 L 7417.136719 -357.492188 Z M 4470.859375 -357.492188 " />
                </g>
            </svg>

        </div >
    )
}

export default Back
