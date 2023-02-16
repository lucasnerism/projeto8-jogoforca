import { Buttonletra } from "../styles/styles";
import React from "react";


export default function Letras(props) {
  let [disable, setDisable] = React.useState(false);
  let atualizarpalavra = props.palavraEmJogo;
  let contador = props.erros;
  return (
    <>
      <li>
        <Buttonletra disabled={(props.ativo || disable)} onClick={() => checarPalavra(props.letra)} >{props.letra.toUpperCase()}</Buttonletra>
      </li>
    </>
  )
    ;
  function checarPalavra(ltr) {
    setDisable(true);
    let aux = 0;
    for (let i = 0; i < props.palavraescolhida.length; i++) {
      if (ltr === props.palavraescolhida[i]) {
        console.log("acertou");
        atualizarpalavra[i] = ltr;
        console.log(atualizarpalavra);
        aux++;
      }
    }
    if (aux === 0) {
      contador++;
      props.setErros(contador);
      console.log(props.erros);
    }
    props.setPalavraEmJogo(atualizarpalavra);
    props.setWordonscreen(atualizarpalavra.join(""));

  }
}