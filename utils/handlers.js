const fetch = require('node-fetch');

const { Philosopher } = require('../models');

const getDaysSinceMayTenth = () => {
    const mayTenth = new Date(2021, 5 - 1, 10);
    console.log(mayTenth);
    const today = new Date();
    console.log(today);
    const diff = Math.round((today - mayTenth) / (1000 * 60 * 60 * 24));
    console.log(diff);
    return diff;
};

const getYoutubeUrl = async (philosopherData) => {
    const YTparams = {
        part: 'snippet',
        type: 'video',
        videoSyndicated: 'true',
        order: 'relevance',
        maxResults: 1,
        // key: "AIzaSyA-PERyp6RWtIztoWvv4dynZlpds03hj-o",
        key: 'AIzaSyBWH8ojYF9YRbijUhlBQeCjuLtH6SQTIzQ',
        q: philosopherData.name + ' philosophy',
        safeSearch: 'none',
    };
    const url = 'https://www.googleapis.com/youtube/v3/search';
    console.log('===============')
    console.log(YTparams);
    console.log(url);

    const youtubeResults = await fetch(url, YTparams);
    console.log(youtubeResults);
    return youtubeResults.items;
};

const getWikiData = async (philosopherData) => {
    let contentUrl =
        'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exlimit=max&origin=*&explaintext&exintro&redirects=&titles=';
    const data = await fetch(
        `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${philosopherData.name}&format=json`
    );
    // console.log(data)
    const object = await data.json();
    // console.log(object)

    const searchTitle = object[1][0];
    const searchURL = contentUrl + searchTitle;
    // console.log(searchURL);

    const contentData = await fetch(searchURL, { method: 'GET' });
    const wikiData = await contentData.json();

    const page = wikiData.query.pages;
    const pageID = Object.keys(page)[0];
    const content = page[pageID].extract;
    const readMoreURL = 'https://en.wikipedia.org/wiki/' + page[pageID].title;

    const returnable = { content, readMoreURL };

    // console.log(returnable);
    return returnable;
};

const fillPhilosopherData = async (id, philosopherData) => {
    let newPhilosopherData = philosopherData;
    const yt = await getYoutubeUrl(newPhilosopherData);
    const wiki = await getWikiData(newPhilosopherData);

    newPhilosopherData.about = wiki.content;
    newPhilosopherData.wikiLink = wiki.readMoreURL;

    await Philosopher.update(newPhilosopherData, { where: { id: id } });
    return newPhilosopherData;
};

module.exports = { getDaysSinceMayTenth, fillPhilosopherData };
