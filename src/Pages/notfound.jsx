import Tidakada from "../Component/404/notfound";
import Atasfooter from "../Component/Atasfooter";
import NewsletterForm from "../Component/Email";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import HeroSearch from "../Component/HeroSection/herosearch";

const NotFound = () => {
  return (
    <div className="App">
      <Header /> 
      <HeroSearch />
      <Tidakada />
      <NewsletterForm />
      <Atasfooter />
      <Footer />
    </div>
  );
};

export default NotFound;
