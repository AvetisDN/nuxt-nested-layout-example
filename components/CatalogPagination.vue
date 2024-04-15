<template>
  <div
    class="py-5 border-t border-zinc-900 flex justify-center items-center gap-6 flex-col"
  >
    <div>Pagination - часть шаблона catalog</div>
    <div class="flex gap-2">
      <NuxtLink
        class="btn btn-sm"
        :class="{ current: +route.params.page === 1 || !route.params.page }"
        :to="getPageRoute(1)"
      >
        1
      </NuxtLink>
      <NuxtLink
        class="btn btn-sm"
        :class="{ current: +route.params.page === 2 }"
        :to="getPageRoute(2)"
      >
        2
      </NuxtLink>
      <NuxtLink
        class="btn btn-sm"
        :class="{ current: +route.params.page === 3 }"
        :to="getPageRoute(3)"
      >
        3
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const getPageRoute = (page: Number) => {
  let pathPattern = route.matched[0].path;
  const slug = Array.isArray(route.params.slug)
    ? route.params.slug[0]
    : route.params.slug;
  const filter = Array.isArray(route.params.filter)
    ? route.params.filter[0]
    : route.params.filter;

  pathPattern = pathPattern.replace(":slug", slug);
  if (filter) pathPattern = pathPattern.replace(":filter", filter);
  pathPattern = pathPattern.replace(":page?", page === 1 ? "" : `${page}`);
  return pathPattern;
};
</script>

<style></style>
