<template>
  <div class="flex flex-row flex-wrap justify-center items-center">
    <p v-if="charError">Something went wrong...</p>
    <p v-if="charLoading">Loading...</p>
    <div v-else class="p-2 relative flex flex-col items-center">
      <Search @emit-char="(char) => setSelectedChar(char)" />
      <div class="w-full flex flex-wrap justify-center">
        <ImageCard
          v-for="character in result"
          :key="character.id"
          :name="character.name"
          :image="character.image"
          :status="character.status"
          :species="character.species"
          :type="character.type"
          :created="character.created"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import ImageCard from "./components/ImageCard.vue";
import Search from "./components/Search.vue";
import { computed, ref, watch } from "vue";
const selectedChar = ref([]);

const setSelectedChar = (char) => {
  selectedChar.value = char;
};

const result = computed(() => {
  const initResult = charResult.value?.characters?.results;
  return selectedChar.value.length ? selectedChar.value : initResult;
});

//Character Query
const CHARACTERS_QUERY = gql`
  query Characters {
    characters {
      results {
        id
        name
        image
        status
        species
        type
        created
      }
    }
  }
`;
const {
  result: charResult,
  loading: charLoading,
  error: charError,
} = useQuery(CHARACTERS_QUERY);
</script>
