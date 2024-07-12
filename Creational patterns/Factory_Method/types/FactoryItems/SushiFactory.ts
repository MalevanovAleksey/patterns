import Food from "../Food";
import FoodFactory from "../FoodFactory";
import Sushi from "../FoodItems/Suishi";


class SushiFactory extends FoodFactory {
    createFood(): Food {
        return new Sushi();
    }
}

export default SushiFactory