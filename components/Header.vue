<template>
  <header
    class="header"
    :class="{ 'header--fixed': scrolled }"
    v-show="handleScroll"
  >
    <div class="container">
      <div class="header__wrapper">
        <div class="header__logo-wrapper">
          <img class="header__logo" src="favicon.ico" alt="site logo" />
        </div>
        <div class="header__link-wrapper">
          <NuxtLink class="header__link" to="/">Home</NuxtLink>
          <NuxtLink class="header__link" to="/about">About</NuxtLink>
          <NuxtLink class="header__link" to="/products">Products</NuxtLink>
          <NuxtLink class="header__link" to="/about">Login</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      scrolled: false,
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY >= 5) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
