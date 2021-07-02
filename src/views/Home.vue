<template>
  <b-container fluid class="home-wrapper">
    <transition-group
      name="player-line"
      tag="div"
      class="row align-items-start m-0 w-100 min-vh-100"
    >
      <b-col
        cols="3"
        v-for="(item, i) in items"
        :key="`${i}-item.name`"
        class="player-line py-3 px-0"
        :style="{ overflowY: 'auto' }"
        v-show="show > i"
      >
        <component :is="item.component" />
      </b-col>
    </transition-group>
  </b-container>
</template>

<script>
import Projects from "./Projects/index";
export default {
  components: {
    // PlayerLine: Home.PlayerLine,
  },
  name: "Home",
  data() {
    return {
      show: 0,
      items: [
        {
          name: "전우주",
          subject: "삼성전자",
          component: Projects.Sam,
        },
        {
          name: "나호정",
          subject: "바다",
          component: Projects.Beach,
        },
        {
          name: "이상준",
          subject: "팬티",
          component: Projects.PantyRun,
        },

        {
          name: "김도현",
          subject: "현관문",
          component: Projects.Door,
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      setInterval(() => {
        if (this.show > this.items.length) return;
        this.show += 1;
      }, 300);
    }, 2400);
  },
};
</script>

<style lang="scss" scoped></style>
