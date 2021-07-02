<template>
  <div class="">
    <global-nav />
    <main>
      <router-view />
    </main>
    <!-- <global-footer /> -->
  </div>
</template>

<script>
import Nav from "@/components/Nav/index";
export default {
  components: {
    GlobalNav: Nav.GlobalNav,
    // GlobalFooter: Nav.GlobalFooter,
  },
};
</script>

<style lang="scss" scoped></style>
