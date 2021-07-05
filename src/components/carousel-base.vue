<template>
  <div class="carousel-wrapper">
    <img
      @click.stop="showPrevCard"
      :src="
        isFirst
          ? require(`@/assets/carousel/arrow-left-disabled.svg`)
          : require(`@/assets/carousel/arrow-left.svg`)
      "
      :style="{ cursor: isFirst ? 'default' : 'pointer' }"
      class="arrow-left"
    />

    <carousel-card
      :header="currentCard.header"
      :image="currentCard.image"
      :text="currentCard.text"
      :index="`${currentCardIndex + 1}`"
      style="grid-area: main"
    />

    <img
      @click="showNextCard"
      :src="
        isLast
          ? require(`@/assets/carousel/arrow-right-disabled.svg`)
          : require(`@/assets/carousel/arrow-right.svg`)
      "
      :style="{ cursor: isLast ? 'default' : 'pointer' }"
      class="arrow-right"
    />
  </div>
</template>

<script>
  import CarouselCard from "./carousel-card.vue";
  import cardDataJson from "../assets/carousel/carousel-data.json";

  export default {
    name: "carouselBase",

    components: {
      CarouselCard,
    },

    data() {
      return {
        cardData: cardDataJson,
        currentCardIndex: 0,
      };
    },

    computed: {
      currentCard() {
        return {
          header: this.cardData[this.currentCardIndex].header,
          image: this.cardData[this.currentCardIndex].image,
          text: this.cardData[this.currentCardIndex].text,
        };
      },
      isFirst() {
        return this.currentCardIndex === 0;
      },
      isLast() {
        return this.currentCardIndex === this.cardData.length - 1;
      },
    },

    methods: {
      showNextCard() {
        if (this.isLast) return;
        this.currentCardIndex++;
      },

      showPrevCard() {
        if (this.isFirst) return;

        this.currentCardIndex--;
      },
    },
  };
</script>

<style scoped>
  img {
    width: 15px;
    height: 30px;
  }

  .arrow-left,
  .arrow-right {
    margin-top: 33px;
  }

  .arrow-left {
    margin-right: 30px;
    grid-area: start;
    justify-self: end;
  }

  .arrow-right {
    margin-left: 30px;
    grid-area: end;
  }

  .carousel-wrapper {
    display: grid;
    grid-template-areas:
      "main main"
      "start end";
    justify-content: center;
  }

  @media screen and (min-width: 600px) {
    img {
      width: 20px;
      height: 40px;
    }

    .carousel-wrapper {
      grid-template-areas: "start main end";
      align-items: center;
      justify-content: center;
    }
  }
</style>
