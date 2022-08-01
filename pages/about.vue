<template lang="us-en">
<div>
    <li v-for="(item, i) in data" :key="i">
      <p>{{ item.name }}</p>
    </li>
    <p v-if="$axios.pending">Loading....</p>
    <p v-else-if="$axios.error">Error while fetching mountains</p>
    <ul v-else>
      <li v-for="(mountain, index) in mountains" :key="index">
      <h2>{{ mountain.title }}</h2>
        <p>{{mountain.description}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  layout: "About",
  data() {
    return {
      mountains: [],
      data: [
        {
          name: "iftakhar",
          id: 1,
        },
        {
          name: "tamim",
          id: 2,
        },
        {
          name: "siam",
          id: 3,
        },
      ],
    };
  },
  async asyncData({ $axios }) {
    const mountains = await $axios.$get("https://api.nuxtjs.dev/mountains");
    return { mountains };
  },
};
</script>
