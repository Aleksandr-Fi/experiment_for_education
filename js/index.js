function wrapInParagraph(str) {
    let arr = str.split('\n')
    let sum = ''
    for (i = 0; i < arr.length; i++) {
        sum += `<p>${arr[i]}</p>\n`
    }
    return sum
}

const text = `Some
simple multiline
text`;

console.log(wrapInParagraph(text));

const text2 = 'some\ntext';

console.log(wrapInParagraph(text2)); // <p>some</p>
// <p>text</p>