import "./atasfooter.css";
import banner from "./Logo.png";

const Atasfooter = () => {
  return (
    <section className="upfooter">
    <div className="logo left">
          <img src={banner} />
        </div>
        <div className="rightupfooter">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
    </section>    
  );
};

export default Atasfooter;
