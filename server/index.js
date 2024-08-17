require("dotenv").config(".env");
const express = require("express");
const app = express();
const { HOST, PORT } = process.env;

const { TWITTER_API_KEY, TWITTER_API_KEY_SECRET, TWITTER_CLIENT_ID, TWITTER_CLIENT_SECRET, TWITTER_BEARER_TOKEN, TWITTER_ACCESS_TOKEN, TWITTER_TOKEN_SECRET } = process.env;
const { TwitterApi } = require("twitter-api-v2");

const twitterClient = new TwitterApi({
    appKey: TWITTER_API_KEY,
    appSecret: TWITTER_API_KEY_SECRET,
    clientId: TWITTER_CLIENT_ID,
    clientSecret: TWITTER_CLIENT_SECRET,
    accessToken: TWITTER_ACCESS_TOKEN,
    accessSecret: TWITTER_TOKEN_SECRET
});

app.get("/", async (req, res) => {
    try {
        const readOnlyClient = twitterClient.readOnly;
        const user = await readOnlyClient.currentUserV2();
        console.log(user);
        const response = await readOnlyClient.v2.usersByUsernames("yehBuggie");
        return res.json(response);
    } catch (error) {
        return res.status(error.code).json({ error });
    }
});

app.get("/me", async (req, res) => {
    try {
        const response = await twitterClient.currentUser()
        return res.json(response);
    } catch (error) {
        return res.status(error.code).json({ error });
    }
});

app.listen(PORT, () => {
    console.log(`server running on http://${HOST}:${PORT}`);
});

