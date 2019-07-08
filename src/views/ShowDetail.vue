<template>
  <div>
    <div
      class="h-screen"
      :style="{'background': `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url(${show.bg})`}"
    >
      <transition name="result" enter-active-class="animated fadeInDown">
        <div class="flex flex-col justify-center items-center" v-if="showResult">
          <div class="result">
            <h4>4</h4>
            <p>Out Of 20</p>
          </div>
          <div class="mt-10">
            <button class="text-white resultBtn" v-if="showResult">Look other shows</button>
          </div>
        </div>
      </transition>
      <transition
        name="content"
        enter-active-class="animated fadeInLeft"
        leave-active-class="animated fadeOutRight"
      >
        <div class="pt-16 flex justify-center items-center flex-col" v-if="showContent">
          <div class="img-wrapper">
            <img :src="character.img" class="w-full h-full object-cover" alt />
          </div>
          <div class="mt-8 answers">
            <button
              v-for="(answer,idx) in character.answers"
              :key="idx"
              class="btn-answer"
              :class="{trueClass: (idx == clickedAnswer) && isAnswer, wrongClass: (idx == clickedAnswer) && !isAnswer}"
              @click="checkAnswer(answer, character.name, idx)"
            >{{answer}}</button>
          </div>
        </div>
      </transition>
      <transition name="status" enter-active-class="animated fadeInLeft">
        <div class="flex items-center justify-center mt-8" v-if="showStatus">
          <div
            v-for="(n, idx) in show.characters"
            :key="idx"
            class="bg-gray-600 w-6 h-1 rounded-sm ml-1"
            :class="{makeGreen:idx<counter}"
          ></div>
        </div>
      </transition>
      <transition name="button" leave-active-class="animated fadeOutDown">
        <button class="btn" @click="start(show.music)" v-if="!deleteStartButton">LET'S START</button>
      </transition>
    </div>
  </div>
</template>

<script>
import { shows } from "@/dummy";
import { setTimeout } from "timers";
let audio = "";

export default {
  data() {
    return {
      show: "",
      character: "",
      isAnswer: null,
      clickedAnswer: null,
      deleteStartButton: false,
      showContent: false,
      showStatus: false,
      counter: 0,
      showResult: false
    };
  },
  methods: {
    isQuizFinished() {
      if (this.counter == this.show.characters.length) return true;
      else return false;
    },
    checkAnswer(answer, trueAnswer, idx) {
      this.clickedAnswer = idx;

      if (answer === trueAnswer) {
        this.isAnswer = true;
        this.counter++;
      } else {
        this.isAnswer = false;
        this.counter++;
      }

      if (this.isQuizFinished()) {
        console.log("bitti");

        setTimeout(() => {
          this.showContent = false;
          this.showStatus = false;
        }, 1500);

        setTimeout(() => {
          this.showResult = true;
        }, 2000);
      } else {
        setTimeout(() => {
          this.showContent = false;
          this.setCharacter();
          this.isAnswer = null;
          this.clickedAnswer = null;
        }, 1000);

        setTimeout(() => {
          this.showContent = true;
        }, 1500);
      }
    },
    setCharacter() {
      this.character = this.show.characters[this.counter];
    },

    start(music) {
      this.deleteStartButton = true;
      this.showContent = true;
      this.showStatus = true;
      audio = new Audio(music);
      audio.loop = true;
      audio.volume = 0.2;
      audio.play();
    }
  },
  created() {
    if (shows) {
      this.show = shows[this.$route.params.id - 1];
      this.setCharacter();
    }
  },
  destroyed() {
    audio.pause();
  }
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css";

.trueClass {
  background-color: #2ecc71;
}

.wrongClass {
  background-color: #e74c3c;
}

.makeGreen {
  background-color: #2ecc71;
}
</style>


