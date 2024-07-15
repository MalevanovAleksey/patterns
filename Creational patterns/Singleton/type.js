var Singleton = /** @class */ (function () {
    // Приватный конструктор предотвращает создание экземпляров через `new`
    function Singleton() {
    }
    // Метод для получения единственного экземпляра
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.someBusinessLogic = function () {
        console.log("Executing business logic in Singleton instance.");
    };
    return Singleton;
}());
// Получаем единственный экземпляр класса
var singleton1 = Singleton.getInstance();
var singleton2 = Singleton.getInstance();
// Проверяем, что оба экземпляра одинаковы
console.log(singleton1 === singleton2); // true
// Используем метод Singleton
singleton1.someBusinessLogic();
