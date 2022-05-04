const sendHttpRequest = require('../sendHttpRequest');
const axios = require('axios');
const artistSongs = require('../testData/artistSongs.json');
const search = require('../testData/search.json');
const songs = require('../testData/songs.json');
const artist = require('../testData/artist.json');
const { matchers } = require('jest-json-schema');
expect.extend(matchers);
const https = require('https');

describe('Genius API tests', () => {

    test('1) Artist songs - verify status', async () => {
        response = await axios.get('https://genius.p.rapidapi.com/artists/16775/songs', {
            // params: { q: 'Nolwenn Leroy' },
            headers: {
                'X-RapidAPI-Host': 'genius.p.rapidapi.com',
                'X-RapidAPI-Key': '584be602b2msha52a6d4e0aa3e1ap1de37ejsn5d8a1550c103'
            }

        })
        await expect(response.status).toEqual(200);
    });

    test('2) Artist songs - validate json schema', async () => {
        response = await axios.get('https://genius.p.rapidapi.com/artists/16775/songs', {
            headers: {
                'X-RapidAPI-Host': 'genius.p.rapidapi.com',
                'X-RapidAPI-Key': '584be602b2msha52a6d4e0aa3e1ap1de37ejsn5d8a1550c103'
            }
        })
        await expect(response.data).toMatchSchema(artistSongs);
    })

    test('3) Artist songs - status code for wrong X-RapidAPI-Key', async () => {
        const conf = {
            url: 'https://genius.p.rapidapi.com/artists/16775/songs',
            headers: {
                'X-RapidAPI-Host': 'genius.p.rapidapi.com',
                'X-RapidAPI-Key': '584be602b2msha52a6d4e0aa3e1ap1de37ejsn5d8a1550c10'
            }
        }

        response = await sendHttpRequest(conf);
        await expect(response).toBeValidStatusCode(403);
        await expect(response.data.message).toEqual('You are not subscribed to this API.');
    })

    test('4) Search - verify status', async () => {
        response = await axios.get('https://genius.p.rapidapi.com/search', {
            params: { q: 'Nolwenn Leroy' },
            headers: {
                'X-RapidAPI-Host': 'genius.p.rapidapi.com',
                'X-RapidAPI-Key': '584be602b2msha52a6d4e0aa3e1ap1de37ejsn5d8a1550c103'
            }

        })
        await expect(response.status).toEqual(200);
    });

    test('5) Search - validate json schema', async () => {
        response = await axios.get('https://genius.p.rapidapi.com/search', {
            params: { q: 'Nolwenn Leroy' },
            headers: {
                'X-RapidAPI-Host': 'genius.p.rapidapi.com',
                'X-RapidAPI-Key': '584be602b2msha52a6d4e0aa3e1ap1de37ejsn5d8a1550c103'
            }
        })
        await expect(response.data).toMatchSchema(search);
    })


    test('6) Search - status code for wrong X-RapidAPI-Key', async () => {
        const conf = {
            url: 'https://genius.p.rapidapi.com/search',
            params: { q: 'Nolwenn Leroy' },
            headers: {
                'X-RapidAPI-Host': 'genius.p.rapidapi.com',
                'X-RapidAPI-Key': '584be602b2msha52a6d4e0aa3e1ap1de37ejsn5d8a1550c10'
            }
        }

        response = await sendHttpRequest(conf);
        await expect(response).toBeValidStatusCode(403);
        await expect(response.data.message).toEqual('You are not subscribed to this API.');
    })


    test('7) Songs - verify status', async () => {
        response = await axios.get('https://genius.p.rapidapi.com/songs/442857', {

            headers: {
                'X-RapidAPI-Host': 'genius.p.rapidapi.com',
                'X-RapidAPI-Key': '584be602b2msha52a6d4e0aa3e1ap1de37ejsn5d8a1550c103'
            }

        })
        await expect(response.status).toEqual(200);
    });

    test('8) Songs - validate json schema', async () => {
        response = await axios.get('https://genius.p.rapidapi.com/songs/442857', {

            headers: {
                'X-RapidAPI-Host': 'genius.p.rapidapi.com',
                'X-RapidAPI-Key': '584be602b2msha52a6d4e0aa3e1ap1de37ejsn5d8a1550c103'
            }
        })
        await expect(response.data).toMatchSchema(songs);
    })


    test('9) Songs - status code for wrong X-RapidAPI-Key', async () => {
        const conf = {
            url: 'https://genius.p.rapidapi.com/songs/442857',

            headers: {
                'X-RapidAPI-Host': 'genius.p.rapidapi.com',
                'X-RapidAPI-Key': '584be602b2msha52a6d4e0aa3e1ap1de37ejsn5d8a1550c10'
            }
        }

        response = await sendHttpRequest(conf);
        await expect(response).toBeValidStatusCode(403);
        await expect(response.data.message).toEqual('You are not subscribed to this API.');
    })


    test('10) Artist - verify status', async () => {
        response = await axios.get('https://genius.p.rapidapi.com/artists/16775', {

            headers: {
                'X-RapidAPI-Host': 'genius.p.rapidapi.com',
                'X-RapidAPI-Key': '584be602b2msha52a6d4e0aa3e1ap1de37ejsn5d8a1550c103'
            }

        })
        await expect(response.status).toEqual(200);
    });

    test('11) Artist - validate json schema', async () => {
        response = await axios.get('https://genius.p.rapidapi.com/artists/16775', {

            headers: {
                'X-RapidAPI-Host': 'genius.p.rapidapi.com',
                'X-RapidAPI-Key': '584be602b2msha52a6d4e0aa3e1ap1de37ejsn5d8a1550c103'
            }
        })
        await expect(response.data).toMatchSchema(artist);
    })


    test('12) Artist - status code for wrong X-RapidAPI-Key', async () => {
        const conf = {
            url: 'https://genius.p.rapidapi.com/artists/16775',

            headers: {
                'X-RapidAPI-Host': 'genius.p.rapidapi.com',
                'X-RapidAPI-Key': '584be602b2msha52a6d4e0aa3e1ap1de37ejsn5d8a1550c10'
            }
        }

        response = await sendHttpRequest(conf);
        await expect(response).toBeValidStatusCode(403);
        await expect(response.data.message).toEqual('You are not subscribed to this API.');
    })


































});