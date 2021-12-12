<template>
  <div class="social">
    <a href="tel:+380955997271" class="link-phone"
      >Give us a call! <i class="fas fa-phone-square"></i
    ></a>
    <h2 class="social title">Follow us on social networks</h2>
    <ul class="social-list">
      <li class="social-list-item">
        <a href="https://uk-ua.facebook.com/"
          ><i class="fab fa-facebook-square"></i
        ></a>
      </li>
      <li class="social-list-item">
        <a href="https://www.pinterest.com/"
          ><i class="fab fa-pinterest-square"></i
        ></a>
      </li>
      <li class="social-list-item">
        <a href="https://twitter.com/"><i class="fab fa-twitter-square"></i></a>
      </li>
      <li class="social-list-item">
        <a href="https://www.linkedin.com/"><i class="fab fa-linkedin"></i></a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.social {
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.link-phone {
  color: #000;
  font-size: 30px;
  transition: 0.5s;
  animation: lesshadow 1.4s alternate-reverse infinite;
}
.link-phone:hover {
  transform: scale(1.4);
}
@keyframes lesshadow {
  0% {
    text-shadow: 4px 4px 12px #000000;
  }
  100% {
    text-shadow: 4px 4px 12px #20b2aa;
  }
}
.social-list {
  width: 50%;
  display: flex;
  justify-content: space-between;
}
.social-list-item {
  font-size: 28px;
  transition: 0.3s;
}
.social-list-item a {
  color: #000;
}
.social-list-item:hover {
  transform: scale(1.4);
}
@media (max-width: 768px) {
  .social-list {
    width: 60%;
  }
}
</style>