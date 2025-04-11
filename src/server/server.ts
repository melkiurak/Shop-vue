import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_URI,
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  headers: {
    'X-Parse-Application-Id': import.meta.env.VITE_APP_ID,
    'X-Parse-REST-API-Key': import.meta.env.VITE_API_KEY,
  },
})

export default client
