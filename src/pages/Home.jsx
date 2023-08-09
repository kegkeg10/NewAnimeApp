import { useState, useEffect } from 'react';

const Home = () => {
    const [randomAnime, setRandomAnime] = useState('');

    useEffect(() => {
        // Define the API URL
        const apiUrl = 'https://api.jikan.moe/v4/random/anime';

        // Make the API request
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setRandomAnime(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    return (
        <div>
        <h2 className="text-3xl font-bold underline">Random Anime</h2>
        {randomAnime ? (
            <div>
            <p>Title: {randomAnime.data.title}</p>
            <p>Episode Count: {randomAnime.data.episodes}</p>
            <p>Score: {randomAnime.data.score}</p>
            <p>Rank: {randomAnime.data.rank}</p>
            </div>
        ) : (
            <p>Loading...</p>
        )}
        </div>
    );
};

export default Home;