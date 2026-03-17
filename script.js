// 
function isUppercase(char) {
    char == char.toUpperCase();
}
function isLowercase(char) {
    char == char.toLowerCase();
}
function morseTableGen() {
    var morseTable = {};
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,?\'!/()&:;=+-_"$@ ';
    var morseValues = [
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
    for (var i = 0; i < letters.length; i++) {
        morseTable[letters[i]] = morseValues[i];
    }
    console.log("Generated morse code:", morseTable);
    return morseTable;
}
var morseTable = morseTableGen();
var revMorseTable = {};
for (var key in morseTable) {
    if (morseTable.hasOwnProperty(key)) {
        var value = morseTable[key];
        revMorseTable[value] = key;
    }
}
function encode($textarea) {
    var text = $textarea.val().toUpperCase();
    var words = text.split(' ');
    var translatedWords = words.map(function (word) {
        var chars = word.split('');
        var morseChars = chars.map(function (char) {
            return morseTable[char] || char;
        });
        return morseChars.join(' ');
    });
    console.log("Translated Words", translatedWords.join('/'));
    return translatedWords.join('/');
}
function decode($textarea) {
    var morse = $textarea.val();
    var morseGroupsTable = morse.split('/');
    var translatedWords = morseGroupsTable.map(function (morseGroup) {
        var morseChars = morseGroup.split(' ');
        return morseChars
            .map(function (morseChar) {
            return revMorseTable[morseChar]
                || morseChar;
        })
            .join('');
    });
    return translatedWords.join(' ');
}
function copy($element) {
    $element.trigger("select");
    navigator.clipboard.writeText($element.val())
        .then(function () {
        console.log("Copied text to clipboard:", $element.val());
    })
        .catch(function (err) {
        console.error("Could not copy text to clipboard:", err);
    });
}
function main() {
    var encoderTextArea = $("textarea#encode-text");
    var decoderTextArea = $("textarea#decode-text");
    var encodeButton = $("#encode-button");
    var decodeButton = $("#decode-button");
    var encodeCopyButton = $("#encode-copy");
    var decodeCopyButton = $("#decode-copy");
    var key = $("input#key");
    console.log(encoderTextArea.val());
    console.log(decoderTextArea.val());
    encodeButton.on("click", function () {
        decoderTextArea.val(encode(encoderTextArea));
    });
    decodeButton.on("click", function () {
        encoderTextArea.val(decode(encoderTextArea));
    });
    encodeCopyButton.on("click", function () {
        copy(encoderTextArea);
    });
    decodeCopyButton.on("click", function () {
        copy(decoderTextArea);
    });
    return jQuery;
}
$(main());
