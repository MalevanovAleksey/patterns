// Абстрактные продукты
interface Button {
    paint(): void;
}

interface Checkbox {
    paint(): void;
}

// Конкретные продукты для Windows
class WindowsButton implements Button {
    paint(): void {
        console.log("Render a button in Windows style");
    }
}

class WindowsCheckbox implements Checkbox {
    paint(): void {
        console.log("Render a checkbox in Windows style");
    }
}

// Конкретные продукты для macOS
class MacOSButton implements Button {
    paint(): void {
        console.log("Render a button in macOS style");
    }
}

class MacOSCheckbox implements Checkbox {
    paint(): void {
        console.log("Render a checkbox in macOS style");
    }
}

// Абстрактная фабрика
interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}

// Конкретные фабрики для Windows
class WindowsFactory implements GUIFactory {
    createButton(): Button {
        return new WindowsButton();
    }

    createCheckbox(): Checkbox {
        return new WindowsCheckbox();
    }
}

// Конкретные фабрики для macOS
class MacOSFactory implements GUIFactory {
    createButton(): Button {
        return new MacOSButton();
    }

    createCheckbox(): Checkbox {
        return new MacOSCheckbox();
    }
}

// Клиентский код
class Application {
    private button: Button;
    private checkbox: Checkbox;

    constructor(factory: GUIFactory) {
        this.button = factory.createButton();
        this.checkbox = factory.createCheckbox();
    }

    paint(): void {
        this.button.paint();
        this.checkbox.paint();
    }
}

// Пример использования
let factory: GUIFactory;
let os = "Windows";

if (os === "Windows") {
    factory = new WindowsFactory();
} else {
    factory = new MacOSFactory();
}

const app = new Application(factory);
app.paint();
