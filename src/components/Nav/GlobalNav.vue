<template>
  <transition name="gnb-show">
    <nav id="gnb" class="d-flex justify-content-between" v-if="show">
      <b-btn variant="text" class="p-0 rounded-circle" to="/">
        <span class="text-24">
          전나이김
        </span>
      </b-btn>
      <b-btn variant="text" class="p-0 rounded-circle">
        INFO
      </b-btn>
      <!-- <b-btn variant="text" class="p-0 rounded-circle">
      CONTCAT
    </b-btn> -->
    </nav>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 300);
  },
};
</script>

<style lang="scss" scoped></style>
