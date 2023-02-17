import { Buttonletra } from "../styles/styles";
import React from "react";
let reset;

export default function Letras(props) {
  let atualizarpalavra = [...props.palavraEmJogo];

  return (
    <>

      <li>
        <Buttonletra data-test="letter" disabled={(props.disable || props.letraUsada.includes(props.letra))} onClick={() => checarPalavra(props.letra)} >{props.letra.toUpperCase()}</Buttonletra>
      </li>
    </>
  )
    ;
  function checarPalavra(ltr) {
    props.setLetraUsada([...props.letraUsada, ltr]);
    let aux = 0;
    let contadorerros = props.erros;
    let contadoracertos = props.acertos;
    const palavraSemCaracter = props.palavraescolhida.normalize('NFKD').replace(/[^\w]/g, '');

    for (let i = 0; i < props.palavraescolhida.length; i++) {
      if (ltr === palavraSemCaracter[i]) {
        atualizarpalavra[i] = props.palavraescolhida[i];
        aux++;
        contadoracertos++;
        props.setAcertos(contadoracertos);
      }
    }
    if (aux === 0 && props.erros < 6) {
      contadorerros++;
      props.setErros(contadorerros);
    }
    props.setPalavraEmJogo(atualizarpalavra);
    props.checkFimDeJogo(contadoracertos, contadorerros);
  }

}

