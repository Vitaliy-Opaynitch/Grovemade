<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>
<script>
export default {};
</script>
<style scoped>
.btn {
  border: none;
  height: 40px;
  width: 120px;
  font-size: 15px;
  text-transform: uppercase;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.2s ease-in-out;
}
.btn:after {
  content: "";
  position: absolute;
  display: block;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 100%;
  background: #fff;
  z-index: -1;
  transition: width 0.2s ease-in-out;
}
.btn:hover {
  color: #000;
  box-shadow: 1px 1px 17px 5px #000000ad;
}
.btn:hover:after {
  width: 110%;
}
</style>