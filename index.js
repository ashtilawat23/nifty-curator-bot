require('dotenv').config()
const {TwitterApi} = require('twitter-api-v2')

const client = new TwitterApi({
    appKey: process.env.CONSUMER_API_KEY, 
    appSecret: process.env.CONSUMER_API_SECRET,
    accessToken: process.env.ACCESS_TOKEN,
    accessSecret: process.env.ACCESS_TOKEN_SECRET,
});
const v1Client = client.v1;
const v2Client = client.v2;

