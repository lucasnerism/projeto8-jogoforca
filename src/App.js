import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import React from "react";
import Chute from "./components/Chute";
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


export default function App() {
  const [estadoJogo, setEstadoJogo] = React.useState("jogando");
  const [disable, setDisable] = React.useState(true);
  const [erros, setErros] = React.useState(0);
  return (
    <>
      <Jogo estadoJogo={estadoJogo} erros={erros} />
      <div className="teclado">
        <ul>
          {alfabeto.map((char, index) => (<Letras letra={char} key={index} ativo={disable} />))}
        </ul>
      </div>

      <Chute />
    </>
  );
}


