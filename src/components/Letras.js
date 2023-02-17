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

    for (let i = 0; i < props.palavraescolhida.length; i++) {
      if (ltr === props.palavraescolhida[i]) {
        atualizarpalavra[i] = ltr;
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

  /*   function checkFimDeJogo(contacertos, conterros) {
      console.log(contacertos);
      console.log(conterros);
      if (contacertos === props.palavraescolhida.length) {
        props.setEstadoJogo("venceu");
        props.setDisable(true);
      }
      else if (conterros === 6) {
        props.setEstadoJogo("perdeu");
        props.setPalavraEmJogo(props.palavraescolhida);
        props.setDisable(true);
      }
    } */
}

