<template>
  <div class="bg-black inline-flex w-full h-9 space-x-4 items-center px-8">
    <div v-for="link in navbar.data.attributes.links" class="text-xl font-bold text-white hover:underline ">
      <nuxt-link :to=link.url> {{link.label}} </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const { data: navbar } = await useFetch("http://localhost:1337/api/navbar?populate=*");
</script>
