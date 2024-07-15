const getter = <T>(value: T): T => {
    return value;
};

interface Client<T> {
    value: T;
}

const client: Client<string> = {
    value: "Алексей",
};

class User<T> {
    constructor(public name: T) {}

    public getName() {
        return this.name;
    }
}

const newUser = new User<string>("Юсер");
