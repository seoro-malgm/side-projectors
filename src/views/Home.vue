<template>
  <div class="home">
    <b-container
      fluid
      class="d-flex flex-column align-items-center justify-content-center min-vh-100"
    >
      <b-row class="my-auto" align-h="center">
        <b-col cols="10" md="5">
          <!-- <p class="text-center text-16 p-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam illo
            temporibus, dolorem maxime reiciendis error nostrum velit ad
            voluptatibus animi repudiandae saepe voluptas soluta doloribus eaque
            earum, obcaecati harum eius. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Ullam illo temporibus, dolorem maxime reiciendis
            error nostrum velit ad voluptatibus animi repudiandae saepe voluptas
            soluta doloribus eaque earum, obcaecati harum eius. Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Ullam illo temporibus,
            dolorem maxime reiciendis error nostrum velit ad voluptatibus animi
            repudiandae saepe voluptas soluta doloribus eaque earum, obcaecati
            harum eius.
          </p> -->
        </b-col>
      </b-row>
      <!-- <PlayerLine class="mt-auto" :items="items" /> -->
    </b-container>
  </div>
</template>

<script>
import Home from "@/components/Home/index";
export default {
  components: {
    // PlayerLine: Home.PlayerLine,
  },
  name: "Home",
  data() {
    return {
      items: [
        {
          name: "김도현",
          subject: "현관문",
          project: "Soon",
        },
        {
          name: "나호정",
          subject: "바다",
          project: "Soon",
        },
        {
          name: "이상준",
          subject: "팬티",
          project: "PantyRun",
        },
        {
          name: "전우주",
          subject: "삼성전자",
          project: "Soon",
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
