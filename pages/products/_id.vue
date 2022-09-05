<template>
  <section class="product-single">
    <div class="product-single__wrapper">
      <div class="product-single__main">
        <div class="product-single__content-wrappper">
          <h1 class="product-single__heading">{{ product.title }}</h1>
          <div class="product-single__content">
            <div class="product-single__content-first-col">
              <div class="product-single__content-images">
                <div class="product-single__image-main-wrapper">
                  <img
                    class="product-single__image-main"
                    v-bind:src="product.images[1]"
                    v-bind:alt="product.title"
                  />
                </div>
                <div class="product-single__image-lists-wrapper">
                  <figure
                    class="product-single__image-lists"
                    v-for="image in product.images"
                  >
                    <img
                      class="product-single__image"
                      v-bind:src="image"
                      v-bind:alt="product.title"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div class="product-single__content-second-col">
              <div class="product-single__category-list">
                <h2 class="product-single__subheading">
                  category: {{ product.category.name }}
                </h2>
                <p>description : {{ product.description }}</p>
                <div class="product-single__image-lists-wrapper">
                  <div
                    v-bind:title="product.category.name"
                    class="product-single__image-lists"
                  >
                    <figure class="product-single__image-list">
                      <img
                        class="product-single__image product-single__image--active"
                        v-bind:src="product.category.image"
                        v-bind:alt="product.category.name"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="mobile" class="product-single__side-wrapper">
          <h2 class="product-single__subheading">More Products</h2>
          <div class="product-single__side-cards">
            <Products :products="products" />
          </div>
        </div>
      </div>
      <div v-if="!mobile" class="product-single__side-wrapper">
        <div class="product-single__side-cards">
          <Products :products="products" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Products from "../../components/Products.vue";
export default {
  layout: "Products Single",
  head() {
    return {
      title: "Products Single Page",
      meta: [
        {
          hid: "description",
          name: "Products Single Page Description",
          content: "",
        },
      ],
    };
  },
  data() {
    return {
      product: {},
      products: [],
      mobile: false,
    };
  },
  components: {
    Products,
  },
  methods: {
    onResize() {
      this.mobile = window.innerWidth <= 800;
    },
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  async asyncData({ params, $axios }) {
    const product = await $axios.$get(
      `https://api.escuelajs.co/api/v1/products/${params.id}`
    );

    const products = await $axios.$get(
      "https://api.escuelajs.co/api/v1/products?offset=30&limit=60"
    );

    return { product, products };
  },
};
</script>
