// Интерфейс стратегии оплаты
interface PaymentStrategy {
    pay(amount: number): void;
}

// Конкретные стратегии оплаты
class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Оплата в размере ${amount} долларов выполнена с помощью кредитной карты.`);
    }
}

class PayPalPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Оплата в размере ${amount} долларов выполнена через PayPal.`);
    }
}

class BitcoinPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Оплата в размере ${amount} долларов выполнена с помощью Биткойна.`);
    }
}

// Контекст, использующий стратегию
class Order {
    private paymentStrategy: PaymentStrategy;

    setPaymentStrategy(strategy: PaymentStrategy): void {
        this.paymentStrategy = strategy;
    }

    processPayment(amount: number): void {
        this.paymentStrategy.pay(amount);
    }
}

// Пример использования
const order = new Order();

order.setPaymentStrategy(new CreditCardPayment());
order.processPayment(100);
// Вывод: Оплата в размере 100 долларов выполнена с помощью кредитной карты.

order.setPaymentStrategy(new PayPalPayment());
order.processPayment(50);
// Вывод: Оплата в размере 50 долларов выполнена через PayPal.

order.setPaymentStrategy(new BitcoinPayment());
order.processPayment(75);
// Вывод: Оплата в размере 75 долларов выполнена с помощью Биткойна.
