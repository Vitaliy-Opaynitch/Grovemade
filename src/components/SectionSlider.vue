<template>
  <splide :options="options">
    <splide-slide class="item" data-aos="flip-left">
      <img src="../img/sliderpic.png" />
      <p>Walnut MagSafe Stand</p>
    </splide-slide>
    <splide-slide class="item" data-aos="flip-right">
      <img src="../img/sliderpic1.png" />
      <p>Mapple Laptop Riser</p>
    </splide-slide>
    <splide-slide class="item" data-aos="flip-left">
      <img src="../img/sliderpic2.png" />
      <p>Walnut iPad Stand</p>
    </splide-slide>
    <splide-slide class="item" data-aos="flip-right">
      <img src="../img/sliderpic3.png" />
      <p>Walnut Monitor Stand</p>
    </splide-slide>
    <splide-slide class="item" data-aos="flip-left">
      <img src="../img/sliderpic.png" />
      <p>Mapple Stand</p>
    </splide-slide>
    <splide-slide class="item" data-aos="flip-right">
      <img src="../img/sliderpic1.png" />
      <p>Oak Stend</p>
    </splide-slide>
    <splide-slide class="item" data-aos="flip-left">
      <img src="../img/sliderpic2.png" />
      <p>Walnut iPad Stand</p>
    </splide-slide>
    <splide-slide class="item" data-aos="flip-right">
      <div><img src="../img/sliderpic3.png" /></div>
      <p>Walnut Monitor Stand</p>
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
        rewind: true,
        speed: 1300,
        rewindSpeed: 4000,
        width: "100%",
        gap: "3em",
        type: "slide",
        arrows: false,
        perMove: 1,
        perPage: 4,
        autoplay: true,
        interval: 2000,
        slideFocus: true,
        breakpoints: {
          768: {
            perPage: 3,
            gap: "2em",
          },
        },
        breakpoints: {
          480: {
            perPage: 1,
            gap: "1em",
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
.slider {
  margin: 40px 40px 40px 0;
  height: 80vh;
  display: flex;
  justify-content: center;
  width: 100%;
}
img {
  width: 100%;
  height: auto;
}
p {
  text-align: center;
  font-size: 15px;
  color: #7c7c7c;
  margin-top: 10px;
}
.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
}
div img {
  transition: 0.3s;
}
div img:hover {
  opacity: 0.8;
}
@media (max-width: 768px) {
  .slider {
    margin: 40px 10px;
  }
  .splide {
    padding: 2em;
  }
}
</style>
