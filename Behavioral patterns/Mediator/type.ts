// Посредник, который обрабатывает отправку и получение сообщений между участниками чата.
//  При отправке сообщения посредник (`ChatRoom`) передает его всем другим участникам, кроме отправителя.
class ChatRoom {
    private participants: Map<string, Participant> = new Map();

    public register(participant: Participant): void {
        this.participants.set(participant.getName(), participant);
    }

    public sendMessage(message: string, sender: Participant): void {
        this.participants.forEach((participant) => {
            if (participant !== sender) {
                participant.receive(message, sender);
            }
        });
    }
}

// может отправлять сообщения и получать их от других участников через посредника.
class Participant {
    private name: string;
    private chatRoom: ChatRoom;

    constructor(name: string, chatRoom: ChatRoom) {
        this.name = name;
        this.chatRoom = chatRoom;
        this.chatRoom.register(this);
    }

    public getName(): string {
        return this.name;
    }

    public send(message: string): void {
        console.log(`${this.name} отправляет сообщение: "${message}"`);
        this.chatRoom.sendMessage(message, this);
    }

    public receive(message: string, sender: Participant): void {
        console.log(`${this.name} получает сообщение от ${sender.getName()}: "${message}"`);
    }
}

const chatRoom = new ChatRoom();

const john = new Participant("John", chatRoom);
const jane = new Participant("Jane", chatRoom);
const bob = new Participant("Bob", chatRoom);

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
