<template>
  <b-modal id="modal-lightbox" :hide-footer="!image.caption" size="lg">
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
    <template #modal-footer>
      <p
        class="mt-3 mx-0 w-100 py-2 text-16 text-lg-20 text-white border-top border-bottom border-white border-2"
      >
        {{ image.caption }}
      </p>
    </template>
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
    this.$root.$on("image::clicked", ({ src, alt, caption }) => {
      this.image = {
        src,
        alt,
        caption,
      };
    });
  },
};
</script>

<style lang="scss" scoped></style>
