<template>
  <span :id="getIdVal(idVal)" class="leancloud-visitors" :data-flag-title="flagTitle">
    <a class="leancloud-visitors-count" :style="numStyle"></a>
  </span>
</template>

<script>
export default {
  props: {
    idVal: String,
    numStyle: Object,
    flagTitle: {
      type: String,
      default: "Your Article Title"
    }
  },
  methods: {
    getIdVal(path) {
      try {
        if (!path) {
          path = location.pathname;
        }
        const base = this.$site.base;
        return base.slice(0, base.length - 1) + path;
      } catch (error) {
        return 0;
      }
    }
  }
};
</script>