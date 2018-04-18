interface Talkable {
    talk: () => void;
}

class Person2 implements Talkable{
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    talk() {
        console.log('Hello, I am ' + this.name);
    }
}

class Cow implements Talkable {
    talk() {
        console.log('Ohhhh');
    }
}

function listen(obj: Talkable) {
    obj.talk();
}

const p = new Person2('Teo');
const c = new Cow();

listen(p);
listen(c);