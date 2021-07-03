import Vue from "vue";

// import regex from "../lib/regex";
const common = {
  install(
    Vue
    // , options
  ) {
    Vue.mixin({
      computed: {},
      data() {
        return {};
      },
      methods: {
        showLightbox(image) {
          this.$root.$emit("image::clicked", image);
          this.$bvModal.show("modal-lightbox");
        },
      },
    });
  },
};

Vue.use(common);
