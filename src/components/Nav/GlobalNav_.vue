<template>
  <nav
    class="position-absolute text-center"
    :style="{ top: '2rem', left: '50%', transform: 'translateX(-50%)' }"
  >
    <router-link
      to="/"
      class="btn btn-link text-decoration-none p-1 border-0 text-32"
    >
      <!-- <img
        class="logo"
        :src="require('@/assets/logo.png')"
        alt="로고"
        :style="{
          transform: `matrix3d(${a1},${b1},${c1},${d1},${a2},${b2},${c2},${d2},${a3},${b3},${c3},${d3},${a4},${b4},${c4},${d4})`,
        }"
      /> -->
      <div
        :style="{
          transform: `matrix3d(${a1},${b1},${c1},${d1},${a2},${b2},${c2},${d2},${a3},${b3},${c3},${d3},${a4},${b4},${c4},${d4})`,
        }"
      >
        RUN
      </div>
    </router-link>
    <div class="d-flex text-nowrap">
      <b-form-input type="range" :min="0.1" :max="100" :step="0.1" v-model="a1">
      </b-form-input>
      <span class="ml-2 text-nowrap"> a1: {{ a1 }} </span>
    </div>
    <div class="d-flex">
      <b-form-input type="range" :min="0.1" :max="100" :step="0.1" v-model="b1">
      </b-form-input>
      <span class="ml-2 text-nowrap"> b1: {{ b1 }} </span>
    </div>
    <div class="d-flex">
      <b-form-input type="range" :min="0.1" :max="100" :step="0.1" v-model="c1">
      </b-form-input>
      <span class="ml-2 text-nowrap"> c1: {{ c1 }} </span>
    </div>
    <div class="d-flex">
      <b-form-input type="range" :min="0.1" :max="100" :step="0.1" v-model="d1">
      </b-form-input>
      <span class="ml-2 text-nowrap"> d1: {{ d1 }} </span>
    </div>
    <div class="d-flex">
      <b-form-input type="range" :min="0.1" :max="100" :step="0.1" v-model="a2">
      </b-form-input>
      <span class="ml-2 text-nowrap"> a2: {{ a2 }} </span>
    </div>
    <div class="d-flex">
      <b-form-input type="range" :min="0.1" :max="100" :step="0.1" v-model="b2">
      </b-form-input>
      <span class="ml-2 text-nowrap"> b2: {{ b2 }} </span>
    </div>
    <div class="d-flex">
      <b-form-input type="range" :min="0.1" :max="100" :step="0.1" v-model="c2">
      </b-form-input>
      <span class="ml-2 text-nowrap"> c2: {{ c2 }} </span>
    </div>
    <div class="d-flex">
      <b-form-input type="range" :min="0.1" :max="100" :step="0.1" v-model="d2">
      </b-form-input>
      <span class="ml-2 text-nowrap"> d2: {{ d2 }} </span>
    </div>
    <div class="d-flex">
      <b-form-input type="range" :min="0.1" :max="100" :step="0.1" v-model="a3">
      </b-form-input>
      <span class="ml-2 text-nowrap"> a3: {{ a3 }} </span>
    </div>
    <div class="d-flex">
      <b-form-input type="range" :min="0.1" :max="100" :step="0.1" v-model="b3">
      </b-form-input>
      <span class="ml-2 text-nowrap"> b3: {{ b3 }} </span>
    </div>
    <div class="d-flex">
      <b-form-input type="range" :min="0.1" :max="100" :step="0.1" v-model="c3">
      </b-form-input>
      <span class="ml-2 text-nowrap"> c3: {{ c3 }} </span>
    </div>
    <div class="d-flex">
      <b-form-input type="range" :min="0.1" :max="100" :step="0.1" v-model="d3">
      </b-form-input>
      <span class="ml-2 text-nowrap"> d3: {{ d3 }} </span>
    </div>
    <div class="d-flex">
      <b-form-input type="range" :min="0.1" :max="100" :step="0.1" v-model="a4">
      </b-form-input>
      <span class="ml-2 text-nowrap"> a4: {{ a4 }} </span>
    </div>
    <div class="d-flex">
      <b-form-input type="range" :min="0.1" :max="100" :step="0.1" v-model="b4">
      </b-form-input>
      <span class="ml-2 text-nowrap"> b4: {{ b4 }} </span>
    </div>
    <div class="d-flex">
      <b-form-input type="range" :min="0.1" :max="100" :step="0.1" v-model="c4">
      </b-form-input>
      <span class="ml-2 text-nowrap"> c4: {{ c4 }} </span>
    </div>
    <div class="d-flex">
      <b-form-input type="range" :min="0.1" :max="100" :step="0.1" v-model="d4">
      </b-form-input>
      <span class="ml-2 text-nowrap"> d4: {{ d4 }} </span>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      a1: 1,
      b1: 0,
      c1: 0,
      d1: 0,
      a2: 0,
      b2: 1,
      c2: 6,
      d2: 0,
      a3: 0,
      b3: 0,
      c3: 1,
      d3: 0,
      a4: 0,
      b4: 0,
      c4: 0,
      d4: 1.1,
    };
  },
};
</script>

<style lang="scss" scoped>
.logo {
  width: 4rem;
  transition: 0.3s;
  transform: rotate3d(1, 1, 1, 30deg);
}
</style>
