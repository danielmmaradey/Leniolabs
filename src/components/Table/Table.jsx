// Module Dependencies
import React, { useState } from "react";

// Module Components
import HeadTable from "./HeadTable/HeadTable";
import BodyTable from "./BodyTable/BodyTable";
import Pagination from "./Pagination/Pagination";

// Module main Component
const Table = props => {
  const { head, body, nameColums } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);

  const actionDelete = colum => {
    if (props.btnDelete !== undefined) {
      props.btnDelete(colum);
    }
  };

  const actionEdit = colum => {
    if (props.btnEdit !== undefined) {
      props.btnEdit(colum);
    }
  };

  const actionView = colum => {
    if (props.btnView !== undefined) {
      props.btnView(colum);
    }
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFistPost = indexOfLastPost - postsPerPage;
  const currentPosts = body.slice(indexOfFistPost, indexOfLastPost);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={body.length}
        paginate={paginate}
      />
      <table className="table" id="table">
        <HeadTable headtable={head} />
        <tbody>
          {currentPosts &&
            currentPosts.map((colum, key) => {
              const count = key;
              return (
                <BodyTable
                  count={count}
                  key={key}
                  colum={colum}
                  names={nameColums}
                  deleteColum={actionDelete}
                  editColum={actionEdit}
                  viewColum={actionView}
                />
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
