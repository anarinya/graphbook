import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import gql from 'graphql-tag'

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => 
          console.log(`[GraphQL Error]: Message: ${message}, Location: ${locations}, Path: ${path}`))
          if (networkError) {
            console.log(`[Network Error]: ${networkError}`)
          }
      }
    }),
    new HttpLink({ uri: 'http://localhost:8000/graphql'})
  ]),
  cache: new InMemoryCache()
})

export default client