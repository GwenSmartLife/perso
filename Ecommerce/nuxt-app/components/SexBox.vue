<template>
  <div class="w-full inline-flex h-screen">
    <div
      v-for="card in card.data"
      class="h-full w-1/2 bg-cover bg-center hover:shadow-2xl hover:opacity-95 focus:opacity-75"
      :style="{
        backgroundImage: `url(http://localhost:1337${card.attributes.image.data[0].attributes.url})`,
      }"
    >
      <nuxt-link :to="card.attributes.url + '/home'" class="h-full">
        <div class="h-full text-2xl font-bold text-white text-center flex justify-center items-center">
          {{card.attributes.name}}
          <!-- {{ $route.params.group }} -->
          <!-- <nuxt-img
          :src="
            'http://localhost:1337' +
            card.attributes.image.data[0].attributes.url
          "
          class=""
          :alt="card.attributes.name"
        /> -->
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const { data: card } = await useFetch(
  "http://localhost:1337/api/sexes?populate=*"
);
</script>
