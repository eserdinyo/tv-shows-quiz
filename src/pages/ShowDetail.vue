<template>
  <div>
    <div
      class="h-screen"
      :style="{'background-image': `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url(${show.bgImage})`, 'background-size': 'cover'}"
    >
      <transition name="result" enter-active-class="animated fadeInDown">
        <div class="flex flex-col justify-center items-center" v-if="showResult">
          <div class="result">
            <h4>{{trueCount}}</h4>
            <p>Out Of {{characters.length}}</p>
          </div>
          <div class="mt-10">
            <router-link to="/" class="text-white resultBtn" v-if="showResult">Look other shows</router-link>
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
            <img :src="character.imageUrl" class="w-full h-full object-cover" alt />
          </div>
          <div class="mt-8 answers">
            <button
              v-for="(answer,idx) in answers"
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
            v-for="(n, idx) in characters"
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
import { mapState, mapMutations } from "vuex";

let audio = "";

export default {
  data() {
    return {
      answers: [],
      character: {},
      characters: [],

      isAnswer: null,
      clickedAnswer: null,
      deleteStartButton: false,
      showContent: false,
      showStatus: false,
      counter: 0,
      showResult: false,
      trueCount: 0
    };
  },
  computed: {
    ...mapState(["show"])
  },
  methods: {
    ...mapMutations(['CLEAR_BG_IMAGE']),
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    },
    isQuizFinished() {
      if (this.counter == this.show.characters.length) return true;
      else return false;
    },
    checkAnswer(answer, trueAnswer, idx) {
      this.clickedAnswer = idx;

      if (answer === trueAnswer) {
        this.isAnswer = true;
        this.counter++;
        this.trueCount += 1;
      } else {
        this.isAnswer = false;
        this.counter++;
      }

      if (this.isQuizFinished()) {
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
      this.character = this.characters[this.counter];
      this.answers = this.shuffle(Object.values(this.character.answers));
    },
    start(music) {
      this.deleteStartButton = true;
      this.showContent = true;
      this.showStatus = true;
      audio = new Audio(music);
      audio.loop = true;
      audio.volume = 0.5;
      audio.play();
    }
  },
  created() {
    this.$store.dispatch("getOneShow", this.$route.params.id).then(res => {
      this.characters = this.shuffle(this.show.characters);
      this.setCharacter();
    });
  },
  mounted() {},
  destroyed() {
    if (audio) {
      audio.pause();
    }
    this.CLEAR_BG_IMAGE();
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


