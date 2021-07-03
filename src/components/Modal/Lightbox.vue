<template>
  <b-modal id="modal-lightbox" hide-footer size="xl">
    <!-- <b-btn
      @click="close"
      variant="text"
      class="position-fixed p-0 border-0"
      :style="{
        top: '3rem',
        right: '3rem',
      }"
    >
      <div class="close-line" />
      <div class="close-line" />
    </b-btn> -->
    <img :src="image.src" :alt="image.alt" />
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      image: {
        src: null,
        alt: null,
      },
    };
  },
  methods: {
    close() {
      this.$bvModal.hide("modal-lightbox");
    },
  },
  mounted() {
    this.$root.$on("image::clicked", ({ src, alt }) => {
      this.image = {
        src,
        alt,
      };
    });
  },
};
</script>

<style lang="scss" scoped></style>
