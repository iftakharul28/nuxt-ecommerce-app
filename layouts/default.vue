<template>
  <main class="main">
    <Header />
    <SideBar />
    <div class="main__body"><Nuxt /></div>

    <Footer />
  </main>
</template>

<script>
export default {
  props: ["default"],
};
</script>
