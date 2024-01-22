import Layout from 'components/layout';
import { generateMetadata } from 'components/metadata';

import NftSection from 'components/nftSection';

generateMetadata({ title: 'NFTs' });

export default function NFTs() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold text-center underline">NFTs Page</h1>
      <NftSection/>
    </Layout>
    
  );
}
