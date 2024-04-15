<template>
  <div
    class="min-h-screen w-full bg-zinc-950 text-zinc-200 font-medium flex flex-col gap-6"
  >
    <Header />
    <main class="grow flex flex-col container mx-auto px-4">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
