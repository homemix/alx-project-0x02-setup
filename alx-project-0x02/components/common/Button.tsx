import type {FC} from 'react';
import {ButtonProps, ButtonShape, ButtonSize} from '@/interfaces';

const sizeClasses: Record<ButtonSize, string> = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg font-semibold',
};

const shapeClasses: Record<ButtonShape, string> = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-lg': 'rounded-lg',
    'rounded-full': 'rounded-full',
};

const Button: FC<ButtonProps> = ({
                                     children,
                                     size = 'medium',
                                     shape = 'rounded-md',
                                     onClick,
                                     type = 'button',
                                     className = '',
                                 }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`
        bg-gradient-to-r from-blue-600 to-purple-600
        hover:from-blue-700 hover:to-purple-700
        text-white font-medium
        transition-all duration-200 transform hover:scale-105
        shadow-md hover:shadow-xl
        focus:outline-none focus:ring-4 focus:ring-purple-300
        ${sizeClasses[size]}
        ${shapeClasses[shape]}
        ${className}
      `.trim()}
        >
            {children}
        </button>
    );
};

export default Button;