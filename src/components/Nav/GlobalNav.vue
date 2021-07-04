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
        <b-btn variant="text" class="py-0 px-2 rounded-circle" v-b-toggle.info>
          <span class="text-16 d-none d-md-block">
            INFO
          </span>
          <span class="text-14 d-block d-md-none">
            INFO
          </span>
        </b-btn>
        <!-- <b-btn variant="text" class="p-0 rounded-circle">
      CONTCAT
    </b-btn> -->
      </nav>
    </transition>
    <b-sidebar id="info" backdrop right header-class="p-1" body-class="px-2">
      <header class="py-2 d-flex align-items-center justify-content-center">
        <h2 class="logo text-24 text-md-48" :class="logoClass(logoIdx)">
          전나이김
        </h2>
      </header>
      <p class="mt-2 py-3">
        전나이김팀은 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Ipsum ipsam, laborum soluta reprehenderit fugiat quos cum commodi neque?
        Dignissimos est eaque sapiente obcaecati distinctio ullam rem qui
        debitis consequuntur quod.
      </p>
      <section class="mt-4 mb-3">
        <h3 class="text-14 text-md-18">
          연락처? sns 주소??
        </h3>
        <ul class="list-unstyled px-2 mt-2">
          <li class="mb-3" v-for="i in 4" :key="i">
            @seoro-malgm
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
