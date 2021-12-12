<template>
  <div class="hard">
    <h4 data-aos="zoom-in-right" data-aos-delay="200">Made The Hard Way</h4>
    <p data-aos="zoom-in-right" data-aos-delay="200">
      Our signature craftsmanship has been honed over a decade of manufacturing
      innovation here in Portland, Oregon. We combine the skills of our small
      in-house team with the collective strength of collaborators throughout the
      US to deliver quality products worth investing in.
    </p>
    <div class="wrap" data-aos="flip-up" data-aos-delay="400">
      <img src="../img/imgHard.png" alt="photo" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.hard {
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h4 {
  font-size: 35px;
  line-height: 35px;
  user-select: none;
}
p {
  margin-top: 25px;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.8px;
  width: 60%;
  color: #a0a0a0;
}
img {
  width: 100%;
  height: auto;
}
.wrap {
  margin-top: 25px;
  width: 80%;
}
@media (max-width: 768px) {
  h4 {
    font-size: 30px;
    line-height: 30px;
  }
  p {
    width: 85%;
  }
  .wrap {
    width: 100%;
  }
}
@media (max-width: 480px) {
  h4 {
    font-size: 28px;
    line-height: 28px;
  }
  p {
    width: 100%;
    font-size: 13px;
    line-height: 15px;
  }
}
</style>