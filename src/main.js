import { createApp } from "vue";
import {
  DefaultApolloClient,
  provideApolloClient,
} from "@vue/apollo-composable";
import apolloClient from "./apolloClient";
import App from "./App.vue";
import "../src/style.css";

const app = createApp(App);
app.provide(DefaultApolloClient, apolloClient);
provideApolloClient(apolloClient);
app.mount("#app");
