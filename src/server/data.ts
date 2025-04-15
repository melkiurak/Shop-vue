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
const GET_CATEGORYS = gql`
  query {
    categories {
      edges {
        node {
          objectId
          name
        }
      }
    }
  }
`
export default { GET_PRODUCTS, GET_CATEGORYS }
