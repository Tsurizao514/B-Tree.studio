<template>
  <div class="comments-wrapper theme-default-content" v-show="isShowComments">
    <component :is="componentName" :options="options" />
  </div>
</template>

<script>
import Valine from "./Valine.vue";
// import Vssue from "./Vssue.vue";
export default {
  components: { Valine },
  props: {
    isShowComments: {
      type: Boolean,
      default: true
    },
    path: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      // eslint-disable-next-line no-undef
      commentsOptions: COMMENTS_OPTIONS
    };
  },
  computed: {
    solution() {
      const {
        commentsOptions: { solution: slt },
        $themeConfig: { valineConfig, vssueConfig }
      } = this;

      let solution = "";
      if (slt !== undefined) {
        solution = slt;
      } else if (valineConfig !== undefined) {
        solution = "valine";
      } else if (vssueConfig !== undefined) {
        solution = "vssue";
      }
      return solution;
    },
    options() {
      const {
        commentsOptions: { options: opt },
        $themeConfig: { valineConfig, vssueConfig }
      } = this;

      if (opt !== undefined) {
        if (this.path) {
          opt.path = this.path;
        }
        return opt;
      } else if (valineConfig !== undefined) {
        return valineConfig;
      } else if (vssueConfig !== undefined) {
        return vssueConfig;
      }
      return null;
    },
    componentName() {
      const solution = this.solution;
      return solution === "valine"
        ? "Valine"
        : solution === "vssue"
        ? "Vssue"
        : "";
    }
  },
  mounted() {
    this.$themeConfig.commentsSolution = this.solution;
  }
};
</script>