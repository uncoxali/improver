import React, { FC } from 'react';
import styles from './style.module.css';
import cn from 'classnames';

interface Props
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    placeholder?: string;
    labelClassName?: string;
    register?: any;
    className?: string;
    error?: string;
}

const Input: FC<Props> = ({ title, className, labelClassName, register, error, ...otherProps }) => {
    return (
        <div className="relative ml-5">
            {/* <label
                className={cn(error && styles.error, labelClassName)}
                htmlFor={otherProps.name}
            >
                {title}
            </label> */}
            <input
                ref={register}
                id={otherProps.name}
                className={cn("border-b-2 border-white outline-none w-2/3", error && styles.error, className)}
                {...otherProps}
                pattern=".+"
                required
            />



            <div className="text-xs px-4 h-5 flex items-center overflow-hidden text-left text-red-600">
                {error && error}
            </div>
        </div>
    );
};

export default Input;
