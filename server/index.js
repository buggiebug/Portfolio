require("dotenv").config(".env");
const express = require("express");
const app = express();
const { HOST, PORT } = process.env;

const { TWITTER_API_KEY, TWITTER_API_KEY_SECRET, TWITTER_CLIENT_ID, TWITTER_CLIENT_SECRET, TWITTER_BEARER_TOKEN, TWITTER_ACCESS_TOKEN, TWITTER_TOKEN_SECRET } = process.env;
const { Client } = require("twitter-api-sdk");

(async function fetchTwits() {
    try {
        const client = new Client(TWITTER_BEARER_TOKEN);

        // const response = await client.tweets.usersIdTweets();
        // console.log("response", JSON.stringify(response, null, 2));

        // const response = await client.users.findMyUser({ "user.fields": ["name"] })
        // console.log("response", JSON.stringify(response, null, 2));

        // Test with a basic endpoint
        const response = await client.users.findUserByUsername("yehBuggie");
        console.log("response", JSON.stringify(response, null, 2));

    } catch (error) {
        console.log(error?.error || error?.message)
    }
}())


// function get(str) {
//     const length = str.length;
//     const idx = str.indexOf("i") !== -1 ? str.indexOf("i") : str.length;
//     console.log(idx, length);

//     return (str.slice(0, idx).split("").reverse().join("") + str.slice(idx + 1))
// }
// console.log(get("string"));



app.listen(PORT, () => {
    console.log(`server running on http://${HOST}:${PORT}`);
});

