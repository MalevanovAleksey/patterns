var CoffeeOrder = /** @class */ (function () {
    function CoffeeOrder(flavor, tableNumber) {
        this.flavor = flavor;
        this.tableNumber = tableNumber;
    }
    CoffeeOrder.prototype.getFlavor = function () {
        return this.flavor;
    };
    CoffeeOrder.prototype.getTableNumber = function () {
        return this.tableNumber;
    };
    return CoffeeOrder;
}());
//  предотвращения создания дубликатов заказов.
var CoffeeOrderContext = /** @class */ (function () {
    function CoffeeOrderContext() {
        this.orders = new Map();
    }
    CoffeeOrderContext.prototype.getOrder = function (flavor, tableNumber) {
        var key = "".concat(flavor, "-").concat(tableNumber);
        if (!this.orders.has(key)) {
            this.orders.set(key, new CoffeeOrder(flavor, tableNumber));
        }
        return this.orders.get(key);
    };
    CoffeeOrderContext.prototype.getTotalCoffeeOrdersMade = function () {
        return this.orders.size;
    };
    return CoffeeOrderContext;
}());
// Пример использования
var context = new CoffeeOrderContext();
var order1 = context.getOrder("Latte", 2);
var order2 = context.getOrder("Espresso", 1);
var order3 = context.getOrder("Latte", 2); // Тот же заказ, что и order1
console.log(context.getTotalCoffeeOrdersMade()); // Выведет 2, так как два уникальных заказа
