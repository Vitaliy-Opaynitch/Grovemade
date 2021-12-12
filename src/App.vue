<template>
  <div id="app">
    <transition
      name="router"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      ><router-view></router-view
    ></transition>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  width: 100%;
  height: 100%;
  font-family: "Roboto", sans-serif;
}
html {
  scroll-behavior: smooth;
}
body.modal-open {
  overflow: hidden;
}
a {
  text-decoration: none;
  transition: 0.3s;
}
ul {
  list-style-type: none;
}
button {
  user-select: none;
}
input {
  outline: none;
  border: none;
  background-color: #000;
  color: #fff;
  padding: 0 8px;
  height: 40px;
  font-size: 17px;
  transition: 0.2s;
}
input:hover {
  background-color: #1f1f1f;
}
input:focus {
  box-shadow: 0px 0px 15px 2px #000000e3;
}
.btn-more {
  margin-top: 18px;
  text-transform: uppercase;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 1.4px;
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}
.btn-more:hover {
  text-shadow: 3px 3px 11px #000;
  transform: scale(1.4);
}
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
  opacity: 0;
  transform: translate(0, -5%);
}
</style>
