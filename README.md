# **Projeto [Jogo da Forca](https://lucasnerism.github.io/projeto8-jogodaforca/)**

Nesse projeto, a pessoa jogadora tem que adivinhar uma palavra chutando letra por letra e, se cometer 6 erros, ela perde o jogo. Caso adivinhe a palavra antes disso, ela ganha.

Cada passo do desenvolvimento do projeto foi _versionada_ no`GitHub`. Vocês podem acompanhar o processo nos`commits`no [repositório do projeto](https://lucasnerism.github.io/projeto8-jogodaforca/).

[> O projeto pode ser acessado online aqui <](https://projeto8-jogoforca-lucasnerism.vercel.app/)

Esse projeto foi feito utilizando apenas **React** e não foi utilizado **useEffect**
Para executar esse projeto localmente você precisa ter o [Node.js](https://nodejs.org/) instalado.

## Este projeto é sobre

- `Componentização`
- `Utilização de estados`
- `Styled-components`

## ✅ Requisitos Obrigatórios

<details open>
<summary>Versionamento do código</summary>

+ Versionamento usando Git é obrigatório, crie um **repositório público** no seu perfil do GitHub.
+ Faça _commits_ a cada funcionalidade implementada.
</details>

<details open>
<summary> Pré-Jogo</summary>

+ Os botões de letras devem ser mapeados através de um array do alfabeto:
+ Antes de o jogo iniciar, o input e os botões de letras devem estar **desabilitados**.
+ Os botões desabilitados devem possuir o atributo `disabled` no HTML.
</details>

<details open>
<summary>Ao apertar“escolher palavra”</summary>

+ Letras passam a ficar habilitadas.
+ A contagem de erros nesse momento é 0, a imagem da forca vazia é mostrada.
+ Você deve sortear uma das palavras do array que está no arquivo `palavras.js` para o usuário tentar adivinhar.
+ Aparece a palavra a ser adivinhada na tela, com um _underline_ ( `_` ) para cada letra que a palavra possui.
</details>

<details open>
 <summary>Ao pressionar uma letra</summary>

 + O botão de uma letra já clicada deve ficar desabilitado.
 + Se a palavra escolhida no jogo tiver a letra que o usuário apertou:
 	+ O *underline* da posição correspondente à letra deve ser substituído pela letra em si.
 + Se a palavra escolhida no jogo NÃO tiver a letra que o usuário apertou:
     + Sua contagem de erros deve aumentar.
     + A imagem na forca deve mudar (forca0 > forca1 > forca2… e assim sucessivamente).</details>

<details open>
<summary>Fim de Jogo</summary>

+ Botões de letras devem ser desabilitados.
+ Caso o usuário ganhe:
    + Quando o usuário ganha, a palavra completa fica em **verde** e os botões voltam a ficar desabilitados.
    + Para continuar a jogar, o usuário deve apertar o botão “Escolher Palavra”, e o jogo será reiniciado do zero.
+ Caso o usuário perca:
    + A imagem final que deve aparecer é a do boneco enforcado (forca6).
    + A palavra deve ser revelada, mas em **vermelho.**
</details>

## ✅ Requisitos Bônus
<details open>
<summary>Reiniciar o Jogo</summary>

+ A qualquer momento, o usuário pode reiniciar o jogo pressionando o botão “escolher palavra”.
+ Uma nova palavra é sorteada.
+ O jogo deve voltar ao estado inicial (0 erros, imagem inicial da forca, palavra apenas com risquinhos, todos os botões de letras habilitados).
</details>

<details open>
<summary>Input de chute</summary>

+ Crie um novo componente no seu projeto chamado `Chute`. Esse componente deverá ter um input e um botão onde o usuário poderá chutar a palavra inteira caso ele deseje
+ Ao fazer isso, se acertar a palavra, ele ganha imediatamente.
    + A palavra correta aparece completa e na cor verde
+ Mas, se errar, ele perde imediatamente, independente da contagem anterior de erros. A imagem que deve aparecer nesse momento é a do bonequinho enforcado (forca6).
+ O input deve ser desabilitado em dois casos: antes de iniciar o jogo e depois de finalizar (ganhar ou perder)
</details>

<details open>
<summary>Considerar caracteres especiais</summary>

+ Quando o usuário pressionar uma letra sem acento (ex: a) e, na palavra, houver a mesma letra mas com acento (ex: à, á, â, ã), ela deve ser considerada como certo.
+ Além dos acentos, considere também que c e ç são equivalentes.
</details>

