<template lang="">
  <h1 class="text-4xl font-bold m-4 text-orange-500">Search by letter</h1>
  <div class="flex flex-wrap justify-center gap-3 p-8 mb-6">
    <router-link
      v-for="letter in letters"
      :key="letter"
      :to="{ name: 'byLetter', params: { letter } }"
      class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
    >
      {{ letter }}
    </router-link>
  </div>

  <div
    v-if="!meals"
    class="flex flex-col items-center justify-center gap-2 p-4"
  >
    <h2 class="text-2xl font-bold">No meals found :)</h2>
    <p class="text-xl">Try another letter!</p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-7">
    <MealItem :meal="meal" v-for="meal in meals" :key="meal.idMeal" />
  </div>
</template>
<script>
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
import MealItem from "../components/MealItem.vue";

export default {
  name: "MealByLetter",

  components: {
    MealItem,
  },
  data() {
    return {
      letters,
    };
  },

  computed: {
    meals() {
      return this.$store.state.letterMeals;
    },
  },

  watch: {
    $route(to) {
      this.$store.dispatch("getMealsByLetter", to.params.letter);
    },
  },
};
</script>
<style lang=""></style>
