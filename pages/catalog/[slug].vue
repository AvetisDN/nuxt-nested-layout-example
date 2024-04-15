<template>
  <div class="grow flex flex-col gap-8 items-center justify-center">
    <div class="flex items-center gap-4 text-2xl">
      <span>Page params:</span>
      <span class="bg-zinc-800 p-4 rounded-lg" v-if="route.params.slug">{{
        route.params.slug
      }}</span>
      <span class="bg-zinc-800 p-4 rounded-lg" v-if="route.params.filter">{{
        route.params.filter
      }}</span>
      <span class="bg-zinc-800 p-4 rounded-lg" v-if="route.params.page">{{
        route.params.page
      }}</span>
    </div>
    <div class="flex items-center gap-4 text-2xl">
      <NuxtLink to="/product/some-product" class="btn btn-sm">
        На страницу товара
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "catalog",
});
const route = useRoute();
</script>

<style></style>
