// Интерфейс итератора
interface Iterator<T> {
    next(): IteratorResult<T>;
    hasNext(): boolean;
  }
  
  // Класс итератора для массива
  class ArrayIterator<T> implements Iterator<T> {
    private index: number;
    private array: T[];
  
    constructor(array: T[]) {
      this.index = 0;
      this.array = array;
    }
  
    next(): IteratorResult<T> {
      if (this.hasNext()) {
        return { value: this.array[this.index++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  
    hasNext(): boolean {
      return this.index < this.array.length;
    }
  }
  
  // Класс итератора для обратного обхода массива
  class ReverseArrayIterator<T> implements Iterator<T> {
    private index: number;
    private array: T[];
  
    constructor(array: T[]) {
      this.index = array.length - 1;
      this.array = array;
    }
  
    next(): IteratorResult<T> {
      if (this.hasNext()) {
        return { value: this.array[this.index--], done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  
    hasNext(): boolean {
      return this.index >= 0;
    }
  }
  
  // Класс итератора для обхода каждого второго элемента массива
  class EveryOtherArrayIterator<T> implements Iterator<T> {
    private index: number;
    private array: T[];
  
    constructor(array: T[]) {
      this.index = 0;
      this.array = array;
    }
  
    next(): IteratorResult<T> {
      if (this.hasNext()) {
        const value = this.array[this.index];
        this.index += 2;
        return { value, done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  
    hasNext(): boolean {
      return this.index < this.array.length;
    }
  }
  
  // Пример использования
  const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // Обход в прямом порядке
  let iterator: Iterator<number> = new ArrayIterator(myArray);
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
  