<template lang="">
  <div class="flex justify-center gap-2 mt-2">
    <router-link
      v-for="letter in letters"
      :key="letter"
      :to="{ name: 'byLetter', params: { letter } }"
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
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
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
