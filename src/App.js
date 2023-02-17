import Jogo from "./components/Jogo";
import React from "react";
import Chute from "./components/Chute";

export default function App() {
  const [estadoJogo, setEstadoJogo] = React.useState("");
  const [disable, setDisable] = React.useState(true);
  const [erros, setErros] = React.useState(0);
  const [acertos, setAcertos] = React.useState(0);
  const [palavraescolhida, setPalavraescolhida] = React.useState("");
  const [palavraEmJogo, setPalavraEmJogo] = React.useState("");
  const [palavraEmTela, setPalavraEmTela] = React.useState("");

  function checkFimDeJogo(contacertos, conterros) {
    console.log(contacertos);
    console.log(conterros);
    if (contacertos === palavraescolhida.length) {
      setEstadoJogo("#27AE60");
      setDisable(true);
    }
    else if (conterros === 6) {
      setEstadoJogo("#FF0000");
      setPalavraEmJogo(palavraescolhida);
      setDisable(true);
    }
  }

  return (
    <>
      <Jogo
        estadoJogo={estadoJogo}
        erros={erros}
        setDisable={setDisable}
        setPalavraescolhida={setPalavraescolhida}
        palavraescolhida={palavraescolhida}
        setErros={setErros}
        disable={disable}
        setPalavraEmJogo={setPalavraEmJogo}
        palavraEmJogo={palavraEmJogo}
        setAcertos={setAcertos}
        setEstadoJogo={setEstadoJogo}
        palavraEmTela={palavraEmTela}
        setPalavraEmTela={setPalavraEmTela}
        checkFimDeJogo={checkFimDeJogo}
        acertos={acertos}
      />


      <Chute />
    </>
  );

}



