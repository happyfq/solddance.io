'use client';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const WalletButton: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <WalletMultiButton />
    </div>
  );
};

export default WalletButton;
