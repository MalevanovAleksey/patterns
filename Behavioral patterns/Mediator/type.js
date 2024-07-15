// Посредник, который обрабатывает отправку и получение сообщений между участниками чата.
//  При отправке сообщения посредник (`ChatRoom`) передает его всем другим участникам, кроме отправителя.
var ChatRoom = /** @class */ (function () {
    function ChatRoom() {
        this.participants = new Map();
    }
    ChatRoom.prototype.register = function (participant) {
        this.participants.set(participant.getName(), participant);
    };
    ChatRoom.prototype.sendMessage = function (message, sender) {
        this.participants.forEach(function (participant) {
            if (participant !== sender) {
                participant.receive(message, sender);
            }
        });
    };
    return ChatRoom;
}());
// может отправлять сообщения и получать их от других участников через посредника.
var Participant = /** @class */ (function () {
    function Participant(name, chatRoom) {
        this.name = name;
        this.chatRoom = chatRoom;
        this.chatRoom.register(this);
    }
    Participant.prototype.getName = function () {
        return this.name;
    };
    Participant.prototype.send = function (message) {
        console.log("".concat(this.name, " \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435: \"").concat(message, "\""));
        this.chatRoom.sendMessage(message, this);
    };
    Participant.prototype.receive = function (message, sender) {
        console.log("".concat(this.name, " \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0442 ").concat(sender.getName(), ": \"").concat(message, "\""));
    };
    return Participant;
}());
var chatRoom = new ChatRoom();
var john = new Participant("John", chatRoom);
var jane = new Participant("Jane", chatRoom);
var bob = new Participant("Bob", chatRoom);
john.send("Привет, все!");
// Output:
// John отправляет сообщение: "Привет, все!"
// Jane получает сообщение от John: "Привет, все!"
// Bob получает сообщение от John: "Привет, все!"
jane.send("Доброе утро!");
// Output:
// Jane отправляет сообщение: "Доброе утро!"
// John получает сообщение от Jane: "Доброе утро!"
// Bob получает сообщение от Jane: "Доброе утро!"
