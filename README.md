# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/). 
EBAC Sports - E-commerce com React & Redux
Neste projeto, desenvolvi uma aplicação de e-commerce funcional utilizando React e Redux Toolkit. O objetivo principal foi aplicar conceitos avançados de gerenciamento de estado e requisições assíncronas, garantindo uma arquitetura limpa e independente.

🚀 Tecnologias e Ferramentas Utilizadas
React com TypeScript: Para garantir tipagem forte e evitar erros em tempo de execução.

Redux Toolkit: Utilizado para gerenciar o estado global do carrinho de compras.

RTK Query: Implementado para realizar o consumo da API de produtos, aproveitando o cache e o gerenciamento automático de estados de loading.

Styled Components: Para a estilização dos componentes.

🛠️ Minhas Implementações Técnicas
1. Independência da API
Diferente da abordagem padrão, configurei o RTK Query para consumir uma API externa atualizada (fake-api-tau.vercel.app), mapeando corretamente os campos de dados como titulo, plataformas e precoAntigo. Centralizei a tipagem do Produto diretamente no serviço de API para facilitar a manutenção.

2. Gerenciamento de Estado (Redux)
Store Centralizada: Configurei a Store no arquivo src/store/index.ts, integrando os reducers do carrinho e os middlewares da API.

Slice do Carrinho: Desenvolvi a lógica de adicionar itens ao carrinho evitando duplicatas, utilizando o createSlice.

Provider: Isolei o Provider do Redux no ponto de entrada da aplicação (index.tsx), mantendo o componente App.tsx focado apenas na estrutura e layout.

3. Hooks Customizados
Utilizei os hooks useSelector e useDispatch para conectar os componentes ao estado global, além do hook gerado automaticamente pelo RTK Query (useGetProdutosQuery) para a listagem dinâmica dos produtos.
