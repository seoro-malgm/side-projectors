<template>
  <div class="">
    <b-btn variant="text text-primary text-noto" @click="$router.go(-1)">
      <font-awesome-icon icon="arrow-left" class="mr-2" />
      <span class="fw-700">뒤로</span>
    </b-btn>
    <router-view />
  </div>
</template>

<script>
// import Nav from "@/components/Nav/index";
export default {};
</script>

<style lang="scss" scoped></style>
