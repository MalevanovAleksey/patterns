// Конкретные реализации фабрики
var ToyotaFactory = /** @class */ (function () {
    function ToyotaFactory() {
    }
    ToyotaFactory.prototype.createCarr = function () {
        return new Toyota();
    };
    return ToyotaFactory;
}());
var FordFactory = /** @class */ (function () {
    function FordFactory() {
    }
    FordFactory.prototype.createCarr = function () {
        return new Ford();
    };
    return FordFactory;
}());
// Конкретные реализации продукта
var Toyota = /** @class */ (function () {
    function Toyota() {
    }
    Toyota.prototype.drive = function () {
        console.log("Driving a Toyota");
    };
    return Toyota;
}());
var Ford = /** @class */ (function () {
    function Ford() {
    }
    Ford.prototype.drive = function () {
        console.log("Driving a Ford");
    };
    return Ford;
}());
// Клиентский код
var toyotaFactory = new ToyotaFactory();
var fordFactory = new FordFactory();
var toyotaCarr = toyotaFactory.createCarr();
var fordCarr = fordFactory.createCarr();
toyotaCarr.drive(); // Output: Driving a Toyota
fordCarr.drive(); // Output: Driving a Ford
