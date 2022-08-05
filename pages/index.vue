<template>
  <Products :products="products"></Products>
</template>
<script>
import Products from "../components/Products.vue";
export default {
  layout: "Index",
  head() {
    return {
      title: "Home Page",
      meta: [
        { hid: "description", name: "Home Page Description", content: "" },
      ],
    };
  },
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
      "https://api.escuelajs.co/api/v1/products?offset=0&limit=40"
    );
    return { products };
  },
};
</script>
