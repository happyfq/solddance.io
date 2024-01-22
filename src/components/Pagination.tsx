"use client";

import ReactPaginate from 'react-paginate';
import styles from "../styles/Pagination.module.css";


const Pagination = ({ pageCount, onPageChange}) => {
  const handlePageClick = ({ selected }) => {
    onPageChange(selected + 1); 
  };

  
  return (
    <div className={styles.container}>
      <div className={styles.paginationContainer}>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={styles.pagination}
          pageClassName={styles.pageItem}
          pageLinkClassName={styles.pageLink}
          activeClassName={styles.active}
          disabledClassName={styles.disabled}
        />
      </div>
    </div>
  );
};

export default Pagination;