<template>
  <section class="hero">
    <div class="hero__wrapper">
      <h1>Products</h1>
    </div>
  </section>
</template>
<script>
export default {
  name: "Products",
  data() {
    return {
      products: [],
    };
  },
  async asyncData({ $axios }) {
    const products = await $axios.$get(
      "https://api.escuelajs.co/api/v1/products"
    );
    console.log(products);
    return { products };
  },
};
</script>
