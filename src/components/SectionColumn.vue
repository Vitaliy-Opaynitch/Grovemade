<template>
  <Modal @close="toggleModal" :modalActive="modalActive"></Modal>
  <div class="columns" id="started">
    <div class="hover-text-one" data-aos="zoom-in-right">
      <figure class="effect-text-three">
        <img src="../img/laptop.png" />
        <figcaption>
          <h3>Desk Pads</h3>
          <button @click="toggleModal" type="button" class="more">
            Learn more
          </button>
        </figcaption>
      </figure>
    </div>
    <div class="hover-text-one" data-aos="zoom-in-left">
      <figure class="effect-text-three">
        <img src="../img/laptop1.png" />
        <figcaption>
          <h3>Laptop Stands</h3>
          <button @click="toggleModal" type="button" class="more">
            Learn more
          </button>
        </figcaption>
      </figure>
    </div>
  </div>
</template>
<script>
import Modal from "@/components/UI/Modal";
import { ref } from "vue";
export default {
  components: {
    Modal,
  },
  setup() {
    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    return { modalActive, toggleModal };
  },
  watch: {
    modalActive: function (newVal) {
      let className = "modal-open";
      if (newVal) {
        document.body.classList.add(className);
      } else {
        document.body.classList.remove(className);
      }
    },
  },
};
</script>
<style scoped>
.columns {
  margin: 40px 0;
  display: flex;
  justify-content: space-between;
  height: auto;
}
.more {
  margin-top: 18px;
  text-transform: uppercase;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 1.4px;
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  color: #fff;
}
.more:hover {
  text-shadow: 3px 3px 11px #000;
}
h3 {
  font-size: 1.5em;
}
span {
  margin-top: 40px;
  font-size: 27px;
  line-height: 30px;
  color: #000;
}
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}
.hover-text-one {
  overflow: hidden;
  margin: 0;
  width: 100%;
  list-style: none;
  text-align: center;
}
.hover-text-one figure {
  position: relative;
  z-index: 1;
  display: inline-block;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
}
.hover-text-one figure img {
  position: relative;
  display: block;
  min-height: 100%;
  opacity: 0.8;
}
.hover-text-one figure figcaption {
  padding: 2em;
  color: #fff;
  text-transform: uppercase;
  backface-visibility: hidden;
}
.hover-text-one figure figcaption::before,
.hover-text-one figure figcaption::after {
  pointer-events: none;
}
.hover-text-one figure figcaption {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.hover-text-one figure h3 {
  word-spacing: 0.15em;
  font-weight: 300;
}
.hover-text-one figure h3,
.hover-text-one figure button {
  margin: 0;
}
.hover-text-one figure button {
  letter-spacing: 1px;
}
figure.effect-text-three {
  background: #69787a;
}
figure.effect-text-three img {
  width: calc(100% + 20px);
  transition: opacity 0.35s, transform 0.35s;
  transform: scale(1.1);
  backface-visibility: hidden;
}
figure.effect-text-three:hover img {
  opacity: 0.4;
  transform: translate3d(0, 0, 0);
}
figure.effect-text-three figcaption {
  text-align: left;
}
figure.effect-text-three h3 {
  position: relative;
  overflow: hidden;
  padding: 0.5em 0;
}
figure.effect-text-three h3::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #fff;
  content: "";
  transition: transform 0.35s;
  transform: translate3d(-100%, 0, 0);
}
figure.effect-text-three:hover h3::after {
  transform: translate3d(0, 0, 0);
}
figure.effect-text-three button {
  padding: 1em 0;
  opacity: 0;
  transition: opacity 0.35s, transform 0.35s;
  transform: translate3d(100%, 0, 0);
}
figure.effect-text-three:hover button {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
@media (max-width: 1000px) {
  .columns {
    display: block;
  }
  .hover-text-one {
    margin-top: 20px;
  }
}
</style>