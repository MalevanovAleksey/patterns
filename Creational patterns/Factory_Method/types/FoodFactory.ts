import Food from "./Food";

abstract class FoodFactory {
    abstract createFood(): Food;
}
export default FoodFactory;