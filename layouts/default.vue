<template>
  <div v-if="$nuxt.isOffline">You are offline</div>
  <div v-else class="app">
    <Header />
    <main class="main">
      <SideBar v-if="!mobile" />
      <div class="main__body">
        <Nuxt />
      </div>
      <Footer />
    </main>
    <SideBar v-if="store.sideBar" />
    <MobileNab v-if="mobile" />
  </div>
</template>

<script>
import { store } from "../store/store.js";
export default {
  props: ["default"],
  data() {
    return {
      category: [],
      store,
      mobile: false,
    };
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
  async asyncData({ $axios }) {
    const category = await $axios.$get(
      "https://api.escuelajs.co/api/v1/categories"
    );
    return { category };
  },
};
</script>
