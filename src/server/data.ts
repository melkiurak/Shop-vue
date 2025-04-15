import gql from 'graphql-tag'

const GET_PRODUCTS = gql`
  query {
    products {
      edges {
        node {
          objectId
          name
          desctiption
          brand_id {
            name
          }
          category_id {
            name
          }
          price
        }
      }
    }
  }
`
export default GET_PRODUCTS
