// персонаж
class Character {
    private name: string;
    private health: number;
    private mana: number;

    constructor(name: string, health: number, mana: number) {
        this.name = name;
        this.health = health;
        this.mana = mana;
    }

    takeDamage(amount: number): void {
        this.health -= amount;
    }

    castSpell(manaCost: number): void {
        this.mana -= manaCost;
    }

    // Метод для создания снимка
    createSnapshot(): CharacterSnapshot {
        return new CharacterSnapshot(this.name, this.health, this.mana);
    }

    getHealth(): number {
        return this.health;
    }

    // Метод для восстановления состояния из снимка
    restoreFromSnapshot(snapshot: CharacterSnapshot): void {
        this.name = snapshot.getName();
        this.health = snapshot.getHealth();
        this.mana = snapshot.getMana();
    }
}

// служит для хранения данных о состоянии персонажа и предоставляет геттеры для доступа к этим данным.

class CharacterSnapshot {
    private name: string;
    private health: number;
    private mana: number;

    constructor(name: string, health: number, mana: number) {
        this.name = name;
        this.health = health;
        this.mana = mana;
    }

    getName(): string {
        return this.name;
    }

    getHealth(): number {
        return this.health;
    }

    getMana(): number {
        return this.mana;
    }
}

// Пример использования
const character = new Character("Warrior", 100, 50);

// Сохраняем снимок состояния персонажа
const snapshot = character.createSnapshot();

// Персонаж получает урон
character.takeDamage(20);

// Восстанавливаем состояние персонажа из снимка
character.restoreFromSnapshot(snapshot);

console.log(character.getHealth()); // Вывод: 100 (восстановленное состояние)
