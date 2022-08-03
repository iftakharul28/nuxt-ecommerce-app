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
      limitPosition: 100,
      scrolled: false,
      lastPosition: 0,
    };
  },
  methods: {
    handleScroll() {
      if (
        this.lastPosition < window.scrollY &&
        this.limitPosition < window.scrollY
      ) {
        this.scrolled = true;
        // move up!
      }

      if (this.lastPosition > window.scrollY) {
        this.scrolled = true;
        // this.scrolled = false;
        // move down
      }

      this.lastPosition = window.scrollY;
      // this.scrolled = window.scrollY > 250;
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
