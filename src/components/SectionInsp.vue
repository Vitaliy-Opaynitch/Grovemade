<template>
  <div class="inspire">
    <h5 data-aos="zoom-in-right" data-aos-delay="200">
      We Hope You'll Join Us
    </h5>
    <div class="background-gray">
      <img
        src="../svg/logowhite.svg"
        alt="logo"
        data-aos="zoom-in-right"
        data-aos-delay="200"
      />
      <h6 data-aos="zoom-in-right" data-aos-delay="200">Design Inspires</h6>
      <p data-aos="zoom-in-right" data-aos-delay="200">
        Build your dream workspace, so you can get your best work done.
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.inspire {
  margin: 40px 0;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h5 {
  font-weight: normal;
  font-size: 35px;
  line-height: 35px;
  margin: 40px 0;
  text-align: center;
}
.background-gray {
  background: linear-gradient(-45deg, #2e2e2e, #6b6b6b, #a0a0a0, #d8d8d8);
  background-size: 400% 400%;
  animation: gradient 6s ease infinite;
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-shadow: 4px 4px 12px #000;
}
h6 {
  font-weight: normal;
  font-size: 43px;
  line-height: 58px;
  user-select: none;
  text-align: center;
}
p {
  margin-top: 25px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.8px;
  text-align: center;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@media (max-width: 768px) {
  .inspire {
    padding: 0;
  }
  h5 {
    font-size: 30px;
    line-height: 30px;
    margin: 20px 0;
  }
  h6 {
    font-size: 35px;
    line-height: 35px;
  }
}
@media (max-width: 480px) {
  h5 {
    font-size: 28px;
    line-height: 28px;
  }
  h6 {
    font-size: 30px;
    line-height: 30px;
  }
}
</style>