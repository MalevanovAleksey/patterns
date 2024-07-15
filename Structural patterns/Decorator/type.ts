// Интерфейс для базового класса и декораторов
interface CoffeeMaker {
    makeCoffee(): void;
}

// Основной класс, который реализует интерфейс CoffeeMaker
class BasicCoffeeMaker implements CoffeeMaker {
    makeCoffee() {
        console.log("Making coffee");
    }
}

// Базовый декоратор, который можно использовать для всех дополнений
abstract class CoffeeDecorator implements CoffeeMaker {
    protected decoratedCoffeeMaker: CoffeeMaker;

    constructor(coffeeMaker: CoffeeMaker) {
        this.decoratedCoffeeMaker = coffeeMaker;
    }

    makeCoffee() {
        this.decoratedCoffeeMaker.makeCoffee();
    }
}

// Конкретные декораторы

class MilkDecorator extends CoffeeDecorator {
    constructor(coffeeMaker: CoffeeMaker) {
        super(coffeeMaker);
    }

    makeCoffee() {
        super.makeCoffee();
        this.addMilk();
    }

    private addMilk() {
        console.log("Adding milk");
    }
}

class SugarDecorator extends CoffeeDecorator {
    constructor(coffeeMaker: CoffeeMaker) {
        super(coffeeMaker);
    }

    makeCoffee() {
        super.makeCoffee();
        this.addSugar();
    }

    private addSugar() {
        console.log("Adding sugar");
    }
}

// Использование декораторов
let coffee: CoffeeMaker = new BasicCoffeeMaker();
console.log("Basic coffee:");
coffee.makeCoffee();

console.log("\nCoffee with milk:");
coffee = new MilkDecorator(coffee);
coffee.makeCoffee();

console.log("\nCoffee with sugar:");
coffee = new SugarDecorator(coffee);
coffee.makeCoffee();
