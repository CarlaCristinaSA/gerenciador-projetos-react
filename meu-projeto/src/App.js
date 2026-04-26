import './App.css';

// 1. Boas práticas: Funções utilitárias e constantes estáticas ficam fora do componente.
// Isso evita processamento desnecessário e vazamento de memória.
function sum(a, b) {
  return a + b;
}

const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq9FZxZ99-PyL1QmoDJEP1RlUJWc2GA39uFg&s"
function App() {
  // 2. Lógica interna: Variáveis que definem o estado ou comportamento específico deste componente.
  const name = 'Carla';
  const nameUpperCase = name.toUpperCase();

  return (
    <div className="App">
      {/* 3. HTML semântico: Usando hierarquia de títulos e seções para organizar a estrutura da página. */}
      <h1>Alterando o JSX</h1>
      
      <section>
        <h2>Interpolando Variáveis</h2>
        <p>Olá, {name}</p>
        <p>Nome em UpperCase: {nameUpperCase}</p>
      </section>

      <section>
        <h2>Operações e Funções</h2>
        <p>Soma direta no JSX: {2 + 2}</p>
        <p>Soma via função externa: {sum(1, 2)}</p>
      </section>

      <section>
        <h2>Atributos Dinâmicos</h2>
        {/* 4. Acessibilidade: O atributo "alt" sempre deve descrever o conteúdo ou função da imagem. */}
        <img src={url} alt="Amostra de imagem abstrata gerada por base64" />
      </section>
    </div>
  );
}

export default App;