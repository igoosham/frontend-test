<template>
  <div>
    <!-- <button class="generic-button" :disabled="disabled">{{ text }}</button> -->
    <button class="generic-button" :disabled="disabled">
      <slot></slot>
    </button>
  </div>
</template>

<script>
  export default {
    name: "GenericButton",

    props: {
      // text: {
      //   type: String,
      //   required: false,
      //   default: "Button",
      // },
      disabled: {
        type: Boolean,
      },
    },
  };
</script>

<style scoped>
  button:disabled {
    opacity: 0.6;
    cursor: default;
  }

  .generic-button {
    width: 340px;
    height: 70px;
    background: #7db945;
    border: 0;
    border-radius: 10px;
    font-size: 22px;
    line-height: 36px;
    font-weight: 700;
    letter-spacing: 0.01em;
    text-align: center;
    color: white;
    display: block;
    margin: 0 auto;
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    .generic-button {
      width: 280px;
      font-size: 20px;
      line-height: 34px;
    }
  }
</style>
