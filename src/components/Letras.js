import { Buttonletra } from "../styles/styles";


export default function Letras({ ativo, letra }) {
  return (
    <>
      <li>
        <Buttonletra disabled={ativo} >{letra.toUpperCase()}</Buttonletra>
      </li>
    </>
  );
}