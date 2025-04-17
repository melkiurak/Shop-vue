import gql from 'graphql-tag'

export const GET_PRODUCTS = gql`
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
export const GET_CATEGORYS = gql`
  query {
    categories {
      edges {
        node {
          objectId
          name
          subCategory {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
`
