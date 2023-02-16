import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import React from "react";
import Chute from "./components/Chute";
import palavras from "./palavras";



export default function App() {
  const [estadoJogo, setEstadoJogo] = React.useState("jogando");
  const [disable, setDisable] = React.useState(true);
  const [erros, setErros] = React.useState(0);
  const [acertos, setAcertos] = React.useState(0);
  const [palavraescolhida, setPalavraescolhida] = React.useState("");
  const [palavraEmJogo, setPalavraEmJogo] = React.useState("");



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

      />


      <Chute />
    </>
  );
}



