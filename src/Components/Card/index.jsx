/* eslint-disable react/prop-types */
// import "./style.css";
import "./style.css";
export default function Card(props, {cardMode}) {

  var motoAtualCard = ''
  
  if (cardMode === 'dark') {
    motoAtualCard = 'card-content-dark'
  } else {
    motoAtualCard = 'card-content'
  }
  return (
    <div className={`cards`}>
      <div className={`${motoAtualCard}`}>
        <p className="data">{props.data}</p>
        <h3 className="titulo">{props.titulo}</h3>
        <p className="empresa">{props.empresa}</p>
        <p className="paragrafo">{props.paragrafo}</p>
      </div>
    </div>
  );
}
 