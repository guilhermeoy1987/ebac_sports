import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// 1. ATUALIZADO O TIPO DE PRODUTO PARA TER O RESULTADO API ATUALIZADA
export type Produto = {
  id: number
  titulo: string
  plataformas: string[] //  A API atual envia
  precoAntigo: number
  preco: number
  categoria: string
  imagem: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/ebac_sports'
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => ''
    })
  })
})

export const { useGetProdutosQuery } = api
export default api
