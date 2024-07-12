import Food from "../Food";
import FoodFactory from "../FoodFactory";
import Pizza from "../FoodItems/Pizza";

class PizzaFactory extends FoodFactory {
    createFood(): Food {
        return new Pizza();
    }
}

export default PizzaFactory