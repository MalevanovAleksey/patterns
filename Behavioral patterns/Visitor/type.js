var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.accept = function (visitor) {
        visitor.visitAnimal(this);
    };
    return Animal;
}());
var Pavilion = /** @class */ (function () {
    function Pavilion(name) {
        this.name = name;
    }
    Pavilion.prototype.accept = function (visitor) {
        visitor.visitPavilion(this);
    };
    return Pavilion;
}());
var Attraction = /** @class */ (function () {
    function Attraction(name) {
        this.name = name;
    }
    Attraction.prototype.accept = function (visitor) {
        visitor.visitAttraction(this);
    };
    return Attraction;
}());
var ZooVisitor = /** @class */ (function () {
    function ZooVisitor() {
        this.visitedAnimals = [];
        this.visitedPavilions = [];
        this.visitedAttractions = [];
    }
    ZooVisitor.prototype.visitAnimal = function (animal) {
        console.log("\u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u044C \u043F\u043E\u0441\u0435\u0442\u0438\u043B \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435 ".concat(animal.name));
        this.visitedAnimals.push(animal);
    };
    ZooVisitor.prototype.visitPavilion = function (pavilion) {
        console.log("\u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u044C \u043F\u043E\u0441\u0435\u0442\u0438\u043B \u043F\u0430\u0432\u0438\u043B\u044C\u043E\u043D ".concat(pavilion.name));
        this.visitedPavilions.push(pavilion);
    };
    ZooVisitor.prototype.visitAttraction = function (attraction) {
        console.log("\u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u044C \u043F\u043E\u0441\u0435\u0442\u0438\u043B \u0430\u0442\u0442\u0440\u0430\u043A\u0446\u0438\u043E\u043D ".concat(attraction.name));
        this.visitedAttractions.push(attraction);
    };
    ZooVisitor.prototype.getVisitedElements = function () {
        console.log("Посетитель посетил следующие элементы зоопарка:");
        console.log("Животные:", this.visitedAnimals.map(function (a) { return a.name; }));
        console.log("Павильоны:", this.visitedPavilions.map(function (p) { return p.name; }));
        console.log("Аттракционы:", this.visitedAttractions.map(function (a) { return a.name; }));
    };
    return ZooVisitor;
}());
var lion = new Animal("Лев");
var tiger = new Animal("Тигр");
var elephantPavilion = new Pavilion("Павильон слонов");
var rollerCoaster = new Attraction("Американские горки");
var visitor = new ZooVisitor();
lion.accept(visitor);
tiger.accept(visitor);
elephantPavilion.accept(visitor);
rollerCoaster.accept(visitor);
visitor.getVisitedElements();
