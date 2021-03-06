import React from 'react';
import { LibrarySong } from './LibrarySong';
import first from '../../images/01.mp3';
import second from '../../images/02.mp3';
import third from '../../images/03.mp3';



export const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus }) => {
    const audioArray = [first, second, third];

    return (

        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="">
                {songs.map(song => (
                    <LibrarySong setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} key={song.id} id={song.id} songs={songs} {...{ setCurrentSong, song }} />
                ))}
            </div>
        </div>

    )


}