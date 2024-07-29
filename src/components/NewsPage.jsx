import React, { useState } from "react";
import {
  useGetNewsByCategoryQuery,
  useGetNewsByQueryQuery,
} from "../redux/services/NewsAPI";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setQuery } from "../redux/feature/categorySlice";

const NewsPage = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Read the value of category from categorySlice
  const category = useSelector((state) => state.category.category);

  // Read the value of query from categorySlice
  const query = useSelector((state) => state.category.query);

  // useDispatch to set the category and query
  const dispatch = useDispatch();

  const {
    data: allNews,
    isLoading: isAllNewsLoading,
    isError: isAllNewsError,
  } = useGetNewsByCategoryQuery(category);

  const {
    data: searchedNews,
    isLoading: isSearchedNewsLoading,
    isError: isSearchedNewsError,
  } = useGetNewsByQueryQuery(query);

  if (isAllNewsError) {
    return <h1>Error Fetching News!!!!!!!</h1>;
  }

  // Set query and fetch the searched News
  const searchNews = () => {
    dispatch(setQuery(document.getElementById("searchQuery").value));
    setCurrentPage(1);
  };

  // Handle category change and clear search query
  const handleCategoryChange = (e) => {
    dispatch(setCategory(e.target.value));
    dispatch(setQuery(""));
    setCurrentPage(1);
    document.getElementById("searchQuery").value = "";
  };

  const getPageData = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  };

  const pageData = query && searchedNews ? getPageData(searchedNews.results) : getPageData(allNews ? allNews.results : []);

  const totalPages = Math.ceil(
    (query && searchedNews ? searchedNews.results.length : allNews ? allNews.results.length : 0) / itemsPerPage
  );

  return (
    <div>
      <div className="shadow-md p-3 text-center sm:flex sm:justify-between sm:items-center sm:w-full px-4 sm:px-20">
        <div>
          <input
            type="text"
            className="bg-slate-200 py-1 outline-none px-3"
            id="searchQuery"
          />
          <button
            className="bg-black text-white px-5 py-1 rounded-r-xl"
            onClick={searchNews}
          >
            SEARCH
          </button>
        </div>
        <select
          onChange={handleCategoryChange}
          className="mt-3 border rounded-lg outline-none p-3 hover:shadow-sm font-bold"
        >
          <option value="">Category</option>
          <option value="world">World</option>
          <option value="technology">Technology</option>
          <option value="sports">Sports</option>
        </select>
      </div>
      <div className="my-10 sm:flex sm:flex-wrap sm:justify-between sm:px-20">
        {isAllNewsLoading || isSearchedNewsLoading ? (
          <h1>Loading.....</h1>
        ) : (
          pageData.map((item) => (
            <div
              key={item.id}
              className="shadow-md border p-5 mb-10 sm:w-72 lg:w-96"
            >
              <img src={item.image_url} alt="" className="w-full" />
              <h1 className="">{item.title}</h1>
            </div>
          ))
        )}
      </div>
      <div className="flex justify-center mb-10">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 border rounded-l-md"
        >
          Previous
        </button>
        <span className="px-3 py-1">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 border rounded-r-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NewsPage;
