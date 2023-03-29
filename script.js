'use strict'

//const ALBUM_PICTURE_PLACES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const PICTURE_NUMBERS_NORMAL = Array.from(
    { length: 140 },
    (_, index) => (index + 1).toString()
)
const PICTURE_NUMBERS_VALUES = Array.from(
    { length: 26 },
    (_, index) => "H" + (index + 1)
)
const PICTURE_ALBUM = PICTURE_NUMBERS_NORMAL.concat(PICTURE_NUMBERS_VALUES)

console.log(PICTURE_ALBUM)

let missing = [
    '4', '6', '7', '9', '12', '19', '20', '22', '26', '27', '28', '31', '32', '37', '39', '41', '43', '53', '55', '59', '61', '67', '69', '70',
    '76', '80', '83', '86', '91', '95', '96', '99', '100', '104', '109', '111', '113', '119', '121', '123', '125', '130', '131', '132', '133',
    'H1', 'H5', 'H8', 'H9', 'H10', 'H11', 'H17', 'H20', 'H21', 'H23', 'H24', 'H26' 
]

const uniqueValues = PICTURE_ALBUM.filter(value => !missing.includes(value))
console.log(`${uniqueValues.map(elem => `Bild ${elem} ist vorhanden\n`)}`);
console.log(`${missing.map(elem => `Bild ${elem} ist nicht vorhanden\n`)}`);

let result = ((PICTURE_ALBUM.length - missing.length) / PICTURE_ALBUM.length) * 100
console.log((Math.round(result)) + '% des Albums hast du bereits gesammelt.')

