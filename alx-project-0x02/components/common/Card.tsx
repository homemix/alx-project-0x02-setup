import type { FC } from 'react';
import { type CardProps } from '@/interfaces';

const Card: FC<CardProps> = ({ title, content }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden max-w-md mx-auto">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
                <h3 className="text-2xl font-bold text-white">{title}</h3>
            </div>
            <div className="p-8">
                <p className="text-gray-700 text-lg leading-relaxed">{content}</p>
            </div>
        </div>
    );
};

export default Card;