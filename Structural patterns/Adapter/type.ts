class XMLDataProvider {
    public getXMLData(): string {
        return `<data>
                <stock>
                  <name>Apple</name>
                  <price>150</price>
                </stock>
                <stock>
                  <name>Google</name>
                  <price>2800</price>
                </stock>
              </data>`;
    }
}

// Интерфейс, который ожидает сторонняя библиотека аналитики для получения котировок в формате JSON
interface JSONDataProvider {
    getJSONData(): string;
}

// Сторонняя библиотека аналитики
class AnalyticsLibrary {
    private dataProvider: JSONDataProvider;

    constructor(dataProvider: JSONDataProvider) {
        this.dataProvider = dataProvider;
    }

    public analyze(): void {
        const data = this.dataProvider.getJSONData();
        console.log("Analyzing data:", data);
    }
}

// Адаптер, который преобразует данные из формата XML в JSON
class Adapter implements JSONDataProvider {
    private xmlDataProvider: XMLDataProvider;

    constructor(xmlDataProvider: XMLDataProvider) {
        this.xmlDataProvider = xmlDataProvider;
    }

    public getJSONData(): string {
        const xmlData = this.xmlDataProvider.getXMLData();
        // Простая реализация конвертации XML в JSON для примера
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, "text/xml");
        const stocks = xmlDoc.getElementsByTagName("stock");

        const jsonData = Array.from(stocks).map((stock) => {
            return {
                name: stock.getElementsByTagName("name")[0].textContent,
                price: stock.getElementsByTagName("price")[0].textContent,
            };
        });

        return JSON.stringify({ data: jsonData });
    }
}

// Пример использования
const xmlDataProvider = new XMLDataProvider();
const adapter = new Adapter(xmlDataProvider);
const analytics = new AnalyticsLibrary(adapter);

analytics.analyze();
