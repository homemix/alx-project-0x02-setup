import type { FC } from 'react';
import { PostProps } from '@/interfaces';

const PostCard: FC<PostProps> = ({ title, content, userId }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-5">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white/90">User ID: {userId}</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold text-white">
            Post
          </span>
                </div>
            </div>

            <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 line-clamp-2">
                    {title}
                </h3>
                <p className="text-gray-600 leading-relaxed line-clamp-4">
                    {content}
                </p>
            </div>

            <div className="px-7 pb-6">
                <button className="text-indigo-600 font-medium hover:text-indigo-800 transition flex items-center group">
                    Read more
                    <svg className="w-4 h-4 ml-1 transition group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default PostCard;