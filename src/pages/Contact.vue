<template>
  <Snakke />
  <div class="header" id="header">
    <div class="links">
      <router-link to="/" class="link">Back to home</router-link>
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
      <h1 class="logo-title">
        Grovemade <span class="logo-text">- beauty is conciseness</span>
      </h1>
    </div>
  </div>
  <div class="animation-logo" id="fon">
    <svg
      width="50"
      height="47"
      viewBox="0 0 21 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5413 16.5565V16.4087C11.5413 16.5565 9.93426 12.4174 9.34989 11.8261C8.03506 10.4956 6.57414 10.6435 5.5515 10.6435H0.584368C0.292184 10.6435 0 10.7913 0 11.087V11.2348C0 11.2348 1.60701 15.3739 2.19138 15.8174C3.36012 17 4.38276 17 5.98977 17H11.103C11.3952 17 11.5413 16.8522 11.5413 16.5565Z"
        fill="#ffffff"
      />
      <path
        d="M20.0146 11.3826C20.0146 8.27826 16.8006 1.47826 16.3623 0.295652C16.3623 0.147826 16.2162 0 15.924 0C15.778 0 15.4858 0.147826 15.4858 0.295652C13.2944 5.46957 11.6874 9.31304 11.6874 9.31304C11.5413 9.75652 11.3952 10.2 11.5413 10.6435C11.6874 11.087 12.5639 12.8609 13.1483 14.3391C14.0249 16.4087 14.1709 17 16.0701 17C18.4076 17 20.0146 14.9304 20.0146 11.3826Z"
        fill="#ffffff"
      />
    </svg>
    <h2>Grovemade</h2>
  </div>
  <ContactSocial />
  <ContactMap />
  <SectionFooter />
</template>
<script>
import Snakke from "@/components/UI/Snakke";
import ContactSocial from "@/components/contact/ContactSocial";
import ContactMap from "@/components/contact/ContactMap";
import SectionFooter from "@/components/SectionFooter";
export default {
  components: {
    Snakke,
    ContactSocial,
    ContactMap,
    SectionFooter,
  },
};
</script>
<style scoped>
.header {
  padding: 30px 30px 0 30px;
  display: flex;
  justify-content: space-between;
}
.logo {
  user-select: none;
  display: flex;
  align-items: center;
}
.logo-title {
  margin-left: 10px;
}
.logo-text {
  font-size: 25px;
}
.link {
  color: #000;
  position: relative;
  font-weight: 500;
  text-transform: uppercase;
}
.link::after {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  height: 3px;
  width: 0;
  background: #000;
  transition: all 0.3s linear;
}
.link:hover::after {
  width: 100%;
}
.links {
  display: flex;
  align-items: center;
}
.animation-logo {
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  user-select: none;
  color: #fff;
}
h2 {
  margin-left: 10px;
  text-align: center;
}
@keyframes animatedBackground {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -800px 800px;
  }
}
#fon {
  height: 200px;
  width: 100%;
  background-image: url("../svg/Meteor.svg");
  background-position: center center;
  background-size: cover;
  animation: animatedBackground 30s linear infinite;
}
@media (max-width: 768px) {
  .header {
    padding: 15px 5px 0 5px;
  }
  .logo-text {
    font-size: 20px;
  }
  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.1em;
  }
  .link {
    font-size: 15px;
  }
}
@media (max-width: 480px) {
  .header {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 1.3em;
    text-align: center;
    margin-top: 10px;
  }
  .link {
    align-items: flex-end;
  }
}
</style>