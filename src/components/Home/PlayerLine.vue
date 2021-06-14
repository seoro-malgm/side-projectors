<template>
  <div class="w-100 d-flex flex-column">
    <article
      class="player-el w-100 py-4 px-3"
      v-for="(player, i) in items"
      :key="i"
      @click="
        $router.push({
          name: player.project,
        })
      "
    >
      <div class="vl" :style="{ marginLeft: `${2.5 * i}rem` }" />
      <div
        class="d-flex align-items-center justify-content-between position-relative"
        :style="{ zIndex: '3' }"
      >
        <h3 class="text-30">{{ player.subject }}, 달리다</h3>
        <span class="text-24 ml-auto mr-5">
          {{ player.name }}
        </span>
        <font-awesome-icon icon="arrow-right" class="ml-2" />
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: undefined,
    },
  },
};
</script>

<style lang="scss" scoped></style>
