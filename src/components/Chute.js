import React from "react";
import { Input, Buttonchute } from "../styles/styles";

export default function Chute(props) {
  const [palavra, setPalavra] = React.useState("");


  return (
    <div className="chute">
      <p>Já sei a palavra!</p>
      <Input data-test="guess-input" disabled={props.disable}
        onChange={event => palavraInput(event.target.value)}
        onKeyDown={event => { if (event.key === "Enter") chutar(); }}
        onFocus={event => event.target.value = ""} />
      <Buttonchute data-test="guess-button" disabled={props.disable} onClick={chutar} >Chutar</Buttonchute>
    </div>
  );

  function palavraInput(valor) {
    setPalavra(valor.toLowerCase());
  }

  function chutar() {
    const maxErros = 6;
    props.setPalavraEmJogo(props.palavraescolhida);
    if (palavra === props.palavraescolhida) {
      props.checkFimDeJogo(props.palavraescolhida.length, props.erros);
    } else {
      props.setErros(maxErros);
      props.checkFimDeJogo(0, maxErros);
    }
  }
}