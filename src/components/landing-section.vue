<template>
  <div class="section-wrapper" :style="{ 'background-color': background }">
    <div v-if="header" class="section-header">
      {{ header }}
    </div>

    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "LandingSection",

    props: {
      header: {
        type: String,
      },
      background: {
        type: String,
        default: "white",
      },
    },
  };
</script>

<style scoped>
  .section-wrapper {
    padding: 1px 0 80px;
  }

  .section-header {
    font-weight: 700;
    font-size: 36px;
    line-height: 46px;
    margin: 28px auto;
    max-width: 560px;
  }

  @media screen and (max-width: 600px) {
    .section-wrapper {
      padding: 1px 0 50px;
    }
    .section-header {
      font-size: 26px;
      line-height: 32px;
      max-width: 320px;
    }
  }
</style>
