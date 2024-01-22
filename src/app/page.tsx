'use client';
import { generateMetadata } from 'components/metadata';
import Layout from 'components/layout';
import Accordion from 'components/accordion/accordionOne';
import NftSection from 'components/nftSection';
import BenefitsSection from 'components/benefitsSection';
import HeroSection from 'components/herosection';
import ChallengeSection from 'components/challengeSection';
import items from '../../src/components/accordion.json';

generateMetadata({ title: 'Home' });

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <NftSection />
      <BenefitsSection />
      <ChallengeSection />
      <Accordion items={items} />
    </Layout>
  );
}
