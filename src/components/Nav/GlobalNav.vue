<template>
  <div class="">
    <transition name="gnb-show">
      <nav id="gnb" class="d-flex justify-content-between" v-if="show">
        <b-btn
          variant="text"
          class="logo px-2 py-1 rounded-circle"
          :class="logoClass(logoIdx)"
          href="/"
        >
          <span class="text-20 d-none d-md-block">
            전나이김
          </span>
          <span class="text-16 d-block d-md-none">
            ㅈㄴㅇㄱ
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
      <header class="py-2 d-flex align-items-center justify-content-center">
        <h2 class="logo text-24 text-md-48" :class="logoClass(logoIdx)">
          전나이김
        </h2>
      </header>
      <p class="mt-2 py-3">
        전나이김팀은 <strong>전</strong>우주, <strong>나</strong>호정,
        <strong>이</strong>상준, <strong>김</strong>도현 네명이 한 팀으로
        '달리기'를 주제를 가지고 각각의 '달리기'를 표현하는 프로젝트를 진행했다.
        단, '달리기'라는 주제와 임의의 단어를 조합하여 서로 같을 수 없는 주제로
        선정했다. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        dicta perferendis quibusdam ab itaque quaerat repellat molestiae eveniet
        eaque, praesentium ex sequi, consequatur temporibus numquam inventore
        similique ea veniam at?
      </p>
      <section class="mt-4 mb-3">
        <h3 class="text-14 text-md-18 fw-700">
          CONTACT
        </h3>
        <ul class="list-unstyled px-2 mt-1">
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
export default {
  data() {
    return {
      show: false,
      logoIdx: 0,
      sites: [
        {
          name: "@jeonnaleekim.kr",
          url: "https://www.instagram.com/jeonnaleekim.kr/",
        },
        {
          name: "전우주",
          url: "https://www.instagram.com/jeonoff/",
        },
        {
          name: "나호정",
          url: "https://www.instagram.com/hzzxi_aw/",
        },
        {
          name: "이상준",
          url: "https://www.instagram.com/seoro_malgm/",
        },
        {
          name: "김도현",
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
        2: "rotate",
        3: "long",
        4: "thin",
        5: "glow",
        6: "dynamic",
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
    }, 4000);
  },
};
</script>

<style lang="scss" scoped>
.logo {
  transition: 0.3s;
  &.skew {
    transform: skew(12deg);
  }
  &.rotate {
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
