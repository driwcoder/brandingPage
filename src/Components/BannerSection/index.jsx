/* eslint-disable react/prop-types */
// import "./style.css";
import banner from '../../../public/assets/banner.png'
import "../../App.css";
export default function Banner({actualMode}) {

  var le = ''
  var ld = ''
  le = actualMode === 'light' ? 'banner' : 'banner-dark'
  ld = actualMode === 'light' ? 'texts' : 'texts-dark'

  return (
    <div className={`${le}`}>
      <div className="banner-content forma ">
        <div className='da-imagem' >
          <img src={banner} alt="" />
        </div>
        <div className={`${ld} forma`}>
          <p>BRANDING / UI / UX / TECNOLOGIA</p>
          <h2>Agência de Branding</h2>
          <span>e design digital</span>
        </div>
      </div>
    </div>
  );
}
