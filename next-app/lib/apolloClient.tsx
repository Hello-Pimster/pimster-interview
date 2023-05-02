import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import {concatPagination} from '@apollo/client/utilities';
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';
import {AppProps} from 'next/app';
import {useMemo} from 'react';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: ApolloClient<InMemoryCache>;

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: new HttpLink({
            uri: 'https://spacex-production.up.railway.app/',
        }),
        cache: new InMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        allPosts: concatPagination(),
                    },
                },
            },
        }),
    });
}

export function initializeApollo(
    initialState: InMemoryCache | null = null
): ApolloClient<InMemoryCache> {
    const _apolloClient = apolloClient ?? createApolloClient();

    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // gets hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        const existingCache = _apolloClient.extract();

        // Merge the existing cache into data passed from getStaticProps/getServerSideProps
        // @ts-ignore
        const data = merge(initialState, existingCache, {
            // combine arrays using object equality (like in sets)
            arrayMerge: (destinationArray, sourceArray) => [
                ...sourceArray,
                ...destinationArray.filter((d) =>
                    sourceArray.every((s) => !isEqual(d, s))
                ),
            ],
        });

        // Restore the cache with the merged data
        // @ts-ignore
        _apolloClient.cache.restore(data);
    }
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') return _apolloClient;
    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient;

    return _apolloClient;
}

export function addApolloState(
    client: ApolloClient<InMemoryCache>,
    pageProps: AppProps['pageProps']
) {
    if (pageProps?.props) {
        pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
    }

    return pageProps;
}

export function useApollo(pageProps: AppProps['pageProps']) {
    const state = pageProps[APOLLO_STATE_PROP_NAME];
    const store = useMemo(() => initializeApollo(state), [state]);
    return store;
}
