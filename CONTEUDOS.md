# PRIMEIRA PROVA PARCIAL

## Conceitos básicos do React
- [ ] O que é um componente
  - [ ] Definição e conceito de isolamento de interface
  - [ ] Diferença entre elementos da UI e componentes
- [ ] O que são propriedades (props)
  - [ ] Passagem de dados de componentes pais para filhos
  - [ ] Leitura de propriedades (read-only)
- [ ] Principais tecnologias
  - [ ] Vite (empacotador rápido)
  - [ ] Next.js (renderização do lado do servidor/estática)
  - [ ] Create React App - CRA (estrutura padrão básica)
- [ ] Criação de projetos
  - [ ] Comandos de inicialização para cada tecnologia
- [ ] Execução de projetos
  - [ ] Scripts de desenvolvimento (npm run dev / npm start)
- [ ] Organização das pastas
  - [ ] Estrutura da pasta `src`
  - [ ] Separação lógica (componentes, páginas, assets)
- [ ] Tipos de arquivo
  - [ ] Lógica e renderização: `.js`, `.jsx`
  - [ ] Marcação e estilo: `.html`, `.css`
  - [ ] Configuração e dados: `.json`

## Criação e Estrutura de Componentes
- [ ] Criação de Componentes
  - [ ] Utilizando funções tradicionais (`function Componente()`)
  - [ ] Utilizando funções arrow (`const Componente = () =>`)
- [ ] Exportando Componentes
  - [ ] Exportação padrão (`export default`)
  - [ ] Exportação nomeada (`export const`)
- [ ] Propriedades e componentes reusáveis (props)
  - [ ] Criação de componentes genéricos (ex: botões, cards)
  - [ ] Desestruturação de props
- [ ] Hierarquia de Componentes
  - [ ] Fluxo principal e árvore de renderização (App.js -> `<componentes criados por você>`)
  - [ ] Composição de componentes (children)

## Gerenciamento de Estado e Efeitos
- [ ] Estados (`useState`)
  - [ ] Inicialização de estado
  - [ ] Atualização de valores e re-renderização
- [ ] Formulários com estado
  - [ ] Inputs controlados (ligação do value com o estado)
  - [ ] Tratamento de eventos (`onChange`, `onSubmit`)
- [ ] Efeitos (`useEffect`)
  - [ ] Execução na montagem do componente
  - [ ] Utilização do array de dependências
  - [ ] Limpeza de efeitos (cleanup)
- [ ] Contextos (`useContext`)
  - [ ] Criação e fornecimento de contexto (Provider)
  - [ ] Consumo de dados globais sem "prop drilling"
- [ ] Referências (`useRef`)
  - [ ] Acesso direto a elementos do DOM
  - [ ] Armazenamento de valores mutáveis sem re-renderizar
- [ ] Persistência de Dados (Sessões)
  - [ ] `SessionStorage` (dados apagados ao fechar a aba)
  - [ ] `LocalStorage` (dados persistentes no navegador)

## Assincronismo e Consumo de APIs
- [ ] Promessas (Promises)
  - [ ] Compreensão dos estados (pendente, resolvida, rejeitada)
- [ ] Fluxo Assíncrono
  - [ ] Sintaxe moderna: `async` / `await`
  - [ ] Encadeamento tradicional: `.then()` / `.catch()`
  - [ ] Tratamento de erros (`try` / `catch`)
- [ ] Bibliotecas de Requisição HTTP
  - [ ] `Fetch API` (nativa, necessidade de conversão para JSON)
  - [ ] `Axios` (biblioteca externa, conversão automática)

## Conceitos básicos de Javascript
- [ ] Funções
  - [ ] Declaração e invocação
  - [ ] Funções de retorno de chamada (Callback functions)
- [ ] Variáveis e Escopo
  - [ ] `const` (constantes, escopo de bloco)
  - [ ] `let` (variáveis reatribuíveis, escopo de bloco)
  - [ ] `var` (escopo global ou de função, evitar o uso)
- [ ] Fundamentos e Lógica
  - [ ] Laços de repetição (`for`, `while`, métodos de array como `map` e `filter`)
  - [ ] Estruturas de controle (`if/else`, `switch`, operador ternário)
  - [ ] Tipos primitivos (`String`, `Number`, `Boolean`, `Null`, `Undefined`)