import React from 'react';
import { LibrarySong } from './LibrarySong';




export const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus }) => {


    return (

        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="">
                {songs.map(song => (
                    <LibrarySong setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} key={song._id} id={song._id} songs={songs} {...{ setCurrentSong, song }} />
                ))}

            </div>
        </div>

    )


}