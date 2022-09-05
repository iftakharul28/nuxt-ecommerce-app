<template>
  <p v-if="$axios.pending">Loading....</p>
  <div class="products__card-wrapper" v-else>
    <article
      class="card"
      v-for="product in products"
      :key="product.id"
      v-bind:id="product.id"
    >
      <NuxtLink class="card__main" :to="'products/' + product.id">
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
      </NuxtLink>
    </article>
  </div>
</template>
<script>
export default {
  name: "Products",
  props: ["products"],
};
</script>
