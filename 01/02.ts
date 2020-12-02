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
        lines.forEach(secondLine => {
            lines.forEach(thirdLine => {
                if (line !== secondLine && line !== thirdLine && secondLine !== thirdLine && line + secondLine + thirdLine === 2020) {
                    total = line * secondLine * thirdLine;

                }
            })
        });
    });

    console.log(total);
})

//total: 303394260