module.exports = function check(str, bracketsConfig) {

    let sequenceB = str.split(''),
        brackets = {},
        openingB = [],
        closingB = [];

    for (let [op, cl] of bracketsConfig) {
        brackets[op] = brackets[cl] = [];
        openingB.push(op);
        closingB.push(cl);
    }

    if (closingB.includes(sequenceB[0]) && !openingB.includes(sequenceB[0])) return false;

    for (let i = 0; i < sequenceB.length; i++) {
        let brace = sequenceB[i];

        if (closingB.includes(brace) && brackets[brace].length) {
            let el = brackets[brace].pop();
            if ((i - el) % 2 === 0) return false;
        } else {
            brackets[brace].push(i);
        }
    }

    for (let exist of Object.values(brackets)) {
        if (exist.length) return false;
    }
    return true;
};


