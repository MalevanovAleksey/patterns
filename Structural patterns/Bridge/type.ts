// Абстракция - интерфейс пульта
interface Remote {
    powerOn(): void;
    powerOff(): void;
    setChannel(channel: number): void;
}

// Реализация пульта для конкретной модели телевизора
class ConcreteRemote implements Remote {
    protected tv: Television;

    constructor(tv: Television) {
        this.tv = tv;
    }

    powerOn(): void {
        this.tv.powerOn();
    }

    powerOff(): void {
        this.tv.powerOff();
    }

    setChannel(channel: number): void {
        this.tv.tuneChannel(channel);
    }
}

// Абстракция - интерфейс телевизора
interface Television {
    powerOn(): void;
    powerOff(): void;
    tuneChannel(channel: number): void;
}

// Реализация телевизора Sony
class SonyTelevision implements Television {
    powerOn(): void {
        console.log("Sony TV is powering on");
    }

    powerOff(): void {
        console.log("Sony TV is powering off");
    }

    tuneChannel(channel: number): void {
        console.log(`Sony TV tuned to channel ${channel}`);
    }
}

// Реализация телевизора Samsung
class SamsungTelevision implements Television {
    powerOn(): void {
        console.log("Samsung TV is powering on");
    }

    powerOff(): void {
        console.log("Samsung TV is powering off");
    }

    tuneChannel(channel: number): void {
        console.log(`Samsung TV tuned to channel ${channel}`);
    }
}

// Создаем пульт для Sony TV
const sonyTv = new SonyTelevision();
const remoteForSony = new ConcreteRemote(sonyTv);

remoteForSony.powerOn();
remoteForSony.setChannel(5);
remoteForSony.powerOff();

// Создаем пульт для Samsung TV
const samsungTv = new SamsungTelevision();
const remoteForSamsung = new ConcreteRemote(samsungTv);

remoteForSamsung.powerOn();
remoteForSamsung.setChannel(10);
remoteForSamsung.powerOff();
