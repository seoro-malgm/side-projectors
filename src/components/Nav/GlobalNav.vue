<template>
  <div>
    <transition name="gnb-show">
      <nav
        id="gnb"
        class="py-3 py-md-2 d-flex justify-content-between"
        v-if="show"
      >
        <b-btn variant="text" class="px-2 py-1 rounded-circle" href="/">
          <span class="text-20 d-none d-md-block">
            <img
              :src="require('@/assets/logo-lg.svg')"
              class="logo"
              :class="logoClass(logoIdx)"
              alt="전나이김 로고"
            />
          </span>
          <span class="text-16 d-block d-md-none">
            <img
              :src="require('@/assets/logo.svg')"
              class="logo"
              :class="logoClass(logoIdx)"
              alt="전나이김 로고"
            />
          </span>
        </b-btn>
        <b-btn
          variant="text"
          class="py-0 px-2 rounded-circle"
          v-b-toggle.sidebar-about
        >
          <span class="text-16 d-none d-md-block">
            ABOUT
          </span>
          <span class="text-14 d-block d-md-none">
            ABOUT
          </span>
        </b-btn>
        <!-- <b-btn variant="text" class="p-0 rounded-circle">
      CONTCAT
    </b-btn> -->
      </nav>
    </transition>
    <b-sidebar
      id="sidebar-about"
      backdrop
      right
      header-class="p-1"
      body-class="px-2"
    >
      <header class="mt-2 py-2  text-center">
        <h2 class=" w-100">
          <img
            class="logo"
            :class="logoClass(logoIdx)"
            :src="require('@/assets/logo-lg.svg')"
            alt="전나이김 로고"
            :style="{ width: '10rem', height: 'auto' }"
          />
        </h2>
      </header>
      <p class="mt-3 py-3">
        전나이김팀은 <strong>전</strong>우주, <strong>나</strong>호정,
        <strong>이</strong>상준, <strong>김</strong>도현 네명이 한 팀으로
        '달리기'를 주제를 가지고 각각의 '달리기'를 표현하는 프로젝트를 진행했다.
        단, '달리기'라는 주제와 임의의 단어를 조합하여 서로 같을 수 없는 주제로
        선정했다. <br />
        이번 프로젝트의 사이트 디자인도 각자가 달리는 트랙처럼 디자인하였다.
      </p>
      <section class="mt-4 mb-3">
        <h3 class="text-14 text-md-18 fw-700">
          CONTACT
        </h3>
        <ul class="list-unstyled px-2 mt-2">
          <li class="mb-3" v-for="(item, i) in sites" :key="i">
            <b-btn
              variant="text"
              class="p-0 fw-700 rounded-circle"
              target="_blank"
              :href="item.url"
            >
              {{ item.name }}
            </b-btn>
          </li>
        </ul>
      </section>
    </b-sidebar>
  </div>
</template>

<script>
// import Logo from "@/components/Logo.vue";
export default {
  components: {
    // Logo,
  },
  data() {
    return {
      show: false,
      logoIdx: 0,
      sites: [
        {
          name: "전나이김 @jeonnaleekim.kr",
          url: "https://www.instagram.com/jeonnaleekim.kr/",
        },
        {
          name: "전우주 @jeonoff",
          url: "https://www.instagram.com/jeonoff/",
        },
        {
          name: "나호정 @hzzxi_aw",
          url: "https://www.instagram.com/hzzxi_aw/",
        },
        {
          name: "이상준 @seoro_malgm",
          url: "https://www.instagram.com/seoro_malgm/",
        },
        {
          name: "김도현 @avocado_hyun",
          url: "https://www.instagram.com/avocado_hyun/",
        },
      ],
    };
  },
  methods: {
    logoClass() {
      const type = {
        0: "normal",
        1: "skew",
        2: "tilt",
        3: "long",
        4: "thin",
        5: "glow",
        6: "dynamic",
        7: "rotate",
      };
      return type[this.logoIdx];
    },
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 1200);
    setInterval(() => {
      this.logoIdx = Math.floor(Math.random() * 7);
      // this.logoIdx = 6;
    }, 4000);
  },
};
</script>

<style lang="scss" scoped>
.logo {
  width: 8rem;
  img {
    width: 100%;
    height: auto;
  }
  transition: 0.3s;
  &.skew {
    transform: skew(12deg);
  }
  &.tilt {
    transform: rotate(-8deg);
  }
  &.long {
    transform: scaleX(1.2) scaleY(0.3);
  }
  &.thin {
    transform: scaleX(0.3) scaleY(1.2);
  }
  &.glow {
    animation: glow 4s;
  }
  &.dynamic {
    transform: perspective(6rem) rotateX(-15deg) rotateY(30deg);
  }
  &.rotate {
    transform: rotate(720deg);
  }
}
@keyframes glow {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
