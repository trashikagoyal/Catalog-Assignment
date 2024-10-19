const fs = require('fs');
console.log("Test Case 1:")
findConstantTerm('t1.json');
console.log("Test Case 2:")
findConstantTerm('t2.json');
function decodeValue(base, value) {
    return parseInt(value, base);
}
function lagrangeInterpolation(points) {
    let c = 0;
    const k = points.length;

    for (let i = 0; i < k; i++) {
        let xi = points[i][0];
        let yi = points[i][1];

        let li = 1;
        for (let j = 0; j < k; j++) {
            if (i !== j) {
                let xj = points[j][0];
                li *= (0 - xj) / (xi - xj);
            }
        }
        c += yi * li;
    }
    return c;
}
function findConstantTerm(filePath) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const n = data.keys.n;
    const k = data.keys.k;
    const points = [];
    for (let i = 1; i <= n; i++) {
        if (data[i]) {
            const x = parseInt(i);
            const base = parseInt(data[i].base);
            const value = data[i].value;
            const y = decodeValue(base, value);
            points.push([x, y]);
        }
    }

    const selectedPoints = points.slice(0, k);
    const constantTerm = lagrangeInterpolation(selectedPoints);

    console.log('Constant term (c):', constantTerm);
}
