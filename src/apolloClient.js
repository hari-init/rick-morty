import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { persistCache, LocalStorageWrapper } from "apollo3-cache-persist";

const cache = new InMemoryCache();

async function persistCacheAsync() {
  await persistCache({
    cache,
    storage: new LocalStorageWrapper(window.localStorage),
  });
}

persistCacheAsync();
const apolloClient = new ApolloClient({
  cache,
  uri: "https://rickandmortyapi.com/graphql",
});

export default apolloClient;
