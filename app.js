const axios = require('axios');
const cheerio = require('cheerio');
const pretty = require('pretty');

const markup = `
<ul class='colors'>
    <li class='colors blue'>Blue</li>
    <li class='colors red'>Red</li>
    <li class='colors green'>Green</li>
</ul>
`;

const $ = cheerio.load(markup);
console.log(pretty($.html()));