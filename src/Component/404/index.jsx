import "./404.css"; 
import books from "./Books.png";
import { Link } from "react-router-dom"

const Eror = () => {
  return (
    <div className="errpages">
        <img className="bukubuku" src={books} alt="books" />
        <div className="boxerr">
            <h1 className="empatratusempat">404</h1>
            <p className="tersesat">Looks like you’ve got lost...</p>
            <p className="gaada">The page you’re looking for doesn’t exist or has been moved.</p>
            <button className="backhome"><Link to={"/"}>Back Home</Link></button>
        </div>
    </div>
  );
};

export default Eror;