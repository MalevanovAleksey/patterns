class Light {
    turnOn() {
        console.log("Свет включен");
    }

    turnOff() {
        console.log("Свет выключен");
    }
}

interface Command {
    execute(): void;
}

class TurnOnCommand implements Command {
    constructor(private light: Light) {}

    execute() {
        this.light.turnOn();
    }
}

class TurnOffCommand implements Command {
    constructor(private light: Light) {}

    execute() {
        this.light.turnOff();
    }
}

class RemoteControl {
    private command: Command | null = null;

    setCommand(command: Command) {
        this.command = command;
    }

    pressButton() {
        if (this.command) {
            this.command.execute();
        } else {
            console.log("Пожалуйста, установите команду на пульт управления.");
        }
    }
}

// Пример использования

const light = new Light();
const turnOnCommand = new TurnOnCommand(light);
const turnOffCommand = new TurnOffCommand(light);

const remoteControl = new RemoteControl();

remoteControl.setCommand(turnOnCommand);
remoteControl.pressButton(); // Свет включен

remoteControl.setCommand(turnOffCommand);
remoteControl.pressButton(); // Свет выключен
