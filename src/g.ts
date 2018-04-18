function getArrayOfAValue<T>(a: T): T[] {
    return [a, a, a];
}

const arrStr = getArrayOfAValue('xyz').filter(x => x.length);

let l: Promise<number>;
