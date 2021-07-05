<template>
  <div class="carousel-card">
    <span class="image-index-box">{{ index }}</span>

    <div class="carousel-card-image" :style="inlineBgImage(image)"></div>

    <div class="carousel-card-content">
      <div class="carousel-card-header">{{ header }}</div>
      <div class="carousel-card-text">{{ text }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CarouselCard",

    props: {
      header: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      index: {
        type: String,
        default: "",
      },
    },

    methods: {
      inlineBgImage(src) {
        let bgImage = require("@/assets/carousel/" + src);

        return {
          backgroundImage: `url("${bgImage}")`,
        };
      },
    },
  };
</script>

<style scoped>
  .carousel-card {
    width: 640px;
    height: 450px;
    background-color: white;
    border-radius: 10px;
    display: inline-block;
  }

  .image-index-box {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    float: left;
    margin-top: 28px;
    margin-left: 36px;
    z-index: 10;
    font-weight: bold;
    font-size: 22px;
    line-height: 46px;
    text-align: center;
    color: #7db945;
  }

  .carousel-card-image {
    margin: 40px 40px 0;
    height: 284px;
    width: 560px;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
  }

  .carousel-card-content {
    font-size: 16px;
    line-height: 24px;
    width: 560px;
    height: 88px;
    margin: 0 auto;
    padding-top: 28px;
    padding-bottom: 10px;
  }

  .carousel-card-header {
    font-weight: 700;
  }

  .carousel-card-text {
    font-weight: 400;
  }

  @media screen and (max-width: 600px) {
    .carousel-card {
      max-width: 280px;
      height: 350px;
    }

    .carousel-card-image {
      margin: 20px 20px 0;
      width: 242px;
      height: 160px;
    }

    .image-index-box {
      width: 40px;
      height: 40px;
      margin-top: 11px;
      margin-left: 12px;
      font-size: 16px;
      line-height: 46px;
    }

    .carousel-card-content {
      font-size: 14px;
      line-height: 22px;
      width: 240px;
      height: 98px;
      margin: 0 auto;
      padding-top: 28px;
      padding-bottom: 10px;
    }
  }
</style>
