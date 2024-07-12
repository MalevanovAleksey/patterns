// Интерфейс для элементов зоопарка
interface IZooElement {
    accept(visitor: IVisitor): void;
}

// Интерфейс для посетителей
interface IVisitor {
    visitAnimal(animal: Animal): void;
    visitPavilion(pavilion: Pavilion): void;
    visitAttraction(attraction: Attraction): void;
}
class Animal implements IZooElement {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    accept(visitor: IVisitor): void {
        visitor.visitAnimal(this);
    }
}

class Pavilion implements IZooElement {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    accept(visitor: IVisitor): void {
        visitor.visitPavilion(this);
    }
}

class Attraction implements IZooElement {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    accept(visitor: IVisitor): void {
        visitor.visitAttraction(this);
    }
}

class ZooVisitor implements IVisitor {
    private visitedAnimals: Animal[] = [];
    private visitedPavilions: Pavilion[] = [];
    private visitedAttractions: Attraction[] = [];

    visitAnimal(animal: Animal): void {
        console.log(`Посетитель посетил животное ${animal.name}`);
        this.visitedAnimals.push(animal);
    }

    visitPavilion(pavilion: Pavilion): void {
        console.log(`Посетитель посетил павильон ${pavilion.name}`);
        this.visitedPavilions.push(pavilion);
    }

    visitAttraction(attraction: Attraction): void {
        console.log(`Посетитель посетил аттракцион ${attraction.name}`);
        this.visitedAttractions.push(attraction);
    }

    getVisitedElements(): void {
        console.log("Посетитель посетил следующие элементы зоопарка:");
        console.log(
            "Животные:",
            this.visitedAnimals.map((a) => a.name)
        );
        console.log(
            "Павильоны:",
            this.visitedPavilions.map((p) => p.name)
        );
        console.log(
            "Аттракционы:",
            this.visitedAttractions.map((a) => a.name)
        );
    }
}

const lion = new Animal("Лев");
const tiger = new Animal("Тигр");
const elephantPavilion = new Pavilion("Павильон слонов");
const rollerCoaster = new Attraction("Американские горки");

const visitor = new ZooVisitor();
lion.accept(visitor);
tiger.accept(visitor);
elephantPavilion.accept(visitor);
rollerCoaster.accept(visitor);

visitor.getVisitedElements();
