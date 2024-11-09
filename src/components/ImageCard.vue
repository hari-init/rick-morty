<template>
  <div class="shadow-md bg-white border rounded-md p-2 flex w-80 m-2">
    <img class="mr-2" :src="image" alt="image name" width="150" height="150" />
    <div>
      <p>
        {{ name }}
        <span
          :class="
            status === 'Alive'
              ? 'text-green-600'
              : status === 'Dead'
              ? 'text-red-600'
              : 'text-yellow-600'
          "
          >{{ status }}</span
        >
      </p>
      <p>{{ new Date(created).toLocaleDateString() }}</p>
      <div class="mb-2 text-sm"></div>
      <p>species: {{ species }}</p>
      <p v-if="type">type: {{ type }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps([
  "name",
  "image",
  "status",
  "species",
  "type",
  "created",
]);
</script>
