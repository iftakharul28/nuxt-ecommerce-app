<template>
  <div>
    <Products />
    <p v-if="$axios.pending">Loading....</p>
    <div class="products-list__wrapper">
      <article
        class="products-list"
        v-for="product in products"
        :key="product.id"
        v-bind:id="product.id"
      >
        <div class="products-list__image-wrapper">
          <img
            class="products-list__image"
            v-bind:src="product.images[1]"
            v-bind:alt="product.title"
          />
        </div>
        <p>{{ product.title }}</p>
        <p>$ {{ product.price }}</p>
      </article>
    </div>
  </div>
</template>
<script>
export default {
  layout: "Index",
  data() {
    return {
      products: [],
    };
  },
  async asyncData({ $axios }) {
    const products = await $axios.$get(
      "https://api.escuelajs.co/api/v1/products"
    );
    return { products };
  },
};
</script>
<style>
.products-list__wrapper {
  grid-template-columns: repeat(2, 1fr);
  display: grid;
  background-color: #fff;
  padding: 1.25rem 0.75rem;
  max-width: 100%;
}
.products-list {
  padding: 8px;
  border: 1px solid #eee;
  cursor: pointer;
}
.products-list__image-wrapper {
  width: 100%;
  height: 9.375rem;
}
.products-list__image {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
@media (min-width: 801px) {
  .products-list__wrapper {
    grid-template-columns: repeat(auto-fill, minmax(224px, 1fr));
    padding: 0.9375rem;
  }
  .products-list__image-wrapper {
    height: 14.375rem;
  }
}
</style>
