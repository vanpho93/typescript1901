"use strict";
var MatchResult;
(function (MatchResult) {
    MatchResult[MatchResult["Win"] = 0] = "Win";
    MatchResult[MatchResult["Lose"] = 1] = "Lose";
    MatchResult[MatchResult["Draw"] = 2] = "Draw";
})(MatchResult || (MatchResult = {}));
function getPoint(result) {
    if (result === MatchResult.Win)
        return 3;
    if (result === MatchResult.Draw)
        return 1;
    return 0;
}
console.log(getPoint(MatchResult.Win));
let notSure = 4;
notSure = "maybe a string instead";
notSure = false;
// function getTotal (): number {
//     return 'x';
// }
let someValue = "this is a string";
let strLength = someValue.length;
