import React from 'react';

const BenefitsSection: React.FC = () => {
  return (
    <div>
      <h1 className="text-5xl text-left">
        <b>Unlock Exclusive Benefits</b>
      </h1>
      <p>Experience The Digital Dance Token Revolution and Unlock Exclusive Benefits</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 box-container">
        <div className="relative flex flex-col items-end">
          <img src="./images/exclusive nfts.png"  className="ml-4 mt-2 w-full h-auto" />
          <div className="absolute bottom-9 left-0 right-3 ps-8 text-white text-xl font-bold w-60 flex-none">
            Exclusive NFT Offers
          </div>
        </div>
        <div className="relative flex flex-col items-end">
          <img src="./images/learning resources.png" className="ml-4 mt-2 w-full h-auto" />
          <div className="absolute bottom-9 left-0 right-0 ps-8 text-white text-xl font-bold w-60 flex-none">
            Enhanced Learning Resource
          </div>
        </div>

        <div className="relative flex flex-col items-end">
          <img src="./images/community rewards.png"  className="ml-4 mt-2 w-full h-auto" />
          <div className="absolute bottom-9 left-0 right-0 ps-8 text-white text-xl font-bold w-60 flex-none">
            Community Rewards and Voting
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;