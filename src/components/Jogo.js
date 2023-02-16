import React from "react";
import styled from "styled-components";
import palavras from "../palavras";
import { Button, Img } from "../styles/styles";
import { imagens } from "./imagens";
import Letras from "./Letras";
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



export default function Jogo(props) {
  const Palavra = styled.h1`
  font-family: 'Noto Sans';
  font-weight: 700;
  font-size: 50px;  
  color:${estadodoJogo()}
`;


  const [wordonscreen, setWordonscreen] = React.useState(props.palavraEmJogo);
  return (
    <>
      <div className="jogo">
        <Img data-test="game-image" src={imagens[props.erros]} />
        <div className="direita">
          <Button data-test="choose-word" onClick={selecionaPalavra}>Escolher palavra</Button>
          <Palavra data-test="word" >{wordonscreen}</Palavra>
        </div>
      </div>
      <div className="teclado">
        <ul>
          {alfabeto.map((char, index) => (<Letras
            letra={char}
            key={index}
            ativo={props.disable}
            palavraescolhida={props.palavraescolhida}
            setPalavraEmJogo={props.setPalavraEmJogo}
            palavraEmJogo={props.palavraEmJogo}
            erros={props.erros}
            setErros={props.setErros}
            setWordonscreen={setWordonscreen}
          />))}
        </ul>
      </div>
    </>
  );

  function estadodoJogo() {
    if (props.estadoJogo === "venceu") return "#27AE60";
    else if (props.estadoJogo === "perdeu") return "#FF0000";
    else return "#000000";
  }

  function selecionaPalavra() {
    const random = Math.round(Math.random() * (palavras.length - 1));
    const palavra = palavras[random];
    props.setPalavraescolhida(palavra);
    props.setDisable(false);
    console.log(palavra);
    alterarpor_(palavra);

  }

  function alterarpor_(palavra) {
    palavra = palavra.split("");
    for (let i = 0; i < palavra.length; i++) {
      palavra[i] = " _";
    }
    props.setPalavraEmJogo(palavra);
    setWordonscreen(palavra.join(""));
  }
}