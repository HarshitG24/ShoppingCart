import "../Pagination/css/Pagination.css";

function Pagination({ productsPerPage, totalProducts, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((num) => (
          <li key={num} className="page-item">
            <a
              onClick={() => paginate(num)}
              href="!#"
              className={num === currentPage ? "page-link-active" : "page-link"}
            >
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
