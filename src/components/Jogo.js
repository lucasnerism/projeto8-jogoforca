import styled from "styled-components";

import { Button, Img } from "../styles/styles";
import { imagens } from "./imagens";


export default function Jogo(props) {
  const Palavra = styled.h1`
  font-family: 'Noto Sans';
  font-weight: 700;
  font-size: 50px;  
  color:${estadodoJogo()}
`;

  return (
    <div className="jogo">
      <Img data-test="game-image" src={imagens[props.erros]} />
      <div className="direita">
        <Button data-test="choose-word" >Escolher palavra</Button>
        <Palavra data-test="word" >{"quarentena".toUpperCase()}</Palavra>
      </div>
    </div>
  );

  function estadodoJogo() {
    if (props.estadoJogo === "venceu") return "#27AE60";
    else if (props.estadoJogo === "perdeu") return "#FF0000";
    else return "#000000";
  }
}