import "./konten.css"; // Menghubungkan file CSS
import buku8 from "./img8.png";
import buku9 from "./img9.png";
import buku10 from "./img10.png";
import buku11 from "./img11.png";

const Konten = () => {
  return (
    <div className="outer-box">
      <div className="inner-box">
        <img src={buku8} />
        <h4 className="judulbuku">The Priory of The Orange Tree</h4>
        <p className="author2">by Samanthan Shannon</p>
        <div>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9734;</span>
        </div>
        <button className="bacabuku">Read Book</button>
      </div>
      <div className="inner-box">
      <img src={buku9} />
        <h4 className="judulbuku">The Priory of The Orange Tree</h4>
        <p className="author2">by Samanthan Shannon</p>
        <div>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9734;</span>
        </div>
        <button className="bacabuku">Read Book</button>
      </div>
      <div className="inner-box">
      <img src={buku10} />
        <h4 className="judulbuku">The Priory of The Orange Tree</h4>
        <p className="author2">by Samanthan Shannon</p>
        <div>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9734;</span>
        </div>
        <button className="bacabuku">Read Book</button>
      </div>
      <div className="inner-box">
      <img src={buku11} />
        <h4 className="judulbuku">The Priory of The Orange Tree</h4>
        <p className="author2">by Samanthan Shannon</p>
        <div>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9734;</span>
        </div>
        <button className="bacabuku">Read Book</button>
      </div>
    </div>
  );
};

export default Konten;
