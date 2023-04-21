<template>
  <div>Home {{ sex }}</div>
  <nuxt-link to="/">Back</nuxt-link>

</template>
<script setup>
const { data: products } = await useFetch(
  "http://localhost:1337/api/products?populate=*"
);
const route = useRoute();

let { data: sex } = "";
console.log("current name", route.href);
if (route.href.split("/")[1] === "f") {
  console.log("femme");
  sex = "femme";
} else {
  sex = "homme";

  console.log("homme", route.href.split("/"));
}
</script>
