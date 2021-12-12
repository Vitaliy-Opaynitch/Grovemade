<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner">
          <i @click="close" class="far fa-window-close close-pic"></i>
          <h5 class="modal-title">Grovemade</h5>
          <p class="modal-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            unde laborum repellendus totam quibusdam asperiores exercitationem
            dolorum quis sapiente.
          </p>
          <slot />
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
export default {
  props: ["modalActive"],
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    return { close };
  },
};
</script>
<style>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}
.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.2s;
}
.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-animation-inner-leave-to {
  transform: scale(0.8);
}
.modal {
  width: 100%;
  height: 100%;
  background-color: #414141c5;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
}
.modal-inner {
  background-color: #fafafa;
  width: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  color: #000;
}
.modal-title {
  font-size: 18px;
  text-align: center;
}
.modal-text {
  font-size: 15px;
  text-align: justify;
}
.close-pic {
  font-size: 25px;
  cursor: pointer;
  margin-left: 90%;
  transition: 0.3s;
}
.close-pic:hover {
  color: #20b2aa;
}
</style>