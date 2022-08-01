<template>
  <Products :products="products"></Products>
</template>
<script>
import Products from "../components/Products.vue";
export default {
  layout: "Index",
  data() {
    return {
      products: [],
    };
  },
  components: {
    Products,
  },
  async asyncData({ $axios }) {
    const products = await $axios.$get(
      "https://api.escuelajs.co/api/v1/products"
    );
    return { products };
  },
};
</script>
