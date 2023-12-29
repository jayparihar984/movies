"use client";
import { useState, useEffect } from "react";
import MovieCard from "@/components/MovieCard";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RxExit } from "react-icons/rx";
import Pagination from "react-js-pagination";
import axios from "axios";
/*export async function loadTasks() {
  await dbConnect();
  const movies = await Task.find();
  return movies;
}*/

export default function HomePage() {
  // const movies = await loadTasks();
  const [movies, setMovies] = useState([]);
  const [noRecord, setNoRecord] = useState(false);
  const router = useRouter();
  const [activePage, setActivePage] = useState(1);
  const [tottalItem, setTottalItem] = useState(0);
  const [perPage, setPerPage] = useState(0);

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };

  const getMovies = async () => {
    const localUser = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : "";
    const fd = new FormData();
    fd.append("page", activePage);
    fd.append("action", "get-all");
    fd.append("page_count", 8);
    axios
      .post("/api/movies", fd, {
        headers: { Authorization: `Bearer ${localUser?.token}` },
      })
      .then(function (response) {
        setMovies(response.data.data);
        setTottalItem(response.data.total_count);
        setPerPage(response.data.pageSize);
        setNoRecord(true);
      })
      .catch(function (error) {
        if (error.response.status == 401) {
          localStorage.setItem("userData", "");
          router.push("/");
        }
      });

    axios
      .post("/api/movies", fd)
      .then(function (response) {
        setMovies(response.data.data);
        setTottalItem(response.data.total_count);
        setNoRecord(true);
      })
      .catch(function (error) {});
  };

  const logout = () => {
    localStorage.setItem("userData", "");
    router.push("/");
  };

  const checkLogin = () => {
    const user = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : "";
    if (!user) {
      router.push("/");
    } else {
      //getMovies();
    }
  };

  useEffect(() => {
    getMovies();
  }, [activePage]);

  useEffect(() => {
    checkLogin();
  }, []);

  const addMovieHandler = () => {
    router.push("/movies/new");
  };
  return (
    <>
      {movies.length > 0 && (
        <>
          <div className="container movieShowContainer">
            <nav className="pt-5 pb-3">
              <div className="px-10 md:px-0 mx-auto flex justify-between">
                <div>
                  <span className="text-4xl font-bold">My Movies</span>
                  <Link href="/movies/new">
                    <IoIosAddCircleOutline className="d-inline-block h1 ml-2" />
                  </Link>
                </div>
                <div onClick={() => logout()}>
                  <button>
                    Logout <RxExit className="d-inline-block ml-3" />
                  </button>
                </div>
              </div>
            </nav>
            <div>
              <div className="d-flex flex-wrap gap-lg-5 gap-md-1 gap-sm-6">
                {movies.map((movie) => (
                  <MovieCard movie={movie} key={movie._id} />
                ))}
              </div>
            </div>
            {noRecord == true && tottalItem > perPage && movies.length > 0 && (
              <div className="Pagination-static">
                <Pagination
                  activePage={activePage}
                  itemsCountPerPage={perPage}
                  totalItemsCount={tottalItem}
                  pageRangeDisplayed={perPage}
                  onChange={handlePageChange}
                  itemClass="page-item"
                  linkClass="page-link"
                  innerClass="pagination justify-content-center"
                  activeLinkClass="active"
                  nextPageText="Next"
                  prevPageText="Prev"
                />
              </div>
            )}
          </div>
          <div className="moviesCardBottomImage">
            <img src="./Vector2.png" width={"100%"} />
          </div>
        </>
      )}
      {noRecord == true && movies.length == 0 && (
        <div className="movieShowContainer">
          <div className="HomePage">
            <h1>Your movie list is empty</h1>
            <span className="newMoviebtn fw-bold" onClick={addMovieHandler}>
              Add a new movie
            </span>
          </div>
          <div className="bottomImage">
            <img src="./Vector2.png" width={"100%"} />
          </div>
        </div>
      )}
    </>
  );
}
