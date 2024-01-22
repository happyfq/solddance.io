import React from 'react';
import Link from 'next/link'

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center">
      <div className="w-full md:w-1/2 pl-20">
        <h1 className="text-5xl mb-10 mt-0">
          <b>
            Embark On a Journey Through the Rich History and Cultural Evolution
          </b>
        </h1>
        <Link
          href="story"
          className="button bg-slate-400 rounded-lg border border-black text-3xl font-medium tracking-tight text-center hover:bg-slate-800 outline-1 w-120 h-40"
          style={{
            backgroundColor: '#512da8',
            padding: '8px 16px',
            fontSize: '18px',
            border: 'none',
          }}
        >
          TIME TRAVEL NOW
        </Link>
      </div>
      <div className="w-full md:w-1/2">
        <div className="relative mb-20">
          <img src="/robot.png" alt="Robot Image" className="ml-4 mt-2" />
          <img
            src="/soldance.png"
            alt="Soldance Image"
            className="absolute bottom-0 left-[-100px]"
          />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
