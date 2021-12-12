<template>
  <div class="accordion" id="accordion" data-aos="flip-up" data-aos-delay="200">
    <div class="accordion-item">
      <h3 class="accordion-item-head" v-on:click="accordion">Why choose us?</h3>
      <div class="accordion-item-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic libero quod
        adipisci at quae eligendi laudantium iste. Maiores laborum minima
        eligendi vero cumque repellat molestias. Inventore est ratione minima
        omnis?
      </div>
    </div>
    <div class="accordion-item">
      <h3 class="accordion-item-head" v-on:click="accordion">
        How we create a design?
      </h3>
      <div class="accordion-item-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic libero quod
        adipisci at quae eligendi laudantium iste. Maiores laborum minima
        eligendi vero cumque repellat molestias. Inventore est ratione minima
        omnis?
      </div>
    </div>
    <div class="accordion-item">
      <h3 class="accordion-item-head" v-on:click="accordion">
        How many years have we been creating good things?
      </h3>
      <div class="accordion-item-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic libero quod
        adipisci at quae eligendi laudantium iste. Maiores laborum minima
        eligendi vero cumque repellat molestias. Inventore est ratione minima
        omnis?
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    accordion: function (event) {
      event.target.classList.toggle("active");
    },
  },
};
</script>
<style>
.accordion {
  margin: 40px 0;
}
.accordion-item {
  position: relative;
}
.accordion-item-head {
  background-color: #000;
  cursor: pointer;
  color: #fff;
  padding: 15px;
  font-size: 16px;
  user-select: none;
}
.accordion-item-body {
  font-size: 16px;
  transition: all 0.2s linear;
}
.accordion-item-head:after {
  content: " < ";
  display: block;
  height: 28px;
  position: absolute;
  right: 25px;
  transform: rotate(90deg) scaleY(2);
  top: 8px;
}
.accordion-item-head.active:after {
  content: " > ";
}
.accordion-item-body {
  visibility: hidden;
  height: 0;
  padding: 0;
}
.accordion-item-head.active + .accordion-item-body {
  visibility: visible;
  padding: 5px 10px;
  height: auto;
}
@media (max-width: 480px) {
  .accordion-item-head {
    padding: 12px;
    font-size: 14px;
  }
  .accordion-item-body {
    font-size: 16px;
  }
}
</style>