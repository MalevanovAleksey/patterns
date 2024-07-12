// Интерфейс Food определяет методы, которые должны быть реализованы всеми типами еды
interface Food {
    prepare(): void;
    cook(): void;
    box(): void;
}

export default Food;