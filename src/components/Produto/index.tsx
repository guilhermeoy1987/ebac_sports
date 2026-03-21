import { useDispatch } from 'react-redux'
import { adicionar } from '../../store/reducers/carrinho'
import { Produto as ProdutoType } from '../../services/api'
import * as S from './styles'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.Produto>
      <S.Capa>
        {/* ATUALIZADO*/}
        <img src={produto.imagem} alt={produto.titulo} />
      </S.Capa>

      {/* ATUALIZACAO */}
      <S.Titulo>{produto.titulo}</S.Titulo>

      <S.Prices>
        {/* ADICIONADO PRECO ANTIGO  */}
        {produto.precoAntigo > 0 && (
          <small
            style={{
              textDecoration: 'line-through',
              marginRight: '8px',
              color: '#ccc'
            }}
          >
            {paraReal(produto.precoAntigo)}
          </small>
        )}
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>

      {/* CODIGO DO Botão de Adicionar ao Carrinho usando Redux Dispatch */}
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
