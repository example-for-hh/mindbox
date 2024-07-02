import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';

// Load Apollo Client error messages in development
if (process.env.NODE_ENV !== 'production') {
    loadDevMessages();
    loadErrorMessages();
}

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'http://localhost:4000/api',
        fetch,
    }),
    cache: new InMemoryCache()
});

export default client;