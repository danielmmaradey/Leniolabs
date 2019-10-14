// Module Dependecies
import React from 'react';

// Module main Component
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <nav id="pagination">
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <button onClick={(e) => paginate(e, number)} className="page-link">
                                {number}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Pagination;
