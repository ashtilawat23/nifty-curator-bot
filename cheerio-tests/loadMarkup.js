const cheerio = require('cheerio');
const pretty = require('pretty');

const markup = `
<ul class='colors'>
    <li class='blue'>Blue</li>
    <li class='red'>Red</li>
    <li class='green'>Green</li>
</ul>
`;

const $ = cheerio.load(markup);
console.log(pretty($.html()));

const blue = $('.blue');
const red = $('.red');
const green = $('.green');

console.log(blue.text(), red.text(), green.text());