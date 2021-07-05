<template>
  <transition name="modal">
    <div class="modal-mask">
        <div class="modal-container">
          <div class="form-header">
            <span @click="close" class="exit-button">&#10006</span>
          </div>

          <form @submit.prevent="submit">
            <input
              type="text"
              v-model="email"
              placeholder="Ваша электронная почта"
              class="input-email"
              :class="emailValidationClass"
              :disabled="isEmailSent"
            />

            <div v-if="isEmailSent" class="thank-you">Спасибо!</div>

            <!-- <generic-button v-else :disabled="isDisabled" :text="'Отправить'" /> -->
            <generic-button v-else :disabled="isDisabled">Отправить</generic-button>
          </form>
        </div>
    </div>
  </transition>
</template>

<script>
  import fakeFetch from "../scripts/fakeServer.js";
  import GenericButton from "./generic-button.vue";

  export default {
    name: "PopUpWindow",

    components: {
      GenericButton,
    },

    props: {
      visible: {
        type: Boolean,
      },
    },

    data() {
      return {
        email: "",
        isEmailSent: false,
      };
    },

    computed: {
      isDisabled() {
        return this.isEmailValid ? false : true;
      },

      lowerCaseTrimmedEmail() {
        return String(this.email).toLowerCase().trim();
      },

      isEmailValid() {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.lowerCaseTrimmedEmail);
      },

      emailValidationClass() {
        if (this.email === "") return "valid";
        return this.isEmailValid ? "valid" : "invalid";
      },
    },

    methods: {
      close() {
        this.$emit("close");
      },
      async submit() {
        this.isEmailSent = true;
        const result = await fakeFetch("https://example.com/profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: this.lowerCaseTrimmedEmail }),
        });

        console.log(result);
      },
    },

    mounted() {
      document.querySelector(".input-email").focus();
    },
  };
</script>

<style scoped>
  input:focus {
    outline: none;
  }

  input:disabled {
    border-bottom-color: grey;
  }

  .modal-mask {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
  }

  .modal-container {
    width: 580px;
    padding-bottom: 50px;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .form-header {
    height: 70px;
    background-color: #7db945;
    border-radius: 10px 10px 0 0;
  }

  .exit-button {
    float: right;
    font-size: 24px;
    cursor: pointer;
    color: white;
    padding-top: 15px;
    padding-right: 20px;
  }

  .input-email {
    width: 360px;
    margin: 50px auto;
    font-size: 24px;
    line-height: 36px;
    border-top: 0;
    border-bottom: 2px solid;
    border-right: 0;
    border-left: 0;
    text-align: center;
  }

  .thank-you {
    width: 340px;
    height: 70px;
    border: 0;
    border-radius: 10px;
    font-size: 34px;
    line-height: 70px;
    font-weight: 700;
    letter-spacing: 0.01em;
    text-align: center;
    vertical-align: middle;
    color: #7db945;
    margin: 0 auto;
  }

  .invalid {
    border-bottom-color: red;
  }

  .valid {
    border-bottom-color: #7db945;
  }

  /*
                                                                                                              * The following styles are auto-applied to elements with
                                                                                                              * transition="modal" when their visibility is toggled
                                                                                                              * by Vue.js.
                                                                                                              *
                                                                                                              * You can easily play with the modal transition by editing
                                                                                                              * these styles.
                                                                                                              */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  @media screen and (max-width: 600px) {
    .modal-container {
      width: 320px;
    }

    .form-header {
      height: 50px;
    }

    .exit-button {
      font-size: 16px;
      color: white;
      padding-right: 15px;
    }

    .input-email {
      width: 280px;
      font-size: 18px;
      line-height: 24px;
    }
  }
</style>
