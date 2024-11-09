<template>
  <input
    type="text"
    placeholder="search character..."
    v-model="resultQuery"
    class="border rounded-md p-2 shadow-md max-w-96 w-full mb-3"
  />
  <div
    v-if="searchQuery"
    class="absolute bg-white shadow-md border max-w-96 w-full p-2 mt-12 rounded-md h-48 overflow-scroll"
  >
    <p v-if="searchLoading">Loading...</p>
    <ul v-else="!searchLoading" class="cursor-pointer">
      <li
        v-for="result in searchResults"
        :key="result.id"
        class="py-2 cursor-pointer"
        @click="() => handleCharacterClick(result.id, result.name)"
      >
        {{ result.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import { defineEmits, ref, computed, watch } from "vue";
const emits = defineEmits(["emitChar"]);
const searchQuery = ref("");
const selectedCharName = ref(""); // useQuery returns
const searchLoading = null; // useQuery returns
const selectedChar = ref([]);

const resultQuery = computed({
  get() {
    return selectedCharName.value || searchQuery.value;
  },
  set(val) {
    if (!selectedCharName.value) {
      searchQuery.value = val;
    } else {
      selectedCharName.value = "";
      emits("emitChar", []);
    }
  },
});

const searchResults = computed(() => {
  if (!searchQuery.value.trim()) {
    return [];
  }
  const query = gql`
  query {
   characters(filter: { name: "${searchQuery.value}" }) {
      results {
        id
        name
      }
    }
  }
`;
  const { result, loading, error } = useQuery(query);
  return result.value?.characters?.results;
});

const handleCharacterClick = async (id, name) => {
  selectedCharName.value = name;
  searchQuery.value = "";
  const query = gql`
    query Characters {
      charactersByIds(ids: ${id}) {
        id
        name
        image
        status
        species
        type
        created
      }
    }
  `;

  const queryResult = useQuery(query);
  queryResult.onResult((res) => {
    if (res?.data?.charactersByIds) {
      selectedChar.value = res?.data?.charactersByIds || [];
      emits("emitChar", selectedChar.value);
    }
  });
};
</script>
