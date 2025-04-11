import gql from 'graphql-tag'
import { defineComponent } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import type { GetProductsData } from '@/types/products'

const GET_PRODUCTS = gql`
  query {
    products {
      edges {
        node {
          name
          desctiption
          price
          stock_quantity
          brand_id {
            name
          }
          category_id {
            name
          }
        }
      }
    }
  }
`
export default defineComponent({
  setup() {
    const { result, error, loading } = useQuery<GetProductsData>(GET_PRODUCTS)
    return {
      result: result as unknown as GetProductsData,
      error,
      loading,
    }
  },
})
