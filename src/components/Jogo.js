import React from "react";
import { Palavra } from "../styles/styles";
import palavras from "../palavras";
import { Button, Img } from "../styles/styles";
import { imagens } from "./imagens";
import Letras from "./Letras";
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



export default function Jogo(props) {

  const [letraUsada, setLetraUsada] = React.useState([]);

  return (
    <>
      <div className="jogo">
        <Img data-test="game-image" src={imagens[props.erros]} />
        <div className="direita">
          <Button data-test="choose-word" onClick={selecionaPalavra}>Escolher palavra</Button>
          <Palavra data-test="word" style={{ color: props.estadoJogo }} >{props.palavraEmJogo}</Palavra>
        </div>
      </div>
      <div className="teclado">
        <ul>
          {alfabeto.map((char, index) => (<Letras
            letra={char}
            key={index}
            disable={props.disable}
            palavraescolhida={props.palavraescolhida}
            setPalavraEmJogo={props.setPalavraEmJogo}
            palavraEmJogo={props.palavraEmJogo}
            erros={props.erros}
            setErros={props.setErros}
            setAcertos={props.setAcertos}
            setEstadoJogo={props.setEstadoJogo}
            checkFimDeJogo={props.checkFimDeJogo}
            acertos={props.acertos}
            letraUsada={letraUsada}
            setLetraUsada={setLetraUsada}
          />))}
        </ul>
      </div>
    </>
  );

  function selecionaPalavra() {
    const random = Math.round(Math.random() * (palavras.length - 1));
    const palavra = palavras[random];
    props.setPalavraescolhida(palavra);
    props.setDisable(false);
    console.log(palavra);
    alterarpor_(palavra);
    props.setAcertos(0);
    props.setErros(0);
    setLetraUsada([]);
    props.setEstadoJogo("#000000");
  }

  function alterarpor_(palavra) {
    palavra = palavra.split("");
    for (let i = 0; i < palavra.length; i++) {
      palavra[i] = " _";
    }
    props.setPalavraEmJogo(palavra);

  }
}