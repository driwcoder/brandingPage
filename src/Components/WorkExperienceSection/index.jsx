/* eslint-disable react/prop-types */
import Card from "../Card";
import "../../App.css";
export default function WorkExperience({actualMode}) {

  var workMode = ''
  var workTextMode = ''
  workMode = actualMode === 'dark' ? 'work' : 'work-dark'
  workTextMode = actualMode === 'dark' ? 'work-text' : 'work-text-dark'
  
  return (
    <div className={`${workMode}`}>
      <div className="work-content forma">
        <h1>Experiências De Trabalho</h1>
        <div className="linha-amarela"></div>
        <p className={`${workTextMode}`}>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de Sites e Marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.</p>
        <div className="cards">
          <Card cardMode={actualMode} data="JUNHO 2012 - 2016" titulo="Web Designer" empresa="Pied Piper StartUp." paragrafo="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores" />
          <Card cardMode={actualMode} data="AGOSTO 2016 - 2019" titulo="Product Designer"empresa="E Corp." paragrafo="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra" />
          <Card cardMode={actualMode} data="FEVEREIRO 2019 - 2021" titulo="Digital Consulting" empresa="Arasaka Inc." paragrafo="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução" />
        </div>
      </div>
    </div>
  );
}
