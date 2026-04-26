# Aula 03: Entendendo JSX

O **JSX** (JavaScript XML) é uma extensão de sintaxe para JavaScript que permite escrever uma estrutura semelhante ao HTML dentro dos arquivos do React. Ele torna o código mais legível e descreve como a interface deve ser.

## 1. Características Principais
* **HTML no JS:** É a principal forma de renderizar elementos no React.
* **Criterioso:** Diferente do HTML puro, o JSX exige que todas as tags sejam fechadas (ex: `<img />` ou `<br />`).
* **Atributos:** Alguns nomes de atributos mudam para evitar conflitos com palavras reservadas do JavaScript. O caso mais comum é o uso de `className` em vez de `class`.

## 2. Interpolação e Lógica
Para inserir lógica JavaScript dentro do "HTML", utilizamos as chaves `{}`.

### Uso de Variáveis e Métodos
Tudo o que está dentro de `{}` é executado como JavaScript puro:

```javascript
function App() {
  const name = 'Carla';
  const newName = name.toUpperCase();

  return (
    <div className="App">
      <h1>Alterando o JSX</h1>
      <p>Olá, {name}</p>
      <p>Nome em UpperCase: {newName}</p>
    </div>
  );
}
```

### Execução de Funções e Operações
Podemos realizar cálculos ou chamar funções diretamente no retorno:

```javascript
function sum(a, b) {
  return a + b;
}

// Dentro do return:
<p>Soma: {2 + 2}</p>
<p>Resultado da função: {sum(1, 2)}</p>
```

## 3. Atributos Dinâmicos
É possível atribuir valores de variáveis a atributos de tags HTML (como `src`, `href`, `alt`, etc):

```javascript
const url = 'https://link-da-imagem.com/foto.jpg';

<img src={url} alt="Descrição da imagem" />
```

## 4. Regras Obrigatórias

### Elemento Pai (Wrapper)
O JSX exige que todo o conteúdo retornado por um componente esteja envolvido por um **único elemento pai**. Se houver dois elementos no mesmo nível, o código apresentará erro.

```javascript
// Correto
return (
  <div>
    <h1>Título</h1>
    <p>Parágrafo</p>
  </div>
);
```

### Comentários no JSX
Para fazer comentários dentro do bloco de renderização (dentro do `return`), deve-se usar a sintaxe: 
`{/* Meu comentário aqui */}`.

## 5. Avisos e Otimização
O React (via ESLint/Compilador) monitora o código e emite avisos no console caso:
* Uma variável seja criada mas não utilizada.
* Tags não sejam fechadas corretamente.
* Atributos estejam escritos de forma errada (ex: usar `class` em vez de `className`).


## Código da Aula:
```javascript
import './App.css';

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return  a /b;
}

function maior(x) {
  if(x >= 18) {
    return 'sim';
  } else {
    return 'não';
  }
}

const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq9FZxZ99-PyL1QmoDJEP1RlUJWc2GA39uFg&s"

function App() {
  const name = 'Carla'
  const curso = 'Engenharia de Software'
  const nameUppercase = name.toLocaleUpperCase();
  const nameOwercase = name.toLowerCase();
  const idade = 20;

  return (
    <div className='App'>
      <h1>Alterando JSX</h1>

      <section>
        <h2>Interpolando variáveis</h2>
        <h2>Sobre mim: </h2>
        <p>Olá, meu nome é {name}, sou estudante do curso de {curso}</p>  
        <p>Meu nome em Uppercase: {nameUppercase}</p>
        <p>Meu nome em OwerCase: {nameOwercase}</p>
        <p>Sou de maior? {maior(idade)}</p>
      </section>
      <section>
        <h2>Operaçoes e Funções</h2>
        <p>Soma direta: {10 + 10}</p>
        <p>Soma pela função: {sum(10, 10)}</p>
        <p>Subtração direta: {10 - 10}</p>
        <p>Subtração pela função: {sub(10, 10)}</p>
        <p>Multiplicação direta: {10 * 10}</p>
        <p>Multiplicação pela função: {mult(10, 10)}</p>
        <p>Divisão direta: {10/10}</p>
        <p>Divisão pela função: {div(10, 10)}</p>
      </section>
      <section>
        <h2>Atributos Dinâmicos: </h2>
        <p>Gatinho: </p>
        <img src={url} alt='Gatinho'/>
      </section>
    </div>
  );
}


export default App;
```
