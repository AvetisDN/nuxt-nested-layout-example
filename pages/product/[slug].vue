<template>
  <div class="grow flex flex-col gap-8 items-center justify-center">
    <div class="text-3xl">Страница товара</div>
    <button class="btn btn-sm" @click="handleBack">
      Назад (или &larr; в браузере)
    </button>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const handleBack = () => {
  router.back();
};
</script>

<style></style>
