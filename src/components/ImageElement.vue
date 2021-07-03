<template>
  <figure class="mb-2">
    <img
      class="w-100"
      :src="src"
      :alt="alt"
      @click="showLightbox({ src, alt })"
    />
    <figcaption v-if="caption">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
    },
    alt: {
      type: String,
      default: "포스터 이미지",
    },
    caption: {
      type: String,
      default: undefined,
    },
  },
};
</script>

<style lang="scss" scoped></style>
