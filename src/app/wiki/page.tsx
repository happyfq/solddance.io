'use client';

import Link from 'next/link';
import Layout from 'components/layout';
import SearchBar from 'components/searchBar';
import { generateMetadata } from 'components/metadata';
generateMetadata({ title: 'Wiki' });

export default function Wiki() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold text-center underline">Wiki Page</h1>
      <SearchBar />
      <div className="grid gap-4 grid-cols-3 hover:black 	">
        <Link
          href="/era/90"
          className="  p-8  border-black  bg-[url('/eras/90s.jpg')] bg-cover flex justify-center max-w-sm items-center text-5xl	h-64 text-white rounded-3xl"
        >
          <p>90's dance</p>
        </Link>
        <Link
          href="/era/80"
          className="  p-10  border-black  bg-[url('/eras/80s.jpg')] bg-cover text-5xl h-64  flex justify-center items-center text-white rounded-3xl "
        >
          <p>80's dance</p>
        </Link>
        <Link
          href="/era/70"
          className=" p-10  border-black	 bg-[url('/eras/70s.jpg')] bg-cover text-5xl h-64 flex justify-center items-center text-white	rounded-3xl "
        >
          <p>70's dance</p>
        </Link>
        <Link
          href="/era/60"
          className="  p-10  border-black  bg-[url('/eras/60s.jpg')] bg-cover text-5xl h-64 flex justify-center items-center text-white	rounded-3xl"
        >
          <p>60's dance</p>
        </Link>
        <Link
          href="/era/00"
          className="  p-10  border-black bg-[url('/eras/00s.jpg')] bg-cover text-5xl h-64 flex justify-center items-center text-white	 rounded-3xl "
        >
          <p>00's dance</p>
        </Link>
        <Link
          href="/era/10"
          className="  p-10  border-black   bg-[url('/eras/10s.jpg')] bg-cover text-5xl	h-64 flex justify-center items-center text-white rounded-3xl"
        >
          <p>10's dance</p>
        </Link>
      </div>
    </Layout>
  );
}
