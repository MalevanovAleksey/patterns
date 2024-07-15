var Light = /** @class */ (function () {
    function Light() {
    }
    Light.prototype.turnOn = function () {
        console.log("Свет включен");
    };
    Light.prototype.turnOff = function () {
        console.log("Свет выключен");
    };
    return Light;
}());
var TurnOnCommand = /** @class */ (function () {
    function TurnOnCommand(light) {
        this.light = light;
    }
    TurnOnCommand.prototype.execute = function () {
        this.light.turnOn();
    };
    return TurnOnCommand;
}());
var TurnOffCommand = /** @class */ (function () {
    function TurnOffCommand(light) {
        this.light = light;
    }
    TurnOffCommand.prototype.execute = function () {
        this.light.turnOff();
    };
    return TurnOffCommand;
}());
var RemoteControl = /** @class */ (function () {
    function RemoteControl() {
        this.command = null;
    }
    RemoteControl.prototype.setCommand = function (command) {
        this.command = command;
    };
    RemoteControl.prototype.pressButton = function () {
        if (this.command) {
            this.command.execute();
        }
        else {
            console.log("Пожалуйста, установите команду на пульт управления.");
        }
    };
    return RemoteControl;
}());
// Пример использования
var light = new Light();
var turnOnCommand = new TurnOnCommand(light);
var turnOffCommand = new TurnOffCommand(light);
var remoteControl = new RemoteControl();
remoteControl.setCommand(turnOnCommand);
remoteControl.pressButton(); // Свет включен
remoteControl.setCommand(turnOffCommand);
remoteControl.pressButton(); // Свет выключен
