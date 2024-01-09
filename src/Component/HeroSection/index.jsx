import "./HeroSection.css";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchBooksData } from "../redux/allBooks/booksAsync"

const HeroSection = () => {
  const [foundHighestRating, setFoundHighestRating] = useState(null)
  const dispatch = useDispatch()
  const booksData = useSelector((state) => state.books.books)

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchBooksData())
    }
    fetchData()
  }, [dispatch])

  useEffect(() => {
    const ratting = Math.max(...booksData.map((book) => book.rating), 0)
    const bookWithHighestRating = booksData.find(
      (book) => book.rating === ratting
    )

    setFoundHighestRating(bookWithHighestRating)
  }, [booksData])

  return (
    <div className="hero">
      <div className="box">
        <div className="content">
          <div className="must-read">Must Read</div>
          <h1 className="book-title">{foundHighestRating?.title}</h1>
          <div className="author-info">
            <p>
            {foundHighestRating?.author?.name || ""}
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9734;</span>
            </p>
          </div>
          <p className="lorem">
          {foundHighestRating?.synopsis}
          </p>
          <div className="buttons">
            <button className="read-book-btn"><Link to={`/book/${foundHighestRating?.id}`}>Read Book</Link></button>
            <button className="see-all-btn"><Link to={"/top-pics"}>See All Recommendations</Link></button>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="red">
          <img className="image" src={foundHighestRating?.image_url} alt="buku" />
        </div>
        <div className="blue">
          <img className="image" src={foundHighestRating?.image_url} alt="buku" />
        </div>
        <div className="green">
          <img className="image" src={foundHighestRating?.image_url} alt="buku" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
