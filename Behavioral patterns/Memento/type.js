// персонаж
var Character = /** @class */ (function () {
    function Character(name, health, mana) {
        this.name = name;
        this.health = health;
        this.mana = mana;
    }
    Character.prototype.takeDamage = function (amount) {
        this.health -= amount;
    };
    Character.prototype.castSpell = function (manaCost) {
        this.mana -= manaCost;
    };
    // Метод для создания снимка
    Character.prototype.createSnapshot = function () {
        return new CharacterSnapshot(this.name, this.health, this.mana);
    };
    Character.prototype.getHealth = function () {
        return this.health;
    };
    // Метод для восстановления состояния из снимка
    Character.prototype.restoreFromSnapshot = function (snapshot) {
        this.name = snapshot.getName();
        this.health = snapshot.getHealth();
        this.mana = snapshot.getMana();
    };
    return Character;
}());
// служит для хранения данных о состоянии персонажа и предоставляет геттеры для доступа к этим данным.
var CharacterSnapshot = /** @class */ (function () {
    function CharacterSnapshot(name, health, mana) {
        this.name = name;
        this.health = health;
        this.mana = mana;
    }
    CharacterSnapshot.prototype.getName = function () {
        return this.name;
    };
    CharacterSnapshot.prototype.getHealth = function () {
        return this.health;
    };
    CharacterSnapshot.prototype.getMana = function () {
        return this.mana;
    };
    return CharacterSnapshot;
}());
// Пример использования
var character = new Character("Warrior", 100, 50);
// Сохраняем снимок состояния персонажа
var snapshot = character.createSnapshot();
// Персонаж получает урон
character.takeDamage(20);
// Восстанавливаем состояние персонажа из снимка
character.restoreFromSnapshot(snapshot);
console.log(character.getHealth()); // Вывод: 100 (восстановленное состояние)
