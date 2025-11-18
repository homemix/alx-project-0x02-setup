// components/common/UserCard.tsx
import type { FC } from 'react';
import { UserProps } from '@/interfaces';

const UserCard: FC<UserProps> = ({
                                     name,
                                     username,
                                     email,
                                     address,
                                     phone,
                                     website,
                                     company,
                                 }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-6 text-white">
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="text-sm opacity-90">@{username}</p>
            </div>

            <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700">{email}</span>
                </div>

                <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600 text-sm">
            {address.street}, {address.city}
          </span>
                </div>

                <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm-.83.83a3 3 0 10-4.242 4.242 3 3 0 004.242-4.242z" />
                    </svg>
                    <span className="text-gray-700">{website}</span>
                </div>

                <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-medium text-gray-500">Works at</p>
                    <p className="text-lg font-semibold text-teal-600">{company.name}</p>
                </div>
            </div>

            <div className="px-6 pb-5">
                <button className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:shadow-md">
                    View Profile
                </button>
            </div>
        </div>
    );
};

export default UserCard;