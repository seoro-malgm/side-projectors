<template>
  <figure class="mb-2">
    <div class="wrap">
      <img
        class="w-100"
        :src="src"
        :alt="caption"
        @click="showLightbox({ src, alt, caption })"
      />
    </div>
    <figcaption v-if="caption" class="text-14">
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

<style lang="scss" scoped>
figcaption {
  font-style: italic;
  opacity: 0.5;
}
</style>
