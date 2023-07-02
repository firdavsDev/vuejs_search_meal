<template lang="">
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-3xl font-bold text-center mb-5">
      {{ meal.strMeal }}
    </h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]" />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div><strong class="font-bold">Tag:</strong> {{ meal.strTags }}</div>
      <div>
        <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area:</strong> {{ meal.strArea }}</div>
    </div>

    <div class="pt-8">
      <h2 class="font-bold">Instructions</h2>
      <p>{{ meal.strInstructions }}</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 pt-8">
      <div>
        <h2 class="font-bold">Ingridients:</h2>
        <ul>
          <li v-for="i in 20" :key="i">
            <div v-if="meal[`strIngredient${i}`]">
              <strong>{{ meal[`strIngredient${i}`] }}</strong> -
              {{ meal[`strMeasure${i}`] }}
            </div>
          </li>
        </ul>
      </div>

      <div class="mt-4">
        <h2 class="font-bold">Measures:</h2>
        <ul>
          <li v-for="i in 20" :key="i">
            <div v-if="meal[`strMeasure${i}`]">
              <strong>{{ meal[`strMeasure${i}`] }}</strong>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="flex items-center justify-between pt-8">
      <YouTubeButton :href="meal.strYoutube"> Watch on YouTube </YouTubeButton>
    </div>
  </div>
</template>
<script>
import MealsService from "../services/MealsService";
import YouTubeButton from "../components/YouTubeButton.vue";
export default {
  name: "MealDetail",
  data() {
    return {
      meal: {},
    };
  },

  components: {
    YouTubeButton,
  },

  created() {
    MealsService.getMealById(this.$route.params.id)
      .then((data) => {
        this.meal = data.meals[0] || {};
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style lang=""></style>
