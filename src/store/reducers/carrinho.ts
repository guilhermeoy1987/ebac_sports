import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// Importamos o tipo Produto que definimos lá na API
import { Produto } from '../../services/api'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const itemExiste = state.itens.find((p) => p.id === action.payload.id)
      if (!itemExiste) {
        state.itens.push(action.payload)
      } else {
        alert('Item já adicionado')
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
