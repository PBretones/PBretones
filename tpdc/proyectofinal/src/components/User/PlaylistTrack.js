import React, { useState } from 'react';

export const PlaylistTrack = ({ pases, userPlaylist }) => {
    const [loadPase, setLoadPase] = useState(false);


    const ReaddTrack = (pases) => {
        console.log(pases);
        if (localStorage.getItem("audios")) {
            const lastArray = JSON.parse(localStorage.getItem("audios"));
            console.log(lastArray);
            const paseToArray = pases.audios;
            console.log(paseToArray);
            const tipo = pases.tipo;
            const picture = pases.picture;
            console.log(paseToArray);
            paseToArray.forEach(element => {
                const thirdObject = { ...element, picture, tipo }
                lastArray.push(thirdObject);
            });

            console.log(lastArray);

            localStorage.setItem("audios", JSON.stringify(lastArray));
            return lastArray;
        }
        else {
            console.log("ADIOS");
            const lastArray = [];
            let firstArray = pases.audios;
            const tipo = pases.tipo;
            const picture = pases.picture;

            firstArray.forEach(element => {
                const thirdObject = { ...element, picture, tipo }
                lastArray.push(thirdObject);

            });
            localStorage.setItem("audios", JSON.stringify(lastArray))
            return lastArray;

        }

    };
    const RedeleteTrack = (audiosId) => {

        userPlaylist.map((pases, index) => {
            if (pases._id === audiosId) {
                userPlaylist.splice(index, 1);
            }
        });
        return userPlaylist;


    }

    const togglePase = () => {
        if (loadPase === true) {
            RedeleteTrack(pases._id);
            setLoadPase(false);

        }
        else {
            ReaddTrack(pases);
            setLoadPase(true);
            ;
        }

    }
    return (
        <div className="customContainer">
            <div className="customPase">
                <div className="imgBox">
                    <img src={pases.picture} alt={pases.tipo} className="center" />
                </div>
                <div className="infoBox">
                    <h4>{pases.tipo}
                        <h4>{pases.year}</h4>
                    </h4>
                    <div className="infoToggle" id={pases._id} onClick={togglePase}>
                        <input type="checkbox" name="" />
                    </div>
                </div>
            </div>
        </div>)
}