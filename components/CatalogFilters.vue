<template>
  <div
    class="py-5 border-b border-zinc-900 flex justify-center items-center gap-6"
  >
    <div>Filters - часть шаблона catalog</div>
    <label>
      <input type="checkbox" :checked="active" @change="handleFilter" />
      Filter 1
    </label>
  </div>
</template>

<script lang="ts" setup>
const active = ref(false);
const handleFilter = () => {
  active.value = !active.value;
  if (active.value) {
    navigateTo("/catalog/category-name/filter/some-filter");
  } else {
    navigateTo("/catalog/category-name");
  }
};
</script>

<style></style>
