import React from 'react';


const NftSection: React.FC = () => {
    return (
        <div>
            <h1 className="text-5xl text-center">
                <b>Discover Rare Radiatron NFTs Coming Soon!</b>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 box-container">
                <div>
                    <img src="./images/copper.png" alt="copper.jpg" className="ml-4 mt-2 " />
                    
                </div>
                <div>
                    <img src="./images/gold.png" alt="gold.jpg" className="ml-4 mt-2 " />
                    
                </div>
                <div>
                    <img src="./images/silver.png" alt="silver.jpg" className="ml-4 mt-2" />
                    
                </div>
            </div>
        </div>
    );
};

export default NftSection;