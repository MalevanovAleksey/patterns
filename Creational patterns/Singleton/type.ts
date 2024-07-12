class Singleton {
    private static instance: Singleton;

    // Приватный конструктор предотвращает создание экземпляров через `new`
    private constructor() {}

    // Метод для получения единственного экземпляра
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public someBusinessLogic(): void {
        console.log("Executing business logic in Singleton instance.");
    }
}

// Получаем единственный экземпляр класса
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

// Проверяем, что оба экземпляра одинаковы
console.log(singleton1 === singleton2); // true

// Используем метод Singleton
singleton1.someBusinessLogic();
