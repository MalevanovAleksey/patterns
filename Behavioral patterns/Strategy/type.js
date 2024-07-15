// Конкретные стратегии оплаты
var CreditCardPayment = /** @class */ (function () {
    function CreditCardPayment() {
    }
    CreditCardPayment.prototype.pay = function (amount) {
        console.log("\u041E\u043F\u043B\u0430\u0442\u0430 \u0432 \u0440\u0430\u0437\u043C\u0435\u0440\u0435 ".concat(amount, " \u0434\u043E\u043B\u043B\u0430\u0440\u043E\u0432 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u0440\u0435\u0434\u0438\u0442\u043D\u043E\u0439 \u043A\u0430\u0440\u0442\u044B."));
    };
    return CreditCardPayment;
}());
var PayPalPayment = /** @class */ (function () {
    function PayPalPayment() {
    }
    PayPalPayment.prototype.pay = function (amount) {
        console.log("\u041E\u043F\u043B\u0430\u0442\u0430 \u0432 \u0440\u0430\u0437\u043C\u0435\u0440\u0435 ".concat(amount, " \u0434\u043E\u043B\u043B\u0430\u0440\u043E\u0432 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430 \u0447\u0435\u0440\u0435\u0437 PayPal."));
    };
    return PayPalPayment;
}());
var BitcoinPayment = /** @class */ (function () {
    function BitcoinPayment() {
    }
    BitcoinPayment.prototype.pay = function (amount) {
        console.log("\u041E\u043F\u043B\u0430\u0442\u0430 \u0432 \u0440\u0430\u0437\u043C\u0435\u0440\u0435 ".concat(amount, " \u0434\u043E\u043B\u043B\u0430\u0440\u043E\u0432 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0411\u0438\u0442\u043A\u043E\u0439\u043D\u0430."));
    };
    return BitcoinPayment;
}());
// Контекст, использующий стратегию
var Order = /** @class */ (function () {
    function Order() {
    }
    Order.prototype.setPaymentStrategy = function (strategy) {
        this.paymentStrategy = strategy;
    };
    Order.prototype.processPayment = function (amount) {
        this.paymentStrategy.pay(amount);
    };
    return Order;
}());
// Пример использования
var order = new Order();
order.setPaymentStrategy(new CreditCardPayment());
order.processPayment(100);
// Вывод: Оплата в размере 100 долларов выполнена с помощью кредитной карты.
order.setPaymentStrategy(new PayPalPayment());
order.processPayment(50);
// Вывод: Оплата в размере 50 долларов выполнена через PayPal.
order.setPaymentStrategy(new BitcoinPayment());
order.processPayment(75);
// Вывод: Оплата в размере 75 долларов выполнена с помощью Биткойна.
