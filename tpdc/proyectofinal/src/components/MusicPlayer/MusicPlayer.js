import React, { useState, useRef } from 'react';
import { Song } from './Song';
import { Player } from './Player';
import { Library } from './Library';
import { Nav } from './Nav';

import { Data } from '../../data';


export const MusicPlayer = () => {

    // we use Ref
    const audioRef = useRef(null);
    // States
    // State of song being played
    const [songs, setSongs] = useState(Data());
    const [currentSong, setCurrentSong] = useState(songs[1]);
    const [isPlaying, setIsPlaying] = useState(false);

    //State of song time & duration
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationPercentage: 0,
    });
    const [libraryStatus, setLibraryStatus] = useState(false);
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        // Calculate Percentage
        const roundedCurrent = Math.round(current);
        const roundedDuration = Math.round(duration);
        const animation = Math.round((roundedCurrent / roundedDuration) * 100);

        setSongInfo({ ...songInfo, currentTime: current, duration, animationPercentage: animation })
    };

    const songEndHandler = async () => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        await setCurrentSong(songs[(currentIndex + 1) % songs.length])
        if (isPlaying) { audioRef.current.play() }

    }


    /*  const myAudioTest = () => {
 
 
         // Replace ./data.json with your JSON feed
         fetch('localhost:3005/tracks/604189a46cff7475371a91e1.mp3', {
             method: 'GET',
             headers: {
                 'Content-Type': 'application/json'
             }
         })
             .then(response => {
                 return response.json();
             }).then(data => {
                 // Work with JSON data here
                 console.log(data);
             })
     }; */


    return (
        <div className="tester">
            <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
            <Song currentSong={currentSong} />
            <Player setSongs={setSongs} setCurrentSong={setCurrentSong} songs={songs} setSongInfo={setSongInfo} songInfo={songInfo} audioRef={audioRef} setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong={currentSong} />
            <Library libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} />
            <audio onEnded={songEndHandler} onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
        </div>
    );
}