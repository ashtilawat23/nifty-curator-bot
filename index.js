require('dotenv').config();
const {TwitterClient} = require('twitter-api-client');
const axios = require('axios');
const cheerio = require('cheerio');
const pretty = require('pretty');


const client = new TwitterClient({
    apiKey: process.env.CONSUMER_API_KEY, 
    apiSecret: process.env.CONSUMER_API_SECRET,
    accessToken: process.env.ACCESS_TOKEN,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
});

let rarityHomePageMarkup = '';

axios.get('https://opensea.io/rankings?category=new')
  .then((res) => {
    const $ = cheerio.load(res.data);
    const itemsCenter = pretty($('.Overflowreact__OverflowContainer-sc-10mm0lu-0 fqMVjm RankingsTableRowPrimaryreact__RankingsCollectionPageOverflow-sc-2buw7n-0 egizGf').html());
    console.log(itemsCenter);
  })
  .catch( (err) => {
    console.log(err);
  });

