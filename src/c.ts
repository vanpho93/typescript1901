interface Person {
    _id: string;
    name: string;
    age: number;
}

const teo = { _id: 'a', name: 'Teo', age: 10 };

const people: Person[] = [
    { _id: 'b', name: 'Ti', age: 15 },
    { _id: 'c', name: 'Tun', age: 11 },
    teo
];

let x: any;
