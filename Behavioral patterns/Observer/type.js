// наблюдаемый
var CommentSection = /** @class */ (function () {
    function CommentSection() {
        this.observers = [];
        this.comments = [];
    }
    CommentSection.prototype.subscribe = function (observer) {
        this.observers.push(observer);
    };
    CommentSection.prototype.unsubscribe = function (observer) {
        this.observers = this.observers.filter(function (obs) { return obs !== observer; });
    };
    CommentSection.prototype.notifyObservers = function (comment) {
        this.comments.push(comment);
        this.observers.forEach(function (observer) { return observer.update(comment); });
    };
    CommentSection.prototype.addComment = function (comment) {
        this.notifyObservers(comment);
    };
    return CommentSection;
}());
// наблюдатель
var EmailNotifier = /** @class */ (function () {
    function EmailNotifier(email) {
        this.email = email;
    }
    EmailNotifier.prototype.update = function (comment) {
        console.log("New comment posted: \"".concat(comment, "\". Notifying ").concat(this.email));
        // Здесь можно отправлять email с уведомлением
    };
    return EmailNotifier;
}());
var commentSection = new CommentSection();
var emailNotifier1 = new EmailNotifier("user1@example.com");
var emailNotifier2 = new EmailNotifier("user2@example.com");
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
