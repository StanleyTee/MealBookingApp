import mealsData from '../utilities/mealsData';
import Meal from '../models/meal.model';

const mealService = {
    fetchAllMeals(){

        const validMeals = mealsData.map((meal) => {
            const newMeal = new Meal();
            newMeal.id = meal.id;
            newMeal.name = meal.name;
            newMeal.plate = meal.plate;
            newMeal.prize = meal.price;

        });
        return validMeals;
    },

    addMeal(meal){
        const mealLength = mealsData.meals.length;
        const lastId = mealsData.meals[mealLength - 1].id;
        const newId = lastId + 1;
        meal.id = newId;
        mealsData.meals.push(meal);
        return meal;
    },

    getAMeal(id){
        const meal = dummyData.meals.find(meal => meal.id = id);
        return meal || {};
    }


}

export default mealService;