import React from 'react';

const Pagination = ({ page, pages, count }) => (
  <div className="pagination">
    <div className="pagination__prev">{page > 1 && <a href={`/stores/page/${page - 1}`}>Prev</a>}</div>
    <div className="pagination__text">
      <p>
        Page #{page} of #{pages} — #{count} total results
      </p>
    </div>
    <div className="pagination__next">{page < pages && <a href={`/stores/page/${parseFloat(page) + 1}`}>Next</a>}</div>
  </div>
);

export default Pagination;
