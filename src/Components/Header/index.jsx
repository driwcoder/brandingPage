/* eslint-disable react/prop-types */
import "../../App.css";
import sun from "../../../public/assets/sun.png";
import moon from "../../../public/assets/moon.png";
import logo from "../../../public/assets/logo.png";

export default function Header({ actualMode, setState }) {
  const changeMode = () => {
    actualMode === "light" ? setState("dark") : setState("light");
  };

  var currentImg = "";
  var currentMode = ''

  currentImg = actualMode === "light" ? moon : sun;
  currentMode = actualMode === 'dark' ? 'header-dark' : 'header-content'

  return (
    <header>
      <div className={`${currentMode} .forma`}>
        <img src={logo} alt="logo" className="logotipo"/>
        <div onClick={changeMode} className="button">
          <img src={currentImg} alt="modo" className="modeImg"/>
        </div>
      </div>
    </header>
  );
}
