import "./Header.css";
import banner from "./Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { axiosInstance } from "../api";
import { useDispatch } from "react-redux";
import {
  searchKeyword,
  updateSearchResults,
} from "../Redux/search/searchSlice";

const Header = () => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelSearch = async () => {
    try {
      const response = await axiosInstance.get(`books?search=${query}`);

      const searchResults = response.data.data;

      if (searchResults.length === 0) {
        navigate("notfound");
        dispatch(searchKeyword(query));
        setQuery("");
      } else {
        dispatch(updateSearchResults(searchResults));
        dispatch(searchKeyword(query));
        navigate("search");
        setQuery("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handelSearch();
    }
  };

  return (
    <header className="app-header">
      <div className="logo left">
        <img src={banner} alt="Logo" />
      </div>
      <div className="right">
        <nav>
          <ul className="menu">
            <li>
              <Link to={"/"}>All</Link>
            </li>
            <li>
              <Link to={"/latest"}>Latest</Link>
            </li>
            <li>
              <Link to={"/top-pics"}>Top Picks</Link>
            </li>
          </ul>
        </nav>
        <div className="search-bar">
          <form>
            <input
              type="text"
              name="search"
              className="search-input"
              placeholder="&#xF002; Search by title or authors..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={handleKey}
            />
          </form>
        </div>
        <div className="login">
          <button>Edit List</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
