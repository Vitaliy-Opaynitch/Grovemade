<template>
  <div class="office">
    <Modal @close="toggleModal" :modalActive="modalActive"></Modal>
    <h3 data-aos="zoom-in-rigth" data-aos-delay="200">
      Home Office Inspiration
    </h3>
    <p class="text" data-aos="zoom-in-rigth" data-aos-delay="200">
      Working from home can be a challenge — see some creative solutions to get
      it just right.
    </p>
    <button
      @click="toggleModal"
      type="button"
      class="btn-more btn-more-light"
      data-aos="zoom-in-rigth"
      data-aos-delay="200"
    >
      Learn more
    </button>
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
.office {
  margin: 40px 0;
  background-image: url(../img/officeBg.png);
  background-size: cover;
  background-repeat: no-repeat;
  height: 70vh;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
}
h3 {
  font-size: 45px;
  line-height: 45px;
  font-weight: normal;
  user-select: none;
  text-align: center;
}
.text {
  margin-top: 15px;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.8px;
  text-align: center;
}
.btn-more-light {
  color: #fff;
}
@media (max-width: 768px) {
  h3 {
    font-size: 35px;
    line-height: 35px;
  }
}
@media (max-width: 480px) {
  h3 {
    font-size: 28px;
    line-height: 28px;
  }
}
</style>