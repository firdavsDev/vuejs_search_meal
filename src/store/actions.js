import MealsService from "../services/MealsService";

export async function searchMeals({ commit }, name) {
  const data = await MealsService.searchByName(name);
  commit("setMeals", data.meals);
}

export async function getMealsByLetter({ commit }, letter) {
  const data = await MealsService.searchByLetter(letter);
  commit("setLetterMeals", data.meals);
}
