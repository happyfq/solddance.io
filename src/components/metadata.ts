import { Metadata } from 'next';

const generateMetadata = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return {
    title: `${title} | SolDance`,
    description: description ?? 'SolDance NFT', //edit here
    // add more props here
    openGraph: {
      title: `${title} | SolDance`,
      description: description ?? 'SolDance NFT', //edit here
      type: 'website',
    },
    twitter: {
      title: `${title} | SolDance`,
      description: description ?? 'SolDance NFT', //edit here
    },
  } as Metadata;
};

export { generateMetadata };
