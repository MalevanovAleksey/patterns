// Абстрактный интерфейс продукта
interface Carr {
    drive(): void;
}

// Конкретные реализации продукта
class Toyota implements Carr {
    drive(): void {
        console.log("Driving a Toyota");
    }
}

class Ford implements Carr {
    drive(): void {
        console.log("Driving a Ford");
    }
}

// Абстрактный интерфейс фабрики
interface CarrFactory {
    createCarr(): Carr;
}

// Конкретные реализации фабрики
class ToyotaFactory implements CarrFactory {
    createCarr(): Carr {
        return new Toyota();
    }
}

class FordFactory implements CarrFactory {
    createCarr(): Carr {
        return new Ford();
    }
}

// Клиентский код
const toyotaFactory = new ToyotaFactory();
const fordFactory = new FordFactory();

const toyotaCarr = toyotaFactory.createCarr();
const fordCarr = fordFactory.createCarr();

toyotaCarr.drive(); // Output: Driving a Toyota
fordCarr.drive(); // Output: Driving a Ford
