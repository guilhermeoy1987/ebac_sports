import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Definição do tipo para o TypeScript não reclamar

export type Produto = {
  id: number

  nome: string

  preco: number

  imagem: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-taupe.vercel.app/api/ebac_sports'
  }),

  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => ''
    })
  })
})

export const { useGetProdutosQuery } = api

export default api
