import Vue from "vue";

const mobilex = {
  data() {
    return {
      mobile: false,
    };
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
  methods: {
    onResize() {
      this.mobile = window.innerWidth <= 800;
    },
  },
};

Vue.mixin(mobilex);
