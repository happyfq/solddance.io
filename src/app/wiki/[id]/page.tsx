'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Breadcrumbs from 'components/Breadcrumbs';
import Layout from 'components/layout';

interface Dance {
  dance: string;
  era: string;
  origin: string;
  description: string;
  link: string;
  pioneers: string;
  otherCategories: string;
}

const Dance = () => {
  function extractVideoId(url) {
    if (!url) return;
    const regex =
      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?feature=player_embedded&v=))([\w-]{11})/;
    const match = url.match(regex);

    if (match && match[1]) {
      return match[1];
    } else {
      console.error('Invalid YouTube URL:', url);
      return null;
    }
  }
  const path = usePathname();
  const dance = path?.split('/').at(-1);
  const [data, setData] = useState<Dance>({
    dance: '',
    era: '',
    origin: '',
    description: '',
    link: '',
    pioneers: '',
    otherCategories: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/wiki/single?dance=${dance}`);

        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dance]);
  const categoriesArray = data.otherCategories
    ?.split(',')
    .map(category => category.trim());

  return (
    <Layout>
      <Breadcrumbs />
      <div className="md:grid md:grid-cols-2">
        <div className="order-2 md:col-span-1">
          <div className="text-center md:text-lg md:text-left xl:text-xl font-bold">
            {data.dance}
          </div>
          <div className="text-center md:text-left">{data.description}</div>
        </div>
        <div className="order-1 mt-2 md:mt-0 flex flex-col justify-center items-center md:col-span-1 md:row-span-2">
          <iframe
            width="75%"
            height="315"
            src={`https://www.youtube.com/embed/${extractVideoId(data.link)}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="text-start text-md md:text-left  italic  mt-1">
            Powered by{' '}
            <a
              href="https://wikidance.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              WikiDance
            </a>
          </div>
        </div>
        <div className="order-3 mt-2 md:col-span-1">
          {data && (
            <div className="font-normal	">
              Tags:{' '}
              {categoriesArray.map((category, index) => (
                <span
                  className="border-solid mt-2  mr-2 border-2 p-1 border-white rounded-2xl"
                  key={index}
                >
                  {category}{' '}
                </span>
              ))}
            </div>
          )}
          <div>
            <div className="mt-2">Did you like this topic?</div>
            <div className="flex mt-2 space-x-2">
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 9C22 8.46957 21.7893 7.96086 21.4142 7.58579C21.0391 7.21071 20.5304 7 20 7H13.68L14.64 2.43C14.66 2.33 14.67 2.22 14.67 2.11C14.67 1.7 14.5 1.32 14.23 1.05L13.17 0L6.59 6.58C6.22 6.95 6 7.45 6 8V18C6 18.5304 6.21071 19.0391 6.58579 19.4142C6.96086 19.7893 7.46957 20 8 20H17C17.83 20 18.54 19.5 18.84 18.78L21.86 11.73C21.95 11.5 22 11.26 22 11V9ZM0 20H4V8H0V20Z"
                  fill="white"
                />
              </svg>

              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 11C0 11.5304 0.210714 12.0391 0.585787 12.4142C0.960859 12.7893 1.46957 13 2 13H8.32L7.36 17.57C7.34 17.67 7.33 17.78 7.33 17.89C7.33 18.3 7.5 18.68 7.77 18.95L8.83 20L15.41 13.42C15.78 13.05 16 12.55 16 12V2C16 1.46957 15.7893 0.960859 15.4142 0.585787C15.0391 0.210714 14.5304 0 14 0H5C4.17 0 3.46 0.5 3.16 1.22L0.139999 8.27C0.0499992 8.5 0 8.74 0 9V11ZM22 0H18V12H22V0Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dance;
