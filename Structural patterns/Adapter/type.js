var XMLDataProvider = /** @class */ (function () {
    function XMLDataProvider() {
    }
    XMLDataProvider.prototype.getXMLData = function () {
        return "<data>\n                <stock>\n                  <name>Apple</name>\n                  <price>150</price>\n                </stock>\n                <stock>\n                  <name>Google</name>\n                  <price>2800</price>\n                </stock>\n              </data>";
    };
    return XMLDataProvider;
}());
// Сторонняя библиотека аналитики
var AnalyticsLibrary = /** @class */ (function () {
    function AnalyticsLibrary(dataProvider) {
        this.dataProvider = dataProvider;
    }
    AnalyticsLibrary.prototype.analyze = function () {
        var data = this.dataProvider.getJSONData();
        console.log("Analyzing data:", data);
    };
    return AnalyticsLibrary;
}());
// Адаптер, который преобразует данные из формата XML в JSON
var Adapter = /** @class */ (function () {
    function Adapter(xmlDataProvider) {
        this.xmlDataProvider = xmlDataProvider;
    }
    Adapter.prototype.getJSONData = function () {
        var xmlData = this.xmlDataProvider.getXMLData();
        // Простая реализация конвертации XML в JSON для примера
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(xmlData, "text/xml");
        var stocks = xmlDoc.getElementsByTagName("stock");
        var jsonData = Array.from(stocks).map(function (stock) {
            return {
                name: stock.getElementsByTagName("name")[0].textContent,
                price: stock.getElementsByTagName("price")[0].textContent,
            };
        });
        return JSON.stringify({ data: jsonData });
    };
    return Adapter;
}());
// Пример использования
var xmlDataProvider = new XMLDataProvider();
var adapter = new Adapter(xmlDataProvider);
var analytics = new AnalyticsLibrary(adapter);
analytics.analyze();
