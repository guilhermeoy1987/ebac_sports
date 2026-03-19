import { useDispatch } from 'react-redux' // REQUISITO: useDispatch
import { adicionar } from '../../store/reducers/carrinho' // Ação que você criou
import { Produto as ProdutoType } from '../../services/api' // Importe o tipo da API
import * as S from './styles'

// Agora o componente recebe apenas o produto.
// As funções de ação são internas via Redux.
type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch() // Inicializa o disparador de ações

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>

      {/* Botão de Favoritar (Se você não criou um slice de favoritos,
          pode manter apenas o layout ou criar um slice similar ao do carrinho) */}
      <S.BtnComprar type="button">+ Adicionar aos favoritos</S.BtnComprar>

      {/* Botão de Adicionar ao Carrinho usando Redux */}
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
