'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from 'styles/WikiAPI.module.css';
import Pagination from 'components/Pagination';
import Layout from './layout';

const SearchResults = () => {
  const query = useSearchParams().get('query');
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = results.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = selectedPage => {
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`/api/wiki/search?query=${query}`);
        if (!response.ok) {
          throw new Error('Failed to fetch search results.');
        }
        const searchData = await response.json();
        setResults(searchData);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <Layout>
      <div className={styles.grid} >
        {currentItems.map((result, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.cardContent}>
              <h5 className={styles.cardTitle}>Dance: {result.dance}</h5>
              <h6 className={styles.cardSubtitle}>Era: {result.era}</h6>
              <p className={styles.cardText}>Origin: {result.origin}</p>
              <p className={styles.cardText}>
                Description: {result.description}
              </p>
              <a href={result.link} target="_blank" rel="noopener noreferrer">
                Watch Video
              </a>
              <p className={styles.cardText}>Pioneers: {result.pioneers}</p>
              <p className={styles.cardText}>
                Other Categories: {result.otherCategories}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        pageCount={Math.ceil(results.length / itemsPerPage)}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </Layout>
  );
};

export default SearchResults;
