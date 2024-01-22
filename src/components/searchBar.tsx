import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';

interface DanceEntry {
  dance: string;
}

const SearchBar: FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState<DanceEntry[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (query: string) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/wiki/search?query=${query}`);

      if (!res.ok) {
        throw new Error('Failed to fetch data from /api/wiki/search');
      }

      const apiData = await res.json();
      setData(apiData);
    } catch (error) {
      console.error(`Error fetching data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (searchQuery.trim().length > 0) {
        fetchData(searchQuery.trim());
      }
    }, 1000); // only fetch when the user stops typing for 1 second

    return () => clearTimeout(debounce);
  }, [searchQuery]);

  return (
    <div className="flex justify-center">
      <input
        onKeyDown={e => {
          if (e.key === 'Enter') router.push(`/searchend?query=${searchQuery}`);
        }}
        placeholder="find a dance"
        className="max-w-[600px] w-full px-4 py-2 border-slate-500 border-2 rounded-xl bg-slate-800 focus:outline-none focus:ring-2 focus:border-blue-200 caret-blue-900 text-slate-400"
        value={searchQuery}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchQuery(e.target.value);
        }}
      />
      <img src="search.svg" alt="search" width={24} height={24} className='translate-x-[-40px]' />
      <div
        className={`flex-col flex max-w-[600px] border-2 rounded-xl p-3 gap-4 mt-2 absolute top-44 bg-slate-800 text-slate-400 border-slate-500 translate-x-[-10px] z-50 w-full ${!searchQuery && 'hidden'
          }`}
      >
        {loading ? (
          <p>Searching...</p>
        ) : searchQuery && data.length ? (
          data.map((entry, index) => (
            <button
              key={index}
              className="flex justify-between rounded-xl px-3 py-2 border-2 bg-slate-900 text-white border-slate-500"
              onClick={() => router.push(`/wiki/${entry.dance}`)}
            >
              <p>{entry.dance}</p>
              <span>Select →</span>
            </button>
          ))
        ) : (
          <p>No dances found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
