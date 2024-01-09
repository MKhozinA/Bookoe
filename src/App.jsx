import { Outlet } from "react-router-dom";
import Atasfooter from "./Component/Atasfooter";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import NewsletterForm from "./Component/Email";

const App = () => {
  return (
    <div className="App">
      <Header /> 
      <div>
        <Outlet />
      </div>
      <NewsletterForm />
      <Atasfooter />
      <Footer />
    </div>
  );
}

export default App
