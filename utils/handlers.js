const fetch = require('node-fetch');

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
    console.log('hello');

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
    const object = await data.json();

    const searchTitle = object[1][0];
    const searchURL = contentUrl + searchTitle;

    const contentData = await fetch(searchURL);
    const wikiData = await contentData.json();
    console.log(wikiData);
    return wikiData;
};

const fillPhilosopherData = async (id, philosopherData) => {
    let newPhilosopherData = philosopherData;
    getYoutubeUrl(newPhilosopherData);
    getWikiData(newPhilosopherData);
    return newPhilosopherData;
};

module.exports = { getDaysSinceMayTenth, fillPhilosopherData };
