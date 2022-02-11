import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChars } from "../redux/actions";
import Chars from "./Chars";
import Searchbar from "./Searchbar";
import Banner from "./Banner";
import Paging from "./Pagination";
import { BallTriangle } from "react-loader-spinner";

const Home = () => {
  const allChars = useSelector((state) => state.chars);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [charsPerPage, setCharsPerPage] = useState(8);
  const lastCharPerPage = currentPage * charsPerPage;
  const firstCharPerPage = lastCharPerPage - charsPerPage;
  const currentChars = allChars.slice(firstCharPerPage, lastCharPerPage);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChars());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCharsPerPage(charsPerPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Searchbar handlePageClick={handlePageClick} />
      {loading ? (
        <div
          style={{ display: "flex", justifyContent: "center", margin: "2em" }}
        >
          <BallTriangle color="#bfde42" height="35em" width="100%" />
        </div>
      ) : (
        <>
          <Banner id="banner" />
          <Chars allChars={currentChars} />
          <Paging
            totalChars={Math.ceil(allChars.length / 8)}
            handlePageClick={handlePageClick}
          />
        </>
      )}
    </>
  );
};

export default Home;
