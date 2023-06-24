/* eslint-disable react/prop-types */
// import "./style.css";
import "../../App.css";
import logo from "../../../public/assets/logo.png";
export default function Footer({actualMode}) {

  
  var footerMode = ''
  footerMode = actualMode === 'dark' ? 'footer-dark' : 'footer'

  return (
    <footer className={`${footerMode}`}>
      <div className={`footer-content forma`}>
        <img src={logo} alt="logo" className="logotipo" />
        <p className="footer-text">Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.</p>
        <div className="socials">
          <img src="public/assets/behance.png" alt="" />
          <img src="public/assets/dribble.png" alt="" />
          <img src="public/assets/facebook.png" alt="" />
          <img src="public/assets/google-plus.png" alt="" />
          <img src="public/assets/linkedin.png" alt="" />
          <img src="public/assets/twitter.png" alt="" />
        </div>
        <p>Copyright 2023 <span>@driwCoder</span></p>
      </div>
    </footer>
  );
}
