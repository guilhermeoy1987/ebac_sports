import { useGetProdutosQuery } from '../services/api' // REQUISITO: RTK Query
import Produto from '../components/Produto'

import * as S from './styles'

const ProdutosComponent = () => {
  // A forma correta de pegar os dados, o carregamento e o erro é esta:
  const { data: produtos, isLoading, error } = useGetProdutosQuery()

  // Se estiver a carregar, mostrar um aviso
  if (isLoading) return <h2>Carregando...</h2>

  // Tratamento de erro utilizando a variável 'error' que pegamos acima
  if (error) return <h2>Ocorreu um erro ao buscar os produtos.</h2>

  return (
    <S.Produtos>
      {/* Não passamos mais 'favoritar' ou 'aoComprar' por aqui.
        Cada componente <Produto /> agora vai usar o useDispatch internamente
        para se comunicar com o Redux.
      */}
      {produtos?.map((produto) => (
        <Produto key={produto.id} produto={produto} />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
