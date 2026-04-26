# Aula 02: Introdução ao React

## 1. O que é o React?
O React é uma biblioteca JavaScript desenvolvida pelo Facebook (Meta) para a criação de **interfaces de usuário (UI)**. Ele é focado na camada de visualização e permite criar aplicações complexas de forma declarativa.

* **SPA (Single Page Application):** O React permite criar sites onde a página nunca recarrega totalmente. Apenas o conteúdo necessário é trocado, tornando a navegação instantânea.
* **Declarativo:** Você diz *o que* quer que apareça na tela, e o React cuida de *como* atualizar o DOM.

## 2. Pilares do React

### Componentização
É a capacidade de dividir a interface em pequenos pedaços independentes e reutilizáveis.
* Exemplo: Um botão, um formulário de login ou um cabeçalho podem ser componentes separados.
* **Vantagem:** Facilita a manutenção e o reaproveitamento de código.

### JSX (JavaScript XML)
É uma extensão de sintaxe para JavaScript que se parece muito com HTML.
* Permite escrever a estrutura da interface dentro do arquivo JS.
* O React transforma o JSX em chamadas de funções JavaScript puras.

### Virtual DOM
O segredo da performance do React. 
1.  O React cria uma cópia do DOM (árvore de elementos do navegador) na memória.
2.  Quando algo muda, ele compara o novo Virtual DOM com o anterior (**diffing**).
3.  Ele atualiza no navegador real **apenas** o que de fato mudou.

## 3. Comandos Iniciais Essenciais

| Comando | Descrição |
| :--- | :--- |
| `npx create-react-app nome-do-app` | Cria o boilerplate (estrutura inicial) do projeto. |
| `npm start` | Inicia o servidor de desenvolvimento (geralmente em `localhost:3000`). |
| `npm run build` | Gera a versão otimizada para produção. |

---