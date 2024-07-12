// Интерфейс наблюдателя
interface Observer {
    update(comment: string): void;
}

// Интерфейс наблюдаемого
interface Observable {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notifyObservers(comment: string): void;
}

// наблюдаемый

class CommentSection implements Observable {
    private observers: Observer[] = [];
    private comments: string[] = [];

    subscribe(observer: Observer): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: Observer): void {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    notifyObservers(comment: string): void {
        this.comments.push(comment);
        this.observers.forEach((observer) => observer.update(comment));
    }

    addComment(comment: string): void {
        this.notifyObservers(comment);
    }
}

// наблюдатель

class EmailNotifier implements Observer {
    private email: string;

    constructor(email: string) {
        this.email = email;
    }

    update(comment: string): void {
        console.log(`New comment posted: "${comment}". Notifying ${this.email}`);
        // Здесь можно отправлять email с уведомлением
    }
}

const commentSection = new CommentSection();
const emailNotifier1 = new EmailNotifier("user1@example.com");
const emailNotifier2 = new EmailNotifier("user2@example.com");

commentSection.subscribe(emailNotifier1);
commentSection.subscribe(emailNotifier2);

commentSection.addComment("This is a great article!");
// Вывод:
// New comment posted: "This is a great article!". Notifying user1@example.com
// New comment posted: "This is a great article!". Notifying user2@example.com

commentSection.unsubscribe(emailNotifier1);
commentSection.addComment("I disagree with this opinion.");
// Вывод:
// New comment posted: "I disagree with this opinion.". Notifying user2@example.com
