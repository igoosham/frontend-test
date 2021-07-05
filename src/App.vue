<template>
  <div id="app">
    <landing-section
      :header="'Взгляните на процесс сборки своими глазами'"
      :background="'#E5E5E5'"
    >
      <carousel-base />
    </landing-section>

    <landing-section>
      <div class="placeholder-image"></div>

      <!-- <generic-button
        @click.native="showPopUp"
        :text="'К покупкам'"
      ></generic-button> -->
      <generic-button @click.native="showPopUp">К покупкам</generic-button>
    </landing-section>

    <pop-up-window
      v-if="isPopUpVisible"
      @close="isPopUpVisible = false"
      :visible="isPopUpVisible"
    ></pop-up-window>

    <div class="link-wrpper">
      <a href="/src.zip">Source code</a>
    </div>
  </div>
</template>

<script>
  import carouselBase from "./components/carousel-base.vue";
  import LandingSection from "./components/landing-section.vue";
  import GenericButton from "./components/generic-button.vue";
  import PopUpWindow from "./components/pop-up.vue";

  export default {
    name: "App",

    components: {
      carouselBase,
      PopUpWindow,
      LandingSection,
      GenericButton,
    },

    data() {
      return {
        isPopUpVisible: false,
      };
    },

    methods: {
      showPopUp() {
        this.isPopUpVisible = true;
      },
    },
  };
</script>

<style>
  .placeholder-image {
    margin: 60px auto 50px;
    width: 860px;
    height: 220px;
    background-image: url("assets/sale-banner.png");
    background-size: 100%;
    background-repeat: no-repeat;
  }

  .link-wrapper {
    height: 50px;
  }

  #app {
    font-family: RotondaC, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #26303b;
    width: 100vw;
    height: 100vh;
  }

  @media screen and (max-width: 600px) {
    .placeholder-image {
      margin: 60px auto 50px;
      width: 280px;
      height: 522px;
      background-image: url("assets/sale-banner-mobile.png");
      background-size: 100%;
      background-repeat: no-repeat;
    }
  }
</style>
