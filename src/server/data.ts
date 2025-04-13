import gql from 'graphql-tag'

const GET_PRODUCTS = gql`
  query {
    products {
      edges {
        node {
          name
        }
      }
    }
  }
`
export default GET_PRODUCTS
