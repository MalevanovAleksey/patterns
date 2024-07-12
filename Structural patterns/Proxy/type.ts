interface IDataService {
    fetchData(): Promise<string>;
}

// Класс, который реализует IDataService и выполняет ресурсоемкие операции, такие как загрузка данных из базы данных.
class RealDataService implements IDataService {
    async fetchData(): Promise<string> {
        console.log("Fetching data from the database...");
        // Симуляция задержки при обращении к базе данных
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return "Data from the database";
    }
}

// Класс-заместитель, который также реализует IDataService. Он хранит ссылку на RealDataService и добавляет функциональность кеширования, чтобы уменьшить количество обращений к базе данных.
class DataServiceProxy implements IDataService {
    private realDataService: RealDataService;
    private cachedData: string | null = null;

    constructor(realDataService: RealDataService) {
        this.realDataService = realDataService;
    }

    async fetchData(): Promise<string> {
        if (this.cachedData === null) {
            console.log("Cache miss. Fetching data...");
            this.cachedData = await this.realDataService.fetchData();
        } else {
            console.log("Cache hit. Returning cached data...");
        }
        return this.cachedData;
    }
}

const realDataService = new RealDataService();
const dataServiceProxy = new DataServiceProxy(realDataService);

console.log(dataServiceProxy.fetchData()); // Должен загрузить данные из базы данных
console.log(dataServiceProxy.fetchData()); // Должен вернуть кешированные данные
