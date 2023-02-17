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


  function checkFimDeJogo(contacertos, conterros) {
    const maxErros = 6;
    if (contacertos === palavraescolhida.length) {
      setEstadoJogo("#27AE60");
      setDisable(true);
    } else if (conterros === maxErros) {
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
        checkFimDeJogo={checkFimDeJogo}
        acertos={acertos}
      />


      <Chute
        disable={disable}
        setDisable={setDisable}
        acertos={acertos}
        setAcertos={setAcertos}
        erros={erros}
        setErros={setErros}
        checkFimDeJogo={checkFimDeJogo}
        palavraescolhida={palavraescolhida}
        setPalavraEmJogo={setPalavraEmJogo}
      />
    </>
  );

}



