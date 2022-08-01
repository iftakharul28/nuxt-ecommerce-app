<template>
  <p v-if="$axios.pending">Loading....</p>
  <div class="products__card-wrapper" v-else>
    <article
      class="card"
      v-for="product in products"
      :key="product.id"
      v-bind:id="product.id"
    >
      <div class="card__main">
        <div class="card__image-wrapper">
          <img
            class="card__image"
            v-bind:src="product.images[1]"
            v-bind:alt="product.title"
          />
        </div>
        <div class="card__contents">
          <h2 class="card__contents-heading">{{ product.title }}</h2>
          <div class="card__text-wrapper">
            <p class="card__contents-price">$ {{ product.price }}</p>
            <p class="card__contents-sold">sold {{ product.id }}</p>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  name: "Products",
  props: ["products"],
};
</script>
