import { createInterface } from 'readline';

import { createReadStream } from 'fs';



export function readFileIntoArray(file: string): Promise<string[]> {
    let rl = createInterface({
        input: createReadStream(file)
    });
    
    const promise = new Promise<string[]>((resolve, reject) => {
        const lines: string[] = [];

        rl.on('line', (line) => lines.push(line));

        rl.on('close', () => {
            resolve(lines);
        })
    });

    return promise;

}