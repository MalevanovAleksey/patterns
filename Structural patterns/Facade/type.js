var Television = /** @class */ (function () {
    function Television() {
    }
    Television.prototype.on = function () {
        console.log("TV is on");
    };
    Television.prototype.off = function () {
        console.log("TV is off");
    };
    return Television;
}());
var DVDPlayer = /** @class */ (function () {
    function DVDPlayer() {
    }
    DVDPlayer.prototype.on = function () {
        console.log("DVD Player is on");
    };
    DVDPlayer.prototype.off = function () {
        console.log("DVD Player is off");
    };
    DVDPlayer.prototype.play = function (movie) {
        console.log("Playing movie: ".concat(movie));
    };
    return DVDPlayer;
}());
var SoundSystem = /** @class */ (function () {
    function SoundSystem() {
    }
    SoundSystem.prototype.on = function () {
        console.log("Sound system is on");
    };
    SoundSystem.prototype.off = function () {
        console.log("Sound system is off");
    };
    SoundSystem.prototype.setVolume = function (level) {
        console.log("Sound system volume set to ".concat(level));
    };
    return SoundSystem;
}());
var HomeTheaterFacade = /** @class */ (function () {
    function HomeTheaterFacade(tv, dvd, sound) {
        this.tv = tv;
        this.dvd = dvd;
        this.sound = sound;
    }
    HomeTheaterFacade.prototype.watchMovie = function (movie) {
        console.log("Get ready to watch a movie...");
        this.tv.on();
        this.sound.on();
        this.sound.setVolume(5);
        this.dvd.on();
        this.dvd.play(movie);
    };
    HomeTheaterFacade.prototype.endMovie = function () {
        console.log("Shutting down the home theater...");
        this.dvd.off();
        this.sound.off();
        this.tv.off();
    };
    return HomeTheaterFacade;
}());
// Клиентский код
var tv = new Television();
var dvd = new DVDPlayer();
var sound = new SoundSystem();
var homeTheater = new HomeTheaterFacade(tv, dvd, sound);
// Включаем систему для просмотра фильма
homeTheater.watchMovie("Inception");
// Завершаем просмотр
homeTheater.endMovie();
