import http from "./index.js";

const MealService = {
  mealsList: () => {
    return new Promise((resolve, reject) => {
      http
        .get("/list.php?i=list")
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  searchByName: (name) => {
    return new Promise((resolve, reject) => {
      http
        .get(`/search.php?s=${name}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getMealById: (id) => {
    return new Promise((resolve, reject) => {
      http
        .get(`/lookup.php?i=${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  searchByLetter: (letter) => {
    return new Promise((resolve, reject) => {
      http
        .get(`/search.php?f=${letter}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default MealService;
