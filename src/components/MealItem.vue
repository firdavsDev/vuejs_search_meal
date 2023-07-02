<template lang="">
  <div class="bg-white shadow rounded-xl gap-2 p-4">
    <router-link :to="{ name: 'MealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="w-full h-48 rounded-t-xl object-cover hover:opacity-75 transition-opacity duration-300"
      />
    </router-link>
    <h2 class="text-xl font-bold text-center">{{ meal.strMeal }}</h2>
    <p class="pb-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi
      quae velit itaque dignissimos distinctio repellendus hic molestias est
      praesentium reprehenderit veritatis, quo quisquam voluptas sint esse atque
      exercitationem officia!
    </p>
    <div class="flex items-center justify-between">
      <YouTubeButton :href="meal.strYoutube"> Watch on YouTube </YouTubeButton>
    </div>
  </div>
</template>
<script>
import YouTubeButton from "../components/YouTubeButton.vue";

export default {
  name: "MealItem",
  props: {
    meal: {
      type: Object,
      required: true,
      default: () => {},
    },
  },

  components: {
    YouTubeButton,
  },
};
</script>
<style lang=""></style>
