<template>
  <div class="header-down">
    <Modal @close="toggleModal" :modalActive="modalActive"></Modal>
    <Header />
    <div class="content">
      <h2>The Desk Shelf System</h2>
      <p>Available in Walnut or Maple</p>
      <button
        @click="toggleModal"
        type="button"
        class="btn-more btn-more-light"
      >
        Learn more
      </button>
    </div>
    <div class="design">
      <h3 class="design-title">Design Inspires</h3>
      <p class="design-text">
        Build your dream workspace, so you can get your best work done.
      </p>
      <a href="#started" class="design-link">GET STARTED</a>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/UI/Modal";
import Header from "@/components/Header";
import { ref } from "vue";
export default {
  components: {
    Header,
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
.header-down {
  margin: 0 0 40px 0;
}
.content {
  height: 70vh;
  background-image: url("../img/bgheader.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
}
h2,
p {
  user-select: none;
}
h2 {
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  line-height: 45px;
}
p {
  margin-top: 12px;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.8px;
  text-align: center;
}
a {
  margin-top: 15px;
  font-size: 15px;
}
a:hover {
  text-shadow: 3px 3px 11px #000;
  transform: scale(1.4);
}
.design {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.design-title {
  font-size: 43px;
  line-height: 45px;
  user-select: none;
}
.design-text {
  font-size: 14px;
  letter-spacing: 0.8px;
}
.design-link {
  color: #000;
}
.btn-more-light {
  color: #fff;
}
@media (max-width: 768px) {
  h2 {
    font-size: 35px;
    line-height: 35px;
  }
  .design-title {
    font-size: 35px;
    line-height: 35px;
  }
}
@media (max-width: 480px) {
  h2 {
    font-size: 28px;
    line-height: 28px;
  }
  .design-title {
    font-size: 28px;
    line-height: 28px;
  }
}
</style>