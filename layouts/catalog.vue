<template>
  <NuxtLayout name="default">
    <div class="grow flex flex-col gap-4">
      <CatalogFilters />
      <section class="grow flex">
        <slot />
      </section>
      <CatalogPagination />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup></script>

<style></style>
