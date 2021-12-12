<template>
  <div class="footer">
    <div class="footer-content">
      <ul data-aos="zoom-in-right" data-aos-delay="200">
        <li>
          <router-link to="contact" class="link link-left">Contact</router-link>
        </li>
        <li><router-link to="explore" class="link">Explore</router-link></li>
        <li><router-link to="/" class="link">Main</router-link></li>
        <li><a href="">Corporate Sales</a></li>
        <li>
          <a href="https://www.google.com/search?q=covid+19&rlz"
            >COVID-19 Info</a
          >
        </li>
      </ul>
      <div
        class="succes"
        v-if="success"
        data-aos="zoom-in-right"
        data-aos-delay="200"
      >
        <span class="succes-text">Thank you for subscribing!</span>
        <i class="far fa-check-square"></i>
      </div>
      <form
        @submit.prevent
        v-else
        data-aos="zoom-in-right"
        data-aos-delay="200"
      >
        <input
          type="email"
          v-model="email"
          pattern="[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
          placeholder="Your email.."
          minlength="6"
          required
        />
        <Button type="submit" @click="go">Subscribe</Button>
      </form>
      <a href="#header" class="up" data-aos="zoom-in-right" data-aos-delay="200"
        ><i class="fas fa-arrow-up"></i><span class="up-item">UP</span>
        <span class="up-item">GO</span></a
      >
    </div>
    <p class="rights">Created by Vitalii Opaynitch</p>
  </div>
</template>
<script>
import Button from "@/components/UI/Button";
export default {
  components: {
    Button,
  },
  data() {
    return {
      email: "",
      success: false,
    };
  },
  methods: {
    go() {
      if (this.email.length >= 6 && this.email.indexOf("@") > 0) {
        localStorage.email = this.email;
        console.log("Thank you for subscribing to the newsletter");
        this.success = true;
      }
    },
  },
};
</script>
<style scoped>
.footer {
  margin: 40px 0 20px;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
li {
  margin-bottom: 10px;
  transition: 0.3s;
}
li a {
  color: #000;
}
li:hover {
  text-shadow: 3px 3px 11px #000;
  transform: scale(1.2);
}
form {
  width: 35%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.up {
  width: 60px;
  height: 60px;
  border: none;
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
.up-item {
  transform: translateY(-40%);
  transition: 0.2s;
  user-select: none;
}
.fas {
  color: #000;
  transform: translateY(-110%);
  transition: 0.2s;
}
.up:after {
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
.up:hover {
  color: #000;
  box-shadow: 1px 1px 17px 5px #000000ad;
}
.up:hover:after {
  width: 110%;
}
.up:hover .fas,
.up:hover .up-item {
  color: #000;
  transform: translateY(0);
}
.rights {
  text-align: center;
}
.succes {
  font-size: 22px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -15px;
  font-weight: bolder;
}
.fa-check-square {
  margin-left: 7px;
  color: #20b2aa;
  font-size: 30px;
  animation: iconAnim 1s linear infinite;
}
@keyframes iconAnim {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-25%);
  }
  100% {
    transform: translateY(0);
  }
}
@media (max-width: 1100px) {
  form {
    width: 55%;
  }
}
@media (max-width: 768px) {
  .footer {
    padding: 0 14px;
  }
  form {
    width: 60%;
    flex-direction: column;
    justify-content: space-evenly;
  }
  li a {
    font-size: 14px;
  }
}
@media (max-width: 480px) {
  .footer {
    padding: 0 7px;
  }
  .up {
    width: 50px;
    height: 50px;
    font-size: 13px;
  }
  input {
    width: 70%;
    font-size: 15px;
  }
  .succes {
    font-size: 17px;
    margin-left: 0;
  }
  .fa-check-square {
    margin-left: 5px;
    color: #20b2aa;
    font-size: 25px;
  }
}
</style>