<template>
  <header class="header">
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
  </header>
</template>
<script>
export default {
  name: "Header",
};
</script>
