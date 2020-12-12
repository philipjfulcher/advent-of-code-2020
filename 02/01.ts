import { readFileIntoArray } from "../shared/read-file-into-array";
import { match } from "assert";

async function main() {
    const lines = await readFileIntoArray('input.txt');
    let validPasswords = 0;

    const lineParser = /([0-9]*)-([0-9]*) ([a-z]): (.*)/;

    lines.forEach(line => {
        const [_, min, max, letter, password] = lineParser.exec(line);
        const test = new RegExp(`${letter}`, 'g');
        const matches = password.match(test);

        if (matches && matches.length >= +min && matches.length <= +max) {
            validPasswords++;
        }
    });

    return validPasswords;
}

main().then(result => {
    console.log(result);
});


//answer: 660