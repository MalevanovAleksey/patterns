// Продукт - Автомобиль
class Car {
    engine: string;
    seats: number;
    tripComputer: boolean;
    GPS: boolean;

    constructor() {
        this.engine = "";
        this.seats = 0;
        this.tripComputer = false;
        this.GPS = false;
    }
}

// Интерфейс Строителя
interface CarBuilder {
    reset(): void;
    setEngine(engine: string): void;
    setSeats(seats: number): void;
    setTripComputer(tripComputer: boolean): void;
    setGPS(GPS: boolean): void;
    getResult(): Car;
}

// Конкретный Строитель
class ConcreteCarBuilder implements CarBuilder {
    private car: Car;

    constructor() {
        this.car = new Car();
    }

    reset(): void {
        this.car = new Car();
    }

    setEngine(engine: string): void {
        this.car.engine = engine;
    }

    setSeats(seats: number): void {
        this.car.seats = seats;
    }

    setTripComputer(tripComputer: boolean): void {
        this.car.tripComputer = tripComputer;
    }

    setGPS(GPS: boolean): void {
        this.car.GPS = GPS;
    }

    getResult(): Car {
        return this.car;
    }
}

// Директор
class Director {
    private builder: CarBuilder;

    setBuilder(builder: CarBuilder): void {
        this.builder = builder;
    }

    constructSportsCar(): void {
        this.builder.reset();
        this.builder.setEngine("V8");
        this.builder.setSeats(2);
        this.builder.setTripComputer(true);
        this.builder.setGPS(true);
    }

    constructSUV(): void {
        this.builder.reset();
        this.builder.setEngine("V6");
        this.builder.setSeats(5);
        this.builder.setTripComputer(true);
        this.builder.setGPS(true);
    }
}

// Пример использования
const director = new Director();
const builder = new ConcreteCarBuilder();

director.setBuilder(builder);

// Построение спортивного автомобиля
director.constructSportsCar();
const sportsCar = builder.getResult();
console.log("Sports Car built:", sportsCar);

// Построение внедорожника
director.constructSUV();
const suv = builder.getResult();
console.log("SUV built:", suv);
