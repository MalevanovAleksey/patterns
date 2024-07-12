// Интерфейс Прототипа
interface Prototype {
    clone(): this;
}

//   Car_1 чтобы не было дубликата от строителя
class Car_1 implements Prototype {
    public model: string;
    public color: string;
    public engine: string;

    constructor(model: string, color: string, engine: string) {
        this.model = model;
        this.color = color;
        this.engine = engine;
    }

    clone(): this {
        const clone = Object.create(this);
        return clone;
    }

    public display(): void {
        console.log(`Model: ${this.model}, Color: ${this.color}, Engine: ${this.engine}`);
    }
}

// Пример использования
// Создаем оригинальный автомобиль
const originalCar = new Car_1("Tesla Model S", "Red", "Electric");

// Клонируем автомобиль
const clonedCar = originalCar.clone();

// Изменяем цвет клонированного автомобиля
clonedCar.color = "Blue";

// Отображаем информацию об автомобилях
console.log("Original Car:");
originalCar.display();

console.log("Cloned Car:");
clonedCar.display();
