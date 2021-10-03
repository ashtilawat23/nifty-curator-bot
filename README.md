# nifty-curator-bot
Bot that runs the @niftycurator account on Twitter. 

# Initial Setup
1. Created an empty repo named Nifty-Curator-Bot. 
2. Cloned repo locally in a directory designated for the project. 
```
git clone https://github.com/ashtilawat23/nifty-curator-bot.git
```
3. Initialized a node application and created a default package.json.
```
npm init -y
```
4. Installed 'dotenv' and 'twitter-api-client'. 
```
npm i dotenv
npm i twitter-api-client
```
5. Created .env.sample file. The values that you need include: 
    - Cosumer API Key
    - Cosumer API Secret
    - Access Token
    - Access Token Secret
6. Created .env file. Copy/pasted values from Twitter Developer Portal.
7. See code in index.js to see how to post your first tweet!
