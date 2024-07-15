// Продукт - Автомобиль
var Car = /** @class */ (function () {
    function Car() {
        this.engine = "";
        this.seats = 0;
        this.tripComputer = false;
        this.GPS = false;
    }
    return Car;
}());
// Конкретный Строитель
var ConcreteCarBuilder = /** @class */ (function () {
    function ConcreteCarBuilder() {
        this.car = new Car();
    }
    ConcreteCarBuilder.prototype.reset = function () {
        this.car = new Car();
    };
    ConcreteCarBuilder.prototype.setEngine = function (engine) {
        this.car.engine = engine;
    };
    ConcreteCarBuilder.prototype.setSeats = function (seats) {
        this.car.seats = seats;
    };
    ConcreteCarBuilder.prototype.setTripComputer = function (tripComputer) {
        this.car.tripComputer = tripComputer;
    };
    ConcreteCarBuilder.prototype.setGPS = function (GPS) {
        this.car.GPS = GPS;
    };
    ConcreteCarBuilder.prototype.getResult = function () {
        return this.car;
    };
    return ConcreteCarBuilder;
}());
// Директор
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    Director.prototype.constructSportsCar = function () {
        this.builder.reset();
        this.builder.setEngine("V8");
        this.builder.setSeats(2);
        this.builder.setTripComputer(true);
        this.builder.setGPS(true);
    };
    Director.prototype.constructSUV = function () {
        this.builder.reset();
        this.builder.setEngine("V6");
        this.builder.setSeats(5);
        this.builder.setTripComputer(true);
        this.builder.setGPS(true);
    };
    return Director;
}());
// Пример использования
var director = new Director();
var builder = new ConcreteCarBuilder();
director.setBuilder(builder);
// Построение спортивного автомобиля
director.constructSportsCar();
var sportsCar = builder.getResult();
console.log("Sports Car built:", sportsCar);
// Построение внедорожника
director.constructSUV();
var suv = builder.getResult();
console.log("SUV built:", suv);
