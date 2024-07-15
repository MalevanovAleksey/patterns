// Класс итератора для массива
var ArrayIterator = /** @class */ (function () {
    function ArrayIterator(array) {
        this.index = 0;
        this.array = array;
    }
    ArrayIterator.prototype.next = function () {
        if (this.hasNext()) {
            return { value: this.array[this.index++], done: false };
        }
        else {
            return { value: undefined, done: true };
        }
    };
    ArrayIterator.prototype.hasNext = function () {
        return this.index < this.array.length;
    };
    return ArrayIterator;
}());
// Класс итератора для обратного обхода массива
var ReverseArrayIterator = /** @class */ (function () {
    function ReverseArrayIterator(array) {
        this.index = array.length - 1;
        this.array = array;
    }
    ReverseArrayIterator.prototype.next = function () {
        if (this.hasNext()) {
            return { value: this.array[this.index--], done: false };
        }
        else {
            return { value: undefined, done: true };
        }
    };
    ReverseArrayIterator.prototype.hasNext = function () {
        return this.index >= 0;
    };
    return ReverseArrayIterator;
}());
// Класс итератора для обхода каждого второго элемента массива
var EveryOtherArrayIterator = /** @class */ (function () {
    function EveryOtherArrayIterator(array) {
        this.index = 0;
        this.array = array;
    }
    EveryOtherArrayIterator.prototype.next = function () {
        if (this.hasNext()) {
            var value = this.array[this.index];
            this.index += 2;
            return { value: value, done: false };
        }
        else {
            return { value: undefined, done: true };
        }
    };
    EveryOtherArrayIterator.prototype.hasNext = function () {
        return this.index < this.array.length;
    };
    return EveryOtherArrayIterator;
}());
// Пример использования
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Обход в прямом порядке
var iterator = new ArrayIterator(myArray);
while (iterator.hasNext()) {
    console.log(iterator.next().value);
}
// Обход в обратном порядке
iterator = new ReverseArrayIterator(myArray);
while (iterator.hasNext()) {
    console.log(iterator.next().value);
}
// Обход каждого второго элемента
iterator = new EveryOtherArrayIterator(myArray);
while (iterator.hasNext()) {
    console.log(iterator.next().value);
}
