// Конкретные продукты для Windows
var WindowsButton = /** @class */ (function () {
    function WindowsButton() {
    }
    WindowsButton.prototype.paint = function () {
        console.log("Render a button in Windows style");
    };
    return WindowsButton;
}());
var WindowsCheckbox = /** @class */ (function () {
    function WindowsCheckbox() {
    }
    WindowsCheckbox.prototype.paint = function () {
        console.log("Render a checkbox in Windows style");
    };
    return WindowsCheckbox;
}());
// Конкретные продукты для macOS
var MacOSButton = /** @class */ (function () {
    function MacOSButton() {
    }
    MacOSButton.prototype.paint = function () {
        console.log("Render a button in macOS style");
    };
    return MacOSButton;
}());
var MacOSCheckbox = /** @class */ (function () {
    function MacOSCheckbox() {
    }
    MacOSCheckbox.prototype.paint = function () {
        console.log("Render a checkbox in macOS style");
    };
    return MacOSCheckbox;
}());
// Конкретные фабрики для Windows
var WindowsFactory = /** @class */ (function () {
    function WindowsFactory() {
    }
    WindowsFactory.prototype.createButton = function () {
        return new WindowsButton();
    };
    WindowsFactory.prototype.createCheckbox = function () {
        return new WindowsCheckbox();
    };
    return WindowsFactory;
}());
// Конкретные фабрики для macOS
var MacOSFactory = /** @class */ (function () {
    function MacOSFactory() {
    }
    MacOSFactory.prototype.createButton = function () {
        return new MacOSButton();
    };
    MacOSFactory.prototype.createCheckbox = function () {
        return new MacOSCheckbox();
    };
    return MacOSFactory;
}());
// Клиентский код
var Application = /** @class */ (function () {
    function Application(factory) {
        this.button = factory.createButton();
        this.checkbox = factory.createCheckbox();
    }
    Application.prototype.paint = function () {
        this.button.paint();
        this.checkbox.paint();
    };
    return Application;
}());
// Пример использования
var factory;
var os = "Windows";
if (os === "Windows") {
    factory = new WindowsFactory();
}
else {
    factory = new MacOSFactory();
}
var app = new Application(factory);
app.paint();
