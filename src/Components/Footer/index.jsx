/* eslint-disable react/prop-types */
// import "./style.css";
import "../../App.css";
import logo from "../../../public/assets/logo.png";
import behance from '../../../public/assets/behance.png'
import dribble from '../../../public/assets/dribble.png'
import facebook from '../../../public/assets/facebook.png'
import google from '../../../public/assets/google-plus.png'
import linkedIn from '../../../public/assets/linkedin.png'
import twitter from '../../../public/assets/twitter.png'

export default function Footer({actualMode}) {

  
  var footerMode = ''
  footerMode = actualMode === 'dark' ? 'footer-dark' : 'footer'

  return (
    <footer className={`${footerMode}`}>
      <div className={`footer-content forma`}>
        <img src={logo} alt="logo" className="logotipo" />
        <p className="footer-text">Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.</p>
        <div className="socials">
          <img src={behance} alt="" />
          <img src={dribble} alt="" />
          <img src={facebook} alt="" />
          <img src={google} alt="" />
          <img src={linkedIn} alt="" />
          <img src={twitter} alt="" />
        </div>
        <p>Copyright 2023 <span>@driwCoder</span></p>
      </div>
    </footer>
  );
}
