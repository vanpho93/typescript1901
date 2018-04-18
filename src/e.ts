interface Person3 {
    name: string;
    age: number;
    school?: {
        name: string;
        address: string;
    }
}

const h: Person3 = {
    name: 'x',
    age: 10,
    school: {
        name: '1',
        address: '1'
    }
};

const i: Person3 = {
    name: 'x',
    age: 10
};

interface Labeled {
    label: string
}

function printLabel(labelledObj: Labeled) {
    console.log(labelledObj.label)
}

// class Octopus {
//     readonly name: string;
//     readonly numberOfLegs: number = 8;
//     constructor (theName: string) {
//         this.name = theName;
//     }
// }
// let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // error! name is readonly.
class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(public name: string) {
    }
}

const a = new Octopus('x');

console.log(a.name);
a.name = 'g';
console.log(a.name);
