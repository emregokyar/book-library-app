import { useEffect, useState } from "react";
import { BookModel } from "../../models/BookModel";
import { SpinnerLoading } from "../utils/SpinnerLoading";
import { SearchBook } from "./components/SearchBook";
import { Pagination } from "../utils/Pagination";

export const SearchBooksPage = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [booksPerPage] = useState<number>(5);
  const [totalBooks, setTotalBooks] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [searchUrl, setSearchUrl] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [categoryList, setCategoryList] = useState<string[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const baseUrl: string = "http://localhost:8080/books/filter";
      let url: string = `${baseUrl}?size=${booksPerPage}&page=${
        currentPage - 1
      }&title=${search}&category=${category}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseJson = await response.json();

      setTotalBooks(responseJson.totalItems);
      setTotalPages(responseJson.totalPages);

      // Parse the fetched books and create BookModel instances
      const loadedBooks: BookModel[] = [];
      const searchedCategoryList: string[] = [];
      for (const key in responseJson.books) {
        loadedBooks.push(
          new BookModel(
            responseJson.books[key].id,
            responseJson.books[key].title,
            responseJson.books[key].author,
            responseJson.books[key].description,
            responseJson.books[key].copies,
            responseJson.books[key].copiesAvailable,
            responseJson.books[key].category,
            responseJson.books[key].img
          )
        );

        if (!searchedCategoryList.includes(responseJson.books[key].category)) {
          searchedCategoryList.push(responseJson.books[key].category);
        }
      }
      // Set the fetched books and loading state to false
      setBooks(loadedBooks);
      setCategoryList(searchedCategoryList);
      setIsLoading(false);
    };

    // If any error occurs during fetch, catch it and set the error state
    fetchBooks().catch((error: Error) => {
      setError(error.message);
      setIsLoading(false);
    });
    window.scrollTo(0, 0); // Scroll to top when page changes
  }, [currentPage, searchUrl, category]); //When currentPage changes or search changes, useEffect will re-run

  // If the data is still loading, show a loading spinner
  if (isLoading) {
    return <SpinnerLoading />;
  }

  // If there's an error, display it
  if (error) {
    return (
      <div className="container m-5 text-center">
        <p>{error}</p>
      </div>
    );
  }

  const searchHandleChange = () => {
    // Forking the search url to trigger useEffect
    setSearchUrl(search);
    setCurrentPage(1);
  };

  // Calculate indexes for book pagination - lets say we're on page 2, books indexes will start from 5 to 10
  const indexOfLastBook: number = currentPage * booksPerPage;
  const indexOfFirstBook: number = indexOfLastBook - booksPerPage;
  let lastItem: number =
    booksPerPage * currentPage <= totalBooks
      ? booksPerPage * currentPage
      : totalBooks;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const filterCategory = (selectedCategory: string) => {
    setCategory(selectedCategory);
    setCurrentPage(1);
  };

  return (
    <>
      <div>
        <div className="container">
          <div>
            <div className="row mt-5">
              <div className="col-8">
                <div className="d-flex">
                  <input
                    style={{ backgroundColor: "grey", borderColor: "grey" }}
                    type="search"
                    className="form-control me-2"
                    placeholder="Search"
                    aria-labelled-by="search"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button
                    style={{ color: "grey" }}
                    type="button"
                    className="btn border-bottom rounded-0"
                    onClick={() => searchHandleChange()}
                  >
                    Search
                  </button>
                </div>
              </div>
              <div className="col-4">
                <div className="dropdown">
                  <button
                    style={{ color: "grey" }}
                    type="button"
                    className="btn dropdown-toggle border-bottom rounded-0"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Category
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={(e) => {
                          e.preventDefault();
                          filterCategory("");
                        }}
                      >
                        All
                      </a>
                    </li>
                    {categoryList.map((categoryItem) => (
                      <li key={categoryItem}>
                        <a
                          className="dropdown-item"
                          onClick={(e) => {
                            e.preventDefault();
                            filterCategory(categoryItem);
                          }}
                        >
                          {categoryItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {totalBooks > 0 ? (
              <div>
                <div className="mt-3" style={{ color: "grey" }}>
                  <h5>Number of results: {totalBooks}</h5>
                </div>
                <p style={{ color: "grey" }}>
                  {indexOfFirstBook + 1} to {lastItem} of {totalBooks} items
                </p>
                {books.map((book) => (
                  <SearchBook book={book} key={book.id} />
                ))}
              </div>
            ) : (
              <div className="mt-5 text-center" style={{ color: "grey" }}>
                <h3>Can't find what are you looking for?</h3>
                <a
                  href=""
                  type="button"
                  className="btn btn-md px-4 me-md-2 fw-bold border-bottom rounded-0"
                  style={{ color: "grey" }}
                >
                  Library Services
                </a>
              </div>
            )}

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                paginate={paginate}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
