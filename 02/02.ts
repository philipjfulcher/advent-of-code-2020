import { readFileIntoArray } from "../shared/read-file-into-array";
import { match } from "assert";

async function main() {
    const lines = await readFileIntoArray('input.txt');
    let validPasswords = 0;

    const lineParser = /([0-9]*)-([0-9]*) ([a-z]): (.*)/;

    lines.forEach(line => {
        const [_, firstPosition, secondPosition, letter, password] = lineParser.exec(line);
        const charAtFirstPosition = password.charAt(+firstPosition-1)
        const charAtSecondPosition = password.charAt(+secondPosition-1)

        if ( (charAtFirstPosition === letter && charAtSecondPosition !== letter) ||  (charAtFirstPosition !== letter && charAtSecondPosition === letter) ) {
            validPasswords++;
        }
    });

    return validPasswords;
}

main().then(result => {
    console.log(result);
});


//answer: 530