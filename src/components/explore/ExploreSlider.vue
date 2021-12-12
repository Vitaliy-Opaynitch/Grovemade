<template>
  <h5>Examples of our products</h5>
  <splide :options="options">
    <splide-slide class="item">
      <img src="../../img/table1.jpg" />
    </splide-slide>
    <splide-slide class="item">
      <img src="../../img/table2.jpg" />
    </splide-slide>
    <splide-slide class="item">
      <img src="../../img/table3.jpg" />
    </splide-slide>
    <splide-slide class="item">
      <img src="../../img/table4.jpg" />
    </splide-slide>
    <splide-slide class="item">
      <img src="../../img/table5.jpg" />
    </splide-slide>
    <splide-slide class="item">
      <img src="../../img/table6.jpg" />
    </splide-slide>
  </splide>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
export default {
  data() {
    return {
      options: {
        type: "slider",
        rewind: true,
        rewindSpeed: 9000,
        speed: 1500,
        width: "100%",
        height: "70vh",
        gap: "1em",
        arrows: true,
        perMove: 1,
        perPage: 1,
        autoplay: true,
        interval: 2500,
        dragMinThreshold: 3,
        pauseOnFocus: false,
        breakpoints: {
          768: {
            gap: "0.5em",
          },
          breakpoints: {
            500: {
              gap: "0.5em",
              height: "80vh",
              gap: "0em",
            },
          },
        },
      },
    };
  },
  components: {
    Splide,
    SplideSlide,
  },
};
</script>
<style scoped>
.splide__arrows svg {
  fill: #000;
}
img {
  height: auto;
  object-fit: cover;
  display: block;
}
h5 {
  text-align: center;
  font-size: 30px;
  color: #000;
  margin-top: 50px;
}
.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
}
div img {
  transition: 0.3s;
}
@media (max-width: 768px) {
  .splide {
    padding: 0;
  }
  h5 {
    font-size: 25px;
    margin-top: 30px;
  }
  img {
    height: auto;
    object-fit: contain;
    display: block;
  }
}
</style>