import type React from "react";

export const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  paginate: any;
}> = (props) => {
  const pageNumbers: number[] = [];

  // Handle pagination when the current page is 1 or greater
  if (props.currentPage === 1) {
    pageNumbers.push(props.currentPage);
    if (props.totalPages > props.currentPage) {
      pageNumbers.push(props.currentPage + 1);
    }
    if (props.totalPages > props.currentPage + 1) {
      pageNumbers.push(props.currentPage + 2);
    }
  } else if (props.currentPage < props.totalPages) {
    if (props.currentPage > 1) {
      pageNumbers.push(props.currentPage - 1);
    }
    pageNumbers.push(props.currentPage);
    if (props.currentPage < props.totalPages) {
      pageNumbers.push(props.currentPage + 1);
    }
    if (props.currentPage + 1 < props.totalPages) {
      pageNumbers.push(props.currentPage + 2);
    }
  }

  // Adjust page range for last page scenario
  if (props.currentPage === props.totalPages) {
    if (props.totalPages - 2 > 0) {
      pageNumbers.push(props.currentPage - 2);
    }
    if (props.totalPages - 1 > 0) {
      pageNumbers.push(props.currentPage - 1);
    }
    pageNumbers.push(props.currentPage);
  }

  return (
    <nav aria-label="Pagination controls">
      <ul className="pagination">
        <li
          className={`page-item ${props.currentPage === 1 ? "disabled" : ""}`}
          onClick={() => props.currentPage > 1 && props.paginate(1)}
        >
          <button
            className="page-link"
            disabled={props.currentPage === 1}
            style={{ backgroundColor: "grey", color: "black" }}
          >
            First Page
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${
              props.currentPage === number ? "active" : ""
            }`}
            onClick={() => props.paginate(number)}
          >
            <button
              className="page-link"
              style={{ backgroundColor: "grey", color: "black" }}
            >
              {number}
            </button>
          </li>
        ))}
        <li
          className={`page-item ${
            props.currentPage === props.totalPages ? "disabled" : ""
          }`}
          onClick={() =>
            props.currentPage < props.totalPages &&
            props.paginate(props.totalPages)
          }
        >
          <button
            className="page-link"
            disabled={props.currentPage === props.totalPages}
            style={{ backgroundColor: "grey", color: "black" }}
          >
            Last Page
          </button>
        </li>
      </ul>
    </nav>
  );
};
