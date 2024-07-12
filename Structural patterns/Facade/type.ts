class Television {
    public on(): void {
        console.log("TV is on");
    }

    public off(): void {
        console.log("TV is off");
    }
}

class DVDPlayer {
    public on(): void {
        console.log("DVD Player is on");
    }

    public off(): void {
        console.log("DVD Player is off");
    }

    public play(movie: string): void {
        console.log(`Playing movie: ${movie}`);
    }
}

class SoundSystem {
    public on(): void {
        console.log("Sound system is on");
    }

    public off(): void {
        console.log("Sound system is off");
    }

    public setVolume(level: number): void {
        console.log(`Sound system volume set to ${level}`);
    }
}


class HomeTheaterFacade {
    private tv: Television;
    private dvd: DVDPlayer;
    private sound: SoundSystem;

    constructor(tv: Television, dvd: DVDPlayer, sound: SoundSystem) {
        this.tv = tv;
        this.dvd = dvd;
        this.sound = sound;
    }

    public watchMovie(movie: string): void {
        console.log("Get ready to watch a movie...");
        this.tv.on();
        this.sound.on();
        this.sound.setVolume(5);
        this.dvd.on();
        this.dvd.play(movie);
    }

    public endMovie(): void {
        console.log("Shutting down the home theater...");
        this.dvd.off();
        this.sound.off();
        this.tv.off();
    }
}


// Клиентский код

const tv = new Television();
const dvd = new DVDPlayer();
const sound = new SoundSystem();

const homeTheater = new HomeTheaterFacade(tv, dvd, sound);

// Включаем систему для просмотра фильма
homeTheater.watchMovie("Inception");

// Завершаем просмотр
homeTheater.endMovie();
