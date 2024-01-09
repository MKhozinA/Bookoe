// Footer.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Menghubungkan file CSS

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="container">
        <div className="left-section">
          <p>Copyright © 2024 Khozin | All right Reserved</p>
        </div>
        <div className="right-section">
          <ul className="social-icons">
            <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
