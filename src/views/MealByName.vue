<template lang="">
  <h1 class="text-4xl font-bold m-4 text-orange-500">Search by Name</h1>

  <div class="p-7 pb-0">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search"
      v-model="keyword"
      @keyup.enter="searchByName"
    />
  </div>

  <div
    v-if="!meals"
    class="flex flex-col items-center justify-center gap-2 p-4"
  >
    <h2 class="text-2xl font-bold">No meals found</h2>
    <p class="text-xl">Try another keyword</p>

    <router-link to="/" class="text-xl underline"> Back to home </router-link>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem :meal="meal" v-for="meal in meals" :key="meal.idMeal" />
  </div>
</template>
<script>
import MealItem from "../components/MealItem.vue";
export default {
  name: "MealByName",

  data() {
    return {
      keyword: "",
    };
  },

  components: {
    MealItem,
  },
  methods: {
    searchByName() {
      // update the route
      this.$router.push({ name: "byName", params: { name: this.keyword } });
      return this.$store.dispatch("searchMeals", this.keyword);
    },
  },

  computed: {
    meals() {
      return this.$store.state.meals;
    },
  },

  mounted() {
    this.keyword = this.$route.params.name;
    if (this.keyword) {
      this.searchByName();
    }
  },
};
</script>
<style lang=""></style>
