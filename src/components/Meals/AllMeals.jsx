import { Fragment } from "react";
import MealsAvailable from "./MealsAvailable";
import MealSummary from "./MealSummary";

const AllMeals = ()=>{
        return(
                <Fragment>
                        <MealSummary/>
                        <MealsAvailable/>
                </Fragment>
        )
}

export default AllMeals