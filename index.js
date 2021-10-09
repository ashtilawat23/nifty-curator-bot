require('dotenv').config();
const {TwitterClient} = require('twitter-api-client');
const puppeteer = require('puppeteer');

const client = new TwitterClient({
    apiKey: process.env.CONSUMER_API_KEY, 
    apiSecret: process.env.CONSUMER_API_SECRET,
    accessToken: process.env.ACCESS_TOKEN,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
});
