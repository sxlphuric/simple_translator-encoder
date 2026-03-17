// 


function isUppercase(char: string) {
    char==char.toUpperCase()
}
function isLowercase(char: string) {
    char==char.toLowerCase()
}

interface KVTable {
    [k: string]: string
}


function morseTableGen() {
    const morseTable: KVTable = {};
    const letters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,?\'!/()&:;=+-_"$@ ';
    const morseValues =
        [
            '.-', '-...', '-.-.', '-..', '.', '..-.',
            '--.', '....', '..', '.---',
            '-.-', '.-..', '--', '-.', '---',
            '.--.', '--.-', '.-.', '...', '-',
            '..-', '...-', '.--', '-..-', '-.--',
            '--..', '-----', '.----', '..---',
            '...--', '....-', '.....', '-....',
            '--...', '---..', '----.', '.-.-.-',
            '--..--', '..--..', '.----.', '-.-.--',
            '-..-.', '-.--.', '-.--.-',
            '.-...', '---...', '-.-.-.', '-...-',
            '.-.-.', '-....-', '..--.-',
            '.-..-.', '...-..-', '.--.-.'
        ];

    for (let i = 0; i < letters.length; i++) {
        morseTable[letters[i]] = morseValues[i];
    }
	console.log("Generated morse code:", morseTable)
    return morseTable;
}

const morseTable = morseTableGen()

const revMorseTable: KVTable = {};
for (const key in morseTable) {
    if (morseTable.hasOwnProperty(key)) {
        const value = morseTable[key];
        revMorseTable[value] = key;
    }
}

function encode($textarea: JQuery<HTMLElement>) {
    const text = ($textarea.val() as string).toUpperCase();
	const words = text.split(' ');
    const translatedWords =
        words.map((word) => {
            const chars = word.split('');
            const morseChars = chars.map((char: string) => {
                return morseTable[char] || char;
            });
            return morseChars.join(' ');
        });
	console.log("Translated Words", translatedWords.join('/'))
    return translatedWords.join('/');
}

function decode($textarea: JQuery<HTMLElement>) {
    const morse = $textarea.val() as string
	const morseGroupsTable = morse.split('/');
    const translatedWords =
        morseGroupsTable.map((morseGroup) => {
            const morseChars = morseGroup.split(' ');
            return morseChars
                .map((morseChar) => {
                    return revMorseTable[morseChar]
                        || morseChar;
                })
                .join('');
        });
    return translatedWords.join(' ');
}

function copy($element: JQuery<HTMLElement>) {
        $element.trigger("select")
		navigator.clipboard.writeText($element.val() as string)
        .then(
				() => {
					console.log("Copied text to clipboard:", $element.val())
				}
			)
			.catch(
				(err) => {
					console.error("Could not copy text to clipboard:", err)
				}
			)
	
}

function main(): JQueryStatic {
    let encoderTextArea = $("textarea#encode-text");
    let decoderTextArea = $("textarea#decode-text");
	let encodeButton = $("#encode-button");
	let decodeButton = $("#decode-button");
	let encodeCopyButton = $("#encode-copy");
	let decodeCopyButton = $("#decode-copy");
    let key = $("input#key");

    console.log(encoderTextArea.val());
    console.log(decoderTextArea.val());

    encodeButton.on("click", function() {
        decoderTextArea.val(encode(encoderTextArea))
    })
	decodeButton.on("click", function() {
        encoderTextArea.val(decode(encoderTextArea))
    })
	encodeCopyButton.on("click", function() {
        copy(encoderTextArea)
    })
	decodeCopyButton.on("click", function() {
        copy(decoderTextArea)
    })
    return jQuery
}

$(main());

