require('dotenv').config()
const {TwitterClient} = require('twitter-api-client')

const client = new TwitterClient({
    apiKey: process.env.CONSUMER_API_KEY, 
    apiSecret: process.env.CONSUMER_API_SECRET,
    accessToken: process.env.ACCESS_TOKEN,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
});

client.tweets.statusesUpdate({
    status: "Testing! 1.. 2.. 3.."
}).then (res => {
    console.log("Your Tweet was sent!", res)
}).catch (err => {
    console.error(err)
});