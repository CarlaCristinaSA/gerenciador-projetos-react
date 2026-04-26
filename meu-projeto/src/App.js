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