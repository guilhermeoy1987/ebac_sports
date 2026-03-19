import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { paraReal } from '../Produto'

// MUDANÇA: Importe do arquivo de tipos centralizado
import { Produto } from '../../types'

import * as S from './styles'
import cesta from '../../assets/cesta.png'

const Header = () => {
  // Busca os itens diretamente da store
  const itensNoCarrinho = useSelector(
    (state: RootReducer) => state.carrinho.itens
  )

  // Array vazio para manter o layout enquanto não cria o slice de favoritos
  const favoritos: Produto[] = []

  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="Cesta de compras" />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
