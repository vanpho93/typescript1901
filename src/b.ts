enum MatchResult { Win, Lose, Draw }

function getPoint(result: MatchResult) {
    if (result === MatchResult.Win) return 3;
    if (result === MatchResult.Draw) return 1;
    return 0;
}

console.log(getPoint(MatchResult.Win));
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; 

// function getTotal (): number {
//     return 'x';
// }
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;