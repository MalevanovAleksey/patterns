class CoffeeOrder {
    constructor(private flavor: string, private tableNumber: number) {}

    getFlavor() {
        return this.flavor;
    }

    getTableNumber() {
        return this.tableNumber;
    }
}
//  предотвращения создания дубликатов заказов.
class CoffeeOrderContext {
    private orders: Map<string, CoffeeOrder> = new Map();

    getOrder(flavor: string, tableNumber: number) {
        const key = `${flavor}-${tableNumber}`;
        if (!this.orders.has(key)) {
            this.orders.set(key, new CoffeeOrder(flavor, tableNumber));
        }
        return this.orders.get(key);
    }

    getTotalCoffeeOrdersMade() {
        return this.orders.size;
    }
}

// Пример использования

const context = new CoffeeOrderContext();
const order1 = context.getOrder("Latte", 2);
const order2 = context.getOrder("Espresso", 1);
const order3 = context.getOrder("Latte", 2); // Тот же заказ, что и order1

console.log(context.getTotalCoffeeOrdersMade()); // Выведет 2, так как два уникальных заказа
