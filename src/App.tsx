import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'

// REMOVEMOS a declaração do tipo daqui para usar a do arquivo centralizado
// Se precisar usar o tipo Produto em algum lugar deste arquivo, importe assim:
// import { Produto } from './types'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        {/* O Header e o Produtos agora são independentes! */}
        <Header />
        <Produtos />
      </div>
    </>
  )
}

export default App
