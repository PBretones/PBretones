import React from 'react';


export const LibrarySong = ({ song, songs, setCurrentSong, audioRef, isPlaying, id, setSongs }) => {

    const songSelectHandler = async () => {
        await setCurrentSong(song);


        const newSongs = songs.map((song) => {
            if (song.id === id) {

                return {
                    ...song,
                    active: true,
                }
            } else {
                return {
                    ...song,
                    active: false
                }
            }

        });
        setSongs(newSongs);

        // is it playing?
        if (isPlaying) { audioRef.current.play() };

    }

    return (
        <div onClick={songSelectHandler} className={`librarySong ${song.active ? 'selected' : ""}`} >
            <div className="songDescription">
                <img src={song.cover} alt="portada"></img>
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
}
