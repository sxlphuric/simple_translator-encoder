const encoder = document.getElementById("ta1");
const decoder = document.getElementById("ta2");
const key = document.getElementById("key");
const DecodedToEncoded = {
    'A': '2111112111112000012011112', 'B': '2111112111112000012001112', 'C': '2111112111112000012000112',
    'D': '2111112111112000012000012', 'E': '2111112111112000012000002', 'F': '2111112111112000012100002',
    'G': '2111112111112000012110002', 'H': '2111112111112000012111002', 'I': '2111112111112000012111102',
    'J': '2111112111112000012012', 'K': '211111211111200001210002', 'L': '211111211111200001210102',
    'M': '21111121111120000121002', 'N': '211111211111200001202', 'O': '211111211111200001200102',
    'P': '2111112111112000002111112', 'Q': '2111112111112000002011112', 'R': '2111112111112000002001112',
    'S': '2111112111112000002000112', 'T': '2111112111112000002000012', 'U': '2111112111112000002000002',
    'V': '2111112111112000002100002', 'W': '2111112111112000002110002', 'X': '2111112111112000002111002',
    'Y': '2111112111112000002111102', 'Z': '2111112111112000002012', ' ': '2111112111112001112111112',
    '0': '2111112111112000112111112', '1': '2111112111112000112011112', '2': '2111112111112000112001112',
    '3': '2111112111112000112000112', '4': '2111112111112000112000012', '5': '2111112111112000112000002',
    '6': '2111112111112000112100002', '7': '2111112111112000112110002', '8': '2111112111112000112111002',
    '9': '2111112111112000112111102', '.': '211111211111200111202', ',': '211111211111200111210102'
}

const DecodedToEncoded2 = {
    'A': '11111211111200001201111', 'B': '11111211111200001200111', 'C': '11111211111200001200011',
    'D': '11111211111200001200001', 'E': '11111211111200001200000', 'F': '11111211111200001210000',
    'G': '11111211111200001211000', 'H': '11111211111200001211100', 'I': '11111211111200001211110',
    'J': '11111211111200001201', 'K': '1111121111120000121000', 'L': '1111121111120000121010',
    'M': '111112111112000012100', 'N': '1111121111120000120', 'O': '1111121111120000120010',
    'P': '11111211111200000211111', 'Q': '11111211111200000201111', 'R': '11111211111200000200111',
    'S': '11111211111200000200011', 'T': '11111211111200000200001', 'U': '11111211111200000200000',
    'V': '11111211111200000210000', 'W': '11111211111200000211000', 'X': '11111211111200000211100',
    'Y': '11111211111200000211110', 'Z': '11111211111200000201', ' ': '11111211111200111211111',
    '0': '11111211111200011211111', '1': '11111211111200011201111', '2': '11111211111200011200111',
    '3': '11111211111200011200011', '4': '11111211111200011200001', '5': '11111211111200011200000',
    '6': '11111211111200011210000', '7': '11111211111200011211000', '8': '11111211111200011211100',
    '9': '11111211111200011211110', '.': '1111121111120011120', ',': '1111121111120011121010'
}

//const EncodedToDecoded = Object.fromEntries(Object.entries(DecodedToEncoded).map(([k, v]) => [v, k]));

const EncodedToDecoded = Object.fromEntries(Object.entries(DecodedToEncoded2).map(([letter, number]) => [number, letter]));

//
// 2111112111112000012011112 / 2111112111112000012001112 / 2111112111112000012000112 / 2111112111112000012000012 / 2111112111112000012000002 / 2111112111112000012100002 / 2111112111112000012110002 / 2111112111112000012111002 / 2111112111112000012111102 / 2111112111112000012012 / 211111211111200001210002 / 211111211111200001210102 / 21111121111120000121002 / 211111211111200001202 / 211111211111200001200102 / 2111112111112000002111112 / 2111112111112000002011112 / 2111112111112000002001112 / 2111112111112000002000112 / 2111112111112000002000012 / 2111112111112000002000002 / 2111112111112000002100002 / 2111112111112000002110002 / 2111112111112000002111002 / 2111112111112000002111102 / 2111112111112000002012 / 2111112111112001112111112 / 2111112111112000112111112 / 2111112111112000112011112 / 2111112111112000112001112 / 2111112111112000112000112 / 2111112111112000112000012 / 2111112111112000112000002 / 2111112111112000112100002 / 2111112111112000112110002 / 2111112111112000112111002 / 2111112111112000112111102 / 211111211111200111202 / 21111121111120011121010
//----- ----- ....- .---- / ----- ----- ....- ..--- / ----- ----- ....- ...-- / ----- ----- ....- ....- / ----- ----- ....- ..... / ----- ----- ....- -.... / ----- ----- ....- --... / ----- ----- ....- ---.. / ----- ----- ....- ----. / ----- ----- ....- .- / ----- ----- ....- -... / ----- ----- ....- -.-. / ----- ----- ....- -.. / ----- ----- ....- . / ----- ----- ....- ..-. / ----- ----- ..... ----- / ----- ----- ..... .---- / ----- ----- ..... ..--- / ----- ----- ..... ...-- / ----- ----- ..... ....- / ----- ----- ..... ..... / ----- ----- ..... -.... / ----- ----- ..... --... / ----- ----- ..... ---.. / ----- ----- ..... ----. / ----- ----- ..... .- / ----- ----- ..--- ----- / ----- ----- ...-- ----- / ----- ----- ...-- .---- / ----- ----- ...-- ..--- / ----- ----- ...-- ...-- / ----- ----- ...-- ....- / ----- ----- ...-- ..... / ----- ----- ...-- -.... / ----- ----- ...-- --... / ----- ----- ...-- ---.. / ----- ----- ...-- ----. / ----- ----- ..--- . / ----- ----- ..--- -.-.
//0041 0042 0043 0044 0045 0046 0047 0048 0049 004A 004B 004C 004D 004E 004F 0050 0051 0052 0053 0054 0055 0056 0057 0058 0059 005A 0020 0030 0031 0032 0033 0034 0035 0036 0037 0038 0039 002E 002C
//ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789.,
//the space is important--> ^ <--

function encode() {
    if (key.value === 1) {
        decoder.value = encoder.value
            .toUpperCase()
            .split('')
            .map(char => DecodedToEncoded[char] || '?')
            .replaceAll(0, 5)
            .replaceAll(1, 4)
            .replaceAll(5, 1)
            .replaceAll(4, 0)
            .join('');
    }
    else {
        if (key.value === 2) {
            decoder.value = encoder.value
                .toUpperCase()
                .split('')
                .map(char => DecodedToEncoded[char] || '?')
                .join('');
        }
        else {
            if (key.value === 3) {
                decoder.value = encoder.value
                    .toUpperCase()
                    .split('')
                    .map(char => DecodedToEncoded[char] || '?')
                    .join('');
            }
            else {
                if (key.value === 4) {
                    decoder.value = encoder.value
                        .toUpperCase()
                        .split('')
                        .map(char => DecodedToEncoded[char] || '?')
                        .join('');
                }
                else {
                    if (key.vlaue === 5) {
                        decoder.value = encoder.value
                            .toUpperCase()
                            .split('')
                            .map(char => DecodedToEncoded[char] || '?')
                            .join('');
                    }
                    else {
                        if (key.value === 6) {
                            decoder.value = encoder.value
                                .toUpperCase()
                                .split('')
                                .map(char => DecodedToEncoded[char] || '?')
                                .join('');
                        }
                        else {
                            if (key.value === 7) {
                                decoder.value = encoder.value
                                    .toUpperCase()
                                    .split('')
                                    .map(char => DecodedToEncoded[char] || '?')
                                    .join('');
                            }
                            else {
                                if (key.value === 8) {
                                    decoder.value = encoder.value
                                        .toUpperCase()
                                        .split('')
                                        .map(char => DecodedToEncoded[char] || '?')
                                        .join('');
                                }
                                else {
                                    if (key.vlaue === 9) {
                                        decoder.value = encoder.value
                                            .toUpperCase()
                                            .split('')
                                            .map(char => DecodedToEncoded[char] || '?')
                                            .join('');
                                    }
                                    else {
                                        decoder.value = encoder.value
                                            .toUpperCase()
                                            .split('')
                                            .map(char => DecodedToEncoded[char] || '?')
                                            .join('');
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function decode() {
    if (key.value === 1) {
        encoder.value = `2${decoder.value}2`
            .trim()
            .split('22')
            .replace("0", "5")
            .replace("1", "4")
            .replace("5", "1")
            .replace("4", "0")
            .map(code => EncodedToDecoded[code] || '')
            .join('');
    }
    else {
        if (key.value === 2) {
            encoder.value = `2${decoder.value}2`
                .trim()
                .split('22')
                .map(code => EncodedToDecoded[code] || '')
                .join('');
        }
        else {
            if (key.value === 3) {
                encoder.value = `2${decoder.value}2`
                    .trim()
                    .split('22')
                    .map(code => EncodedToDecoded[code] || '')
                    .join('');
            }
            else {
                if (key.value === 4) {
                    encoder.value = `2${decoder.value}2`
                        .trim()
                        .split('22')
                        .map(code => EncodedToDecoded[code] || '')
                        .join('');
                }
                else {
                    if (key.vlaue === 5) {
                        encoder.value = `2${decoder.value}2`
                            .trim()
                            .split('22')
                            .map(code => EncodedToDecoded[code] || '')
                            .join('');
                    }
                    else {
                        if (key.value === 6) {
                            encoder.value = `2${decoder.value}2`
                                .trim()
                                .split('22')
                                .map(code => EncodedToDecoded[code] || '')
                                .join('');
                        }
                        else {
                            if (key.value === 7) {
                                encoder.value = `2${decoder.value}2`
                                    .trim()
                                    .split('22')
                                    .map(code => EncodedToDecoded[code] || '')
                                    .join('');
                            }
                            else {
                                if (key.value === 8) {
                                    encoder.value = `2${decoder.value}2`
                                        .trim()
                                        .split('22')
                                        .map(code => EncodedToDecoded[code] || '')
                                        .join('');
                                }
                                else {
                                    if (key.vlaue === 9) {
                                        encoder.value = `2${decoder.value}2`
                                            .trim()
                                            .split('22')
                                            .map(code => EncodedToDecoded[code] || '')
                                            .join('');
                                    }
                                    else {
                                        encoder.value = `2${decoder.value}2`
                                            .trim()
                                            .split('22')
                                            .map(code => EncodedToDecoded[code] || '')
                                            .join('');
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function copyDecoded() {
    var copyText = document.getElementById("ta1");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}

function copyEncoded() {
    var copyText = document.getElementById("ta2");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}