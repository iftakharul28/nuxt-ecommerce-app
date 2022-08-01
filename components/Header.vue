<template>
  <section class="header">
    <div class="header__wrapper">
      <div class="header__log">
        <h1>vue app</h1>
      </div>
      <div class="header__link-wrapper">
        <NuxtLink class="header__link" to="/">Home</NuxtLink>
        <NuxtLink class="header__link" to="/about">About</NuxtLink>
        <NuxtLink class="header__link" to="/products">Products</NuxtLink>
        <NuxtLink class="header__link" to="/about">Login</NuxtLink>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style>
.header__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__link-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
}
.header__link {
  font-size: 16px;
  text-decoration: none;
}
</style>
