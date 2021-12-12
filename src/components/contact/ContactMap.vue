<template>
  <div class="map">
    <h2 class="map-title">
      We are located at Lviv, Danylo Halytskoho Square, 6
    </h2>
    <div class="map-iframe" data-aos="zoom-in-down" data-aos-delay="200">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.9025833271844!2d24.030168865592497!3d49.84428792939638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6d483bc015%3A0x162b376992c8bc46!2z0L_Qu9C-0YnQsCDQlNCw0L3QuNC70LAg0JPQsNC70LjRhtGM0LrQvtCz0L4sINCb0YzQstGW0LIsINCb0YzQstGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNzkwMDA!5e0!3m2!1suk!2sua!4v1638630636317!5m2!1suk!2sua"
        width="100%"
        height="350"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.map {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
}
.map-title {
  margin: 20px 0;
  text-align: center;
}
.map-iframe {
  width: 60%;
}
iframe {
  border-radius: 20px;
}
@media (max-width: 768px) {
  h2 {
    font-size: 1.2em;
  }
  .map-iframe {
    width: 100%;
  }
  iframe {
    border-radius: 0px;
  }
}
</style>