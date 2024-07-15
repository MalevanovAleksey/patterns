var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Основной класс, который реализует интерфейс CoffeeMaker
var BasicCoffeeMaker = /** @class */ (function () {
    function BasicCoffeeMaker() {
    }
    BasicCoffeeMaker.prototype.makeCoffee = function () {
        console.log("Making coffee");
    };
    return BasicCoffeeMaker;
}());
// Базовый декоратор, который можно использовать для всех дополнений
var CoffeeDecorator = /** @class */ (function () {
    function CoffeeDecorator(coffeeMaker) {
        this.decoratedCoffeeMaker = coffeeMaker;
    }
    CoffeeDecorator.prototype.makeCoffee = function () {
        this.decoratedCoffeeMaker.makeCoffee();
    };
    return CoffeeDecorator;
}());
// Конкретные декораторы
var MilkDecorator = /** @class */ (function (_super) {
    __extends(MilkDecorator, _super);
    function MilkDecorator(coffeeMaker) {
        return _super.call(this, coffeeMaker) || this;
    }
    MilkDecorator.prototype.makeCoffee = function () {
        _super.prototype.makeCoffee.call(this);
        this.addMilk();
    };
    MilkDecorator.prototype.addMilk = function () {
        console.log("Adding milk");
    };
    return MilkDecorator;
}(CoffeeDecorator));
var SugarDecorator = /** @class */ (function (_super) {
    __extends(SugarDecorator, _super);
    function SugarDecorator(coffeeMaker) {
        return _super.call(this, coffeeMaker) || this;
    }
    SugarDecorator.prototype.makeCoffee = function () {
        _super.prototype.makeCoffee.call(this);
        this.addSugar();
    };
    SugarDecorator.prototype.addSugar = function () {
        console.log("Adding sugar");
    };
    return SugarDecorator;
}(CoffeeDecorator));
// Использование декораторов
var coffee = new BasicCoffeeMaker();
console.log("Basic coffee:");
coffee.makeCoffee();
console.log("\nCoffee with milk:");
coffee = new MilkDecorator(coffee);
coffee.makeCoffee();
console.log("\nCoffee with sugar:");
coffee = new SugarDecorator(coffee);
coffee.makeCoffee();
