// Конкретные реализации состояний лифта
var StoppedState = /** @class */ (function () {
    function StoppedState(elevator) {
        this.elevator = elevator;
    }
    StoppedState.prototype.requestFloor = function (floor) {
        if (floor > this.elevator.currentFloor) {
            this.elevator.setState(this.elevator.upState);
            this.elevator.moveUp();
        }
        else if (floor < this.elevator.currentFloor) {
            this.elevator.setState(this.elevator.downState);
            this.elevator.moveDown();
        }
        else {
            console.log("Лифт уже на этом этаже");
        }
    };
    StoppedState.prototype.moveUp = function () {
        console.log("Лифт не может двигаться вверх, он остановлен");
    };
    StoppedState.prototype.moveDown = function () {
        console.log("Лифт не может двигаться вниз, он остановлен");
    };
    StoppedState.prototype.stop = function () {
        console.log("Лифт уже остановлен");
    };
    return StoppedState;
}());
var UpState = /** @class */ (function () {
    function UpState(elevator) {
        this.elevator = elevator;
    }
    UpState.prototype.requestFloor = function (floor) {
        if (floor > this.elevator.currentFloor) {
            console.log("Лифт продолжит двигаться вверх");
        }
        else if (floor < this.elevator.currentFloor) {
            this.elevator.setState(this.elevator.downState);
            this.elevator.moveDown();
        }
        else {
            this.elevator.setState(this.elevator.stoppedState);
            this.elevator.stop();
        }
    };
    UpState.prototype.moveUp = function () {
        this.elevator.currentFloor++;
        console.log("\u041B\u0438\u0444\u0442 \u043F\u043E\u0434\u043D\u044F\u043B\u0441\u044F \u043D\u0430 ".concat(this.elevator.currentFloor, " \u044D\u0442\u0430\u0436"));
    };
    UpState.prototype.moveDown = function () {
        console.log("Лифт не может двигаться вниз, он движется вверх");
    };
    UpState.prototype.stop = function () {
        this.elevator.setState(this.elevator.stoppedState);
        console.log("Лифт остановлен");
    };
    return UpState;
}());
var DownState = /** @class */ (function () {
    function DownState(elevator) {
        this.elevator = elevator;
    }
    DownState.prototype.requestFloor = function (floor) {
        if (floor < this.elevator.currentFloor) {
            console.log("Лифт продолжит двигаться вниз");
        }
        else if (floor > this.elevator.currentFloor) {
            this.elevator.setState(this.elevator.upState);
            this.elevator.moveUp();
        }
        else {
            this.elevator.setState(this.elevator.stoppedState);
            this.elevator.stop();
        }
    };
    DownState.prototype.moveUp = function () {
        console.log("Лифт не может двигаться вверх, он движется вниз");
    };
    DownState.prototype.moveDown = function () {
        this.elevator.currentFloor--;
        console.log("\u041B\u0438\u0444\u0442 \u0441\u043F\u0443\u0441\u0442\u0438\u043B\u0441\u044F \u043D\u0430 ".concat(this.elevator.currentFloor, " \u044D\u0442\u0430\u0436"));
    };
    DownState.prototype.stop = function () {
        this.elevator.setState(this.elevator.stoppedState);
        console.log("Лифт остановлен");
    };
    return DownState;
}());
// Класс лифта, управляющий состоянием
var Elevator = /** @class */ (function () {
    function Elevator() {
        this.currentFloor = 1;
        this.stoppedState = new StoppedState(this);
        this.upState = new UpState(this);
        this.downState = new DownState(this);
        this.currentState = this.stoppedState;
    }
    Elevator.prototype.setState = function (state) {
        this.currentState = state;
    };
    Elevator.prototype.requestFloor = function (floor) {
        this.currentState.requestFloor(floor);
    };
    Elevator.prototype.moveUp = function () {
        this.currentState.moveUp();
    };
    Elevator.prototype.moveDown = function () {
        this.currentState.moveDown();
    };
    Elevator.prototype.stop = function () {
        this.currentState.stop();
    };
    return Elevator;
}());
// Пример использования
var elevator = new Elevator();
elevator.requestFloor(5); // Лифт поднимается на 5 этаж
elevator.requestFloor(2); // Лифт спускается на 2 этаж
elevator.requestFloor(3); // Лифт поднимается на 3 этаж
elevator.stop(); // Лифт останавливается
