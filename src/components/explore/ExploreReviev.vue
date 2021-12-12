<template>
  <div class="revievs">
    <h5 class="title" data-aos="zoom-in-right" data-aos-delay="200">
      Add your feedback
    </h5>
    <span class="like" data-aos="zoom-in-right" data-aos-delay="200"
      >Number of people who liked our company <strong>{{ likes }}</strong>
      <i
        class="far fa-thumbs-up"
        @click="addLike"
        :class="{ green: clicked }"
      ></i>
    </span>
    <form
      class="form"
      @submit.prevent
      data-aos="zoom-in-right"
      data-aos-delay="200"
    >
      <input
        v-bind:value="name"
        @input="name = $event.target.value"
        type="text"
        class="input"
        placeholder="Enter your name.."
        required
        minlength="3"
      />
      <input
        v-bind:value="body"
        @input="body = $event.target.value"
        type="text"
        class="input"
        placeholder="Your opinion.."
        required
        minlength="8"
      />
      <Button class="btn" @click="add">Add</Button>
    </form>
    <div
      class="reviev"
      v-for="rev in revievs"
      data-aos="zoom-in-right"
      data-aos-delay="200"
    >
      <div class="reviev-item">
        <p class="reviev-name">{{ rev.name }}</p>
        <p class="reviev-text">say: {{ rev.body }}</p>
      </div>
    </div>
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
      likes: 32,
      clicked: false,
      revievs: [
        { id: 1, name: "Mario Pancetti", body: "Great company, I recommend!" },
        {
          id: 2,
          name: "Ulfrid Larsson",
          body: "I liked that the company uses quality materials.",
        },
        {
          id: 3,
          name: "Florin Petrecsu",
          body: "I was looking for an idea for a gift for my wife and found it here.",
        },
      ],
      name: "",
      body: "",
    };
  },
  methods: {
    add() {
      const newReviev = {
        name: this.name,
        body: this.body,
      };
      if (this.name.length >= 3 && this.body.length >= 8) {
        this.revievs.push(newReviev);
        this.name = "";
        this.body = "";
      }
    },
    addLike() {
      if (this.likes < 33) {
        this.likes += 1;
        this.clicked = true;
      } else {
        this.likes -= 1;
        this.clicked = false;
      }
    },
  },
};
</script>

<style scoped>
.revievs {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 20px 0;
}
.revievs::before {
  content: "";
  position: absolute;
  top: 10px;
  left: 0;
  height: 2px;
  width: 100%;
  background: #000;
}
.reviev {
  padding: 10px;
  border: 2px solid #000;
  width: 55%;
  height: auto;
  margin: 10px 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.reviev-item {
  width: 100%;
}
.like {
  margin: 25px 15px;
  font-size: 20px;
  user-select: none;
  text-align: center;
}
.far {
  font-size: 30px;
  margin-left: 5px;
  cursor: pointer;
  transition: 0.3s;
}
.far:hover {
  color: #20b2aa;
}
.green {
  color: #20b2aa;
}
.reviev-name {
  font-style: italic;
  font-size: 18px;
  letter-spacing: 1px;
}
.form {
  width: 55%;
  display: flex;
  justify-content: space-between;
}
.title {
  margin: 40px 0 20px;
  font-size: 30px;
  font-weight: normal;
  user-select: none;
}
@media (max-width: 1100px) {
  .form {
    width: 80%;
  }
  .reviev {
    width: 80%;
  }
}
@media (max-width: 768px) {
  .reviev {
    width: 100%;
    padding: 5px;
  }
  .form {
    width: 100%;
    padding: 0 10px;
  }
  .input {
    font-size: 15px;
    width: 30%;
  }
}
@media (max-width: 480px) {
  .title {
    margin: 20px 0 10px;
    font-size: 25px;
  }
  .like {
    margin: 20px 10px;
    font-size: 15px;
  }
  .form {
    flex-direction: column;
    align-items: center;
  }
  .input {
    margin-bottom: 10px;
    width: 100%;
  }
}
</style>