// Реализация пульта для конкретной модели телевизора
var ConcreteRemote = /** @class */ (function () {
    function ConcreteRemote(tv) {
        this.tv = tv;
    }
    ConcreteRemote.prototype.powerOn = function () {
        this.tv.powerOn();
    };
    ConcreteRemote.prototype.powerOff = function () {
        this.tv.powerOff();
    };
    ConcreteRemote.prototype.setChannel = function (channel) {
        this.tv.tuneChannel(channel);
    };
    return ConcreteRemote;
}());
// Реализация телевизора Sony
var SonyTelevision = /** @class */ (function () {
    function SonyTelevision() {
    }
    SonyTelevision.prototype.powerOn = function () {
        console.log("Sony TV is powering on");
    };
    SonyTelevision.prototype.powerOff = function () {
        console.log("Sony TV is powering off");
    };
    SonyTelevision.prototype.tuneChannel = function (channel) {
        console.log("Sony TV tuned to channel ".concat(channel));
    };
    return SonyTelevision;
}());
// Реализация телевизора Samsung
var SamsungTelevision = /** @class */ (function () {
    function SamsungTelevision() {
    }
    SamsungTelevision.prototype.powerOn = function () {
        console.log("Samsung TV is powering on");
    };
    SamsungTelevision.prototype.powerOff = function () {
        console.log("Samsung TV is powering off");
    };
    SamsungTelevision.prototype.tuneChannel = function (channel) {
        console.log("Samsung TV tuned to channel ".concat(channel));
    };
    return SamsungTelevision;
}());
// Создаем пульт для Sony TV
var sonyTv = new SonyTelevision();
var remoteForSony = new ConcreteRemote(sonyTv);
remoteForSony.powerOn();
remoteForSony.setChannel(5);
remoteForSony.powerOff();
// Создаем пульт для Samsung TV
var samsungTv = new SamsungTelevision();
var remoteForSamsung = new ConcreteRemote(samsungTv);
remoteForSamsung.powerOn();
remoteForSamsung.setChannel(10);
remoteForSamsung.powerOff();
