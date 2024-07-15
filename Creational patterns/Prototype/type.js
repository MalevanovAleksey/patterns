//   Car_1 чтобы не было дубликата от строителя
var Car_1 = /** @class */ (function () {
    function Car_1(model, color, engine) {
        this.model = model;
        this.color = color;
        this.engine = engine;
    }
    Car_1.prototype.clone = function () {
        var clone = Object.create(this);
        return clone;
    };
    Car_1.prototype.display = function () {
        console.log("Model: ".concat(this.model, ", Color: ").concat(this.color, ", Engine: ").concat(this.engine));
    };
    return Car_1;
}());
// Пример использования
// Создаем оригинальный автомобиль
var originalCar = new Car_1("Tesla Model S", "Red", "Electric");
// Клонируем автомобиль
var clonedCar = originalCar.clone();
// Изменяем цвет клонированного автомобиля
clonedCar.color = "Blue";
// Отображаем информацию об автомобилях
console.log("Original Car:");
originalCar.display();
console.log("Cloned Car:");
clonedCar.display();
