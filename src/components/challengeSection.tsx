import React from 'react';
import Link from 'next/link'

const challengeSection: React.FC = () => {
    return (
        <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2">
                <h1 className="text-5xl">
                    <b>Test Your Skills, Earn High Scores, and Compete in Thrilling Mini Games</b>
                </h1>
                <Link href="play" className="button bg-purple-900 rounded-lg border px-2 mt-16 border-black text-2xl font-medium tracking-tight text-center hover:bg-slate-800 outline-1 w-120 h-60">
                    Join The challenge
                </Link>
            </div>
            <div className="w-full md:w-1/2">
                <img src="./images/challenge.png" alt="Image Placeholder" className="w-full md:w-1/2" />
            </div>
        </div>
    );
};
export default challengeSection;
