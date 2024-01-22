'use client'

import Layout from 'components/layout';
import { generateMetadata } from 'components/metadata';
import { motion } from 'framer-motion';

generateMetadata({ title: 'Play' });

export default function Play() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold text-center underline">Play Page</h1>
    </Layout>
  );
}
