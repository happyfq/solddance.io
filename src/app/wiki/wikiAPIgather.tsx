"use client";
import React, { useEffect, useState } from 'react';
import Pagination from 'components/Pagination';
import styles from 'styles/WikiAPI.module.css';

const WikiAPIgather = () => {
  const [dances, setDances] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dancesPerPage = 12;

  useEffect(() => {
    const fetchDances = async () => {
      try {
        const response = await fetch('api/wiki/fulllist'); // GET request
        if (!response.ok) {
          throw new Error('Failed to fetch data.');
        }
        const data = await response.json();
        setDances(data);
      } catch (error) {
        console.error('Error fetching dance data:', error);
      }
    };

    fetchDances();
  }, []);

  const indexOfLastDance = currentPage * dancesPerPage;
  const indexOfFirstDance = indexOfLastDance - dancesPerPage;
  const currentDances = dances.slice(indexOfFirstDance, indexOfLastDance);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };
// Need to fix dance categories
  return (
    <div>
      <div className={styles.grid}>
        {currentDances.map((dance, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.cardContent}>
              <h5 className={styles.cardTitle}>Dance: {dance.dance}</h5>
              <h6 className={styles.cardSubtitle}>Era: {dance.era}</h6>
              <p className={styles.cardText}>Origin: {dance.origin}</p>
              <p className={styles.cardText}>Description: {dance.description}</p>
              <a href={dance.link} target="_blank" rel="noopener noreferrer">
                Watch Video
              </a>
              <p className={styles.cardText}>Pioneers: {dance.pioneers}</p>
              <p className={styles.cardText}>Other Categories: {dance.otherCategories}</p>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        pageCount={Math.ceil(dances.length / dancesPerPage)}
        onPageChange={handlePageChange}
        currentPage={currentPage} // Unsure what's happening here
      />
    </div>
  );
};

export default WikiAPIgather;
