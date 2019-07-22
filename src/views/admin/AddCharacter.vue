<template>
  <div class="container mx-auto px-10 pt-10 text-white flex flex-col items-center w-5/12">
    <h3>Add Character</h3>

    <input class="input" v-model="character.name" type="text" placeholder="character name" />
    <input class="input" v-model="character.imageUrl" type="text" placeholder="image url" />
    <h4>Answers</h4>
    <input class="input" v-model="character.answers.option1" type="text" placeholder="Option 1" />
    <input class="input" v-model="character.answers.option2" type="text" placeholder="Option 2" />
    <input class="input" v-model="character.answers.option3" type="text" placeholder="Option 3" />
    <input class="input" v-model="character.answers.option4" type="text" placeholder="Option 4" />
    <button @click="save" class="btn mt-16">Save</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      character: {
        name: "",
        imageUrl: "",
        answers: {
          option1: "",
          option2: "",
          option3: "",
          option4: ""
        }
      }
    };
  },
  methods: {
    save() {
      this.$store
        .dispatch("addCharacter", {
          character: this.character,
          id: this.$route.params.id
        })
        .then(res => {
          if (res)
            this.$router.push({
              name: "AdminShowDetay",
              params: { id: this.$route.params.id }
            });
        });
    }
  }
};
</script>