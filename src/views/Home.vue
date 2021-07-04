<template>
  <b-container fluid>
    <template v-if="screenWidth >= 768">
      <section class="home-wrapper d-none d-md-flex">
        <transition-group
          name="player-line"
          tag="div"
          class="row align-items-start m-0 w-100 min-vh-100"
        >
          <b-col
            cols="3"
            v-for="(item, i) in items"
            :key="`${i}-${item.name}`"
            class="player-line  px-0 pb-3"
            :style="{ overflowY: 'auto' }"
            v-show="show > i"
          >
            <h1
              class="text-48 text-md-96 text-center border-bottom border-2 border-black"
            >
              {{ item.name[0] }}
            </h1>
            <component :is="item.component" />
          </b-col>
        </transition-group>
      </section>
    </template>
    <template v-else-if="screenWidth < 768">
      <section class="d-block d-md-none">
        <transition-group name="player-line" tag="div">
          <article
            v-for="(item, i) in items"
            :key="`${i}-${item.name}-m`"
            v-show="show > i"
            class="border-bottom border-2 border-black"
          >
            <header class="position-relative py-2">
              <h1 class="text-48 text-md-96 text-center border-black">
                {{ item.name[0] }}
              </h1>
              <b-btn
                variant="text"
                class="position-absolute rounded-circle btn-caret"
                :style="{
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }"
                v-b-toggle="`${i}-${item.name}-m`"
              >
                <i class="icon icon-caret">
                  <div class="caret-line" />
                  <span class="emoji text-20">
                    {{ item.emoji }}
                  </span>
                  <div class="caret-line" />
                </i>
              </b-btn>
            </header>

            <b-collapse
              accordion="player"
              :id="`${i}-${item.name}-m`"
              class="pb-3 border-top border-2 border-black"
            >
              <component :is="item.component" />
            </b-collapse>
          </article>
        </transition-group>
        <!-- <footer class="py-3 text-center" v-if="show > items.length">
        <span class="text-center text-gray-dark">
          글자를 눌러 작품을 펼쳐보세요
        </span>
      </footer> -->
      </section>
    </template>

    <Lightbox />
  </b-container>
</template>

<script>
import Projects from "@/views/Projects/index";
export default {
  components: {
    // PlayerLine: Home.PlayerLine,
  },
  name: "Home",
  data() {
    return {
      show: 0,
      screenWidth: window.innerWidth,
      items: [
        {
          name: "전우주",
          subject: "삼성전자",
          component: Projects.Sam,
          emoji: "🐜",
        },
        {
          name: "나호정",
          subject: "바다",
          component: Projects.Beach,
          emoji: "🐢",
        },
        {
          name: "이상준",
          subject: "팬티",
          component: Projects.PantyRun,
          emoji: "🚩",
        },

        {
          name: "김도현",
          subject: "현관문",
          component: Projects.Door,
          emoji: "🚪",
        },
      ],
    };
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth;
    },
  },
  mounted() {
    setTimeout(() => {
      setInterval(() => {
        if (this.show > this.items.length) return;
        this.show += 1;
      }, 300);
    }, 2400);
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="scss" scoped></style>
