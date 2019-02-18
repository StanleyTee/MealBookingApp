import MealService from '../services/meal.service';
import bodyParser from 

const MealController = {
    fetchAllMeals(req,res) {
        return res.json({
            status:'success',
            data:allMeals
        }).status(200);
    },
    addAMeal(req,res) {
        /*
        json format
        {
            name:"food-name",
            plate:1
            "price":500
        }
        */
        const newMeal = req.body;
        return createdMeal = MealService.addMeal(newMeal);
        return res.json({
            status:'success',
            data: createdMeal
        }).status(201);
    },
    getSingleMeal(req,res){
        const id = req.params.id;
        const foundMeal = MealService.getAMeal(id);
        return res.json({
            status:'success',
            data: createdMeal
        }).status(201);
    }
};

export default MealController;

