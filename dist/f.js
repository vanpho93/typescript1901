"use strict";
class Cat {
}
Cat.getNumberOfTail = 1;
// interface Countable {
//     getCount: () => number;
// }
function getCount() {
    return Promise.resolve(1);
}
getCount()
    .then(x => console.log(x));
