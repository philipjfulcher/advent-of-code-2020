import { createInterface } from 'readline';

import { createReadStream } from 'fs';

let rl = createInterface({
    input: createReadStream('input.txt')
});

const lines: number[] = []

rl.on('line', (line) => lines.push(parseInt(line, 10)));

rl.on('close', () => {
    let total = 0;
    lines.forEach(line => {
        const secondLine = lines.find(lineToCompare => {
            return line !== lineToCompare && line + lineToCompare === 2020
        });

        if(secondLine !== undefined) {
            total = line * secondLine;
        }
    });

    console.log(total);
})

//total: 224436