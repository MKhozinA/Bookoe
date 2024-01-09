import "./content.css"; // Menghubungkan file CSS
import buku4 from "./img4.png";
import buku5 from "./img5.png";
import buku6 from "./img6.png";
import buku7 from "./img7.png";

const Content = () => {
  return (
    <div className="wrappercontent">
      <div className="boxcontent">
        <div className="leftcontent">
          <img src={buku4} />
        </div>
        <div className="rightcontent">
          <h4 className="judulbuku">The Mind Of A Leader</h4>
          <p className="author">by Kevin Anderson</p>
          <div className="circlerating">4.0</div>
          <p className="loremkonten">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim...
          </p>
          <button className="bacabuku">Read Book</button>
        </div>
      </div>
      <div className="boxcontent">
        <div className="leftcontent">
          <img src={buku5} />
        </div>
        <div className="rightcontent">
          <h4 className="judulbuku">The Mind Of A Leader</h4>
          <p className="author">by Kevin Anderson</p>
          <div className="circlerating">4.0</div>

          <p className="loremkonten">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim...
          </p>
          <button className="bacabuku">Read Book</button>
        </div>
      </div>
      <div className="boxcontent">
        <div className="leftcontent">
          <img src={buku6} />
        </div>
        <div className="rightcontent">
          <h4 className="judulbuku">The Mind Of A Leader</h4>
          <p className="author">by Kevin Anderson</p>
          <div className="circlerating">4.0</div>
          <p className="loremkonten">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim...
          </p>
          <button className="bacabuku">Read Book</button>
        </div>
      </div>
      <div className="boxcontent">
        <div className="leftcontent">
          <img src={buku7} />
        </div>
        <div className="rightcontent">
          <h4 className="judulbuku">The Mind Of A Leader</h4>
          <p className="author">by Kevin Anderson</p>
          <div className="circlerating">4.0</div>
          <p className="loremkonten">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim...
          </p>
          <button className="bacabuku">Read Book</button>
        </div>
      </div>
    </div>
  );
};

export default Content;
