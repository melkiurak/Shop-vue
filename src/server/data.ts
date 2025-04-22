import gql from 'graphql-tag'

export const GET_PRODUCTS = gql`
  query {
    products {
      edges {
        node {
          objectId
          name
          image_url
          desctiption
          brand_id {
            name
          }
          category_id {
            edges {
              node {
                name
              }
            }
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
                Brand {
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
      }
    }
  }
`
export const GET_SUB_CATEGORYS = gql`
  query {
    subCategories {
      edges {
        node {
          name
        }
      }
    }
  }
`
