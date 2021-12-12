<template>
  <div class="header" id="header">
    <div class="links">
      <router-link to="contact" class="link link-left">Contact</router-link>
      <router-link to="explore" class="link">Explore</router-link>
    </div>
    <div class="logo">
      <svg
        width="21"
        height="17"
        viewBox="0 0 21 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5413 16.5565V16.4087C11.5413 16.5565 9.93426 12.4174 9.34989 11.8261C8.03506 10.4956 6.57414 10.6435 5.5515 10.6435H0.584368C0.292184 10.6435 0 10.7913 0 11.087V11.2348C0 11.2348 1.60701 15.3739 2.19138 15.8174C3.36012 17 4.38276 17 5.98977 17H11.103C11.3952 17 11.5413 16.8522 11.5413 16.5565Z"
          fill="#272524"
        />
        <path
          d="M20.0146 11.3826C20.0146 8.27826 16.8006 1.47826 16.3623 0.295652C16.3623 0.147826 16.2162 0 15.924 0C15.778 0 15.4858 0.147826 15.4858 0.295652C13.2944 5.46957 11.6874 9.31304 11.6874 9.31304C11.5413 9.75652 11.3952 10.2 11.5413 10.6435C11.6874 11.087 12.5639 12.8609 13.1483 14.3391C14.0249 16.4087 14.1709 17 16.0701 17C18.4076 17 20.0146 14.9304 20.0146 11.3826Z"
          fill="#272524"
        />
      </svg>
      <h1>Grovemade</h1>
    </div>
    <div class="chart">
      <a href="tel:+380955997271" class="link">Call Us</a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.header {
  max-width: 100%;
  height: 75px;
  text-transform: uppercase;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
}
.logo {
  display: flex;
  align-items: center;
  margin-left: -60px;
}
.link {
  color: #000;
  position: relative;
  font-weight: 500;
  font-size: 15px;
}
.link::after {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  height: 2px;
  width: 0;
  background: #000;
  transition: all 0.3s linear;
}
.link:hover::after {
  width: 100%;
}
h1 {
  color: #000;
  letter-spacing: 8px;
  margin-left: 5px;
  user-select: none;
}
.link-left {
  margin-right: 25px;
}
@media (max-width: 768px) {
  .header {
    padding: 0 3px;
    height: 60px;
  }
  h1 {
    font-size: 1.5em;
    letter-spacing: 4px;
  }
  .logo {
    margin-left: 0;
  }
}
@media (max-width: 480px) {
  .links {
    display: flex;
    flex-direction: column;
  }
  .link-left {
    margin: 0 0 5px 0;
  }
  .link {
    font-size: 13px;
  }
  h1 {
    font-size: 1.3em;
    letter-spacing: 2px;
  }
}
</style>