import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: 'https://parseapi.back4app.com/graphql',
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'X-Parse-Application-Id': '93crTfOcBPvFQIWLxbC7rBoFdNKnWGf14bwmRaDs',
      'X-Parse-Client-Key': '37pNfRPFJ8hOhuOhXxrrlDlvtNVK1KuX5qtM4OG3',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default client
