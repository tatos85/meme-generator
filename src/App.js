import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');

  const [linea2, setLinea2] = useState('');

  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function(event){
    setLinea1(event.target.value)
  }


  const onChangeLinea2 = function(event){
    setLinea2(event.target.value)
  }

  const onChangeImagen = function(event){
    setImagen(event.target.value)
  }

  const onClickExportar = function(event){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/jpg");

      var link = document.createElement("a");
      link.download = "meme.jpg";
      link.href = img;
      link.click();


  });
  }


  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History channel</option>
        <option value="matriz">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart guy</option>
      </select> <br/>

      <input onChange={onChangeLinea1} type="text" placeholder='Linea 1'/><br/>
      <input onChange={onChangeLinea2} type="text" placeholder='Linea 2'/><br/>
      <button onClick={onClickExportar}>Exportar</button>


      <div className='meme' id="meme">
        <span>{linea1}</span><br/>
        <span>{linea2}</span>
        <img src={"/img/"+ imagen + ".jpg"}  />

      </div>
    </div>
  );
}

export default App;
