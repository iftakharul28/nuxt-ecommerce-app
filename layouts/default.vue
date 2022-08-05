<template>
  <div v-if="$nuxt.isOffline">You are offline</div>
  <div v-else class="app">
    <Header />
    <main class="main">
      <SideBar v-if="show" />
      <div class="main__body">
        <Nuxt />
      </div>
      <Footer />
    </main>
    <SideBar v-if="!show" />
    <MobileNab v-if="!show" />
  </div>
</template>

<script>
export default {
  props: ["default"],
  data() {
    return {
      category: [],
      show: true,
    };
  },
  methods: {
    handleResize() {
      if (window.innerWidth <= 800) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
  },
  beforeMount() {
    window.addEventListener("resize", this.handleResize);
    this.show = true;
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  async asyncData({ $axios }) {
    const category = await $axios.$get(
      "https://api.escuelajs.co/api/v1/categories"
    );
    console.log(category);

    return { category };
  },
};
</script>
