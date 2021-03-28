import { FC, useRef, useEffect, ReactNode } from 'react';
import Portal from '@reach/portal';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

interface Props {
    children: ReactNode;
    visible: boolean;
    onClose: VoidFunction;
    className?: string;
}
const Modal: FC<Props> = ({ children, visible, onClose, className }) => {
    const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        if (ref.current) {
            if (visible) {
                disableBodyScroll(ref.current);
            } else {
                enableBodyScroll(ref.current);
            }
        }
        return () => {
            clearAllBodyScrollLocks();
        };
    }, [visible]);

    return (
        <Portal>
            <>
                {visible && (
                    <div
                        ref={ref}

                        className="bg-black opacity-80 right-0 left-0 top-0 bottom-0 z-20 w-screen h-screen fixed"
                    ></div>
                )}
                <div
                    className={` w-full absolute left-0  top-0  flex justify-center items-center ${visible && 'h-screen'
                        }`}
                >
                    <div
                        className={` transform transition-all ${className} duration-700 ${!visible ? '-translate-y-20 opacity-0' : 'opacity-100 translate-x-0'
                            }  fixed z-50`}
                    >
                        {visible && children}
                    </div>
                </div>
            </>
        </Portal>
    );
};

export default Modal;
