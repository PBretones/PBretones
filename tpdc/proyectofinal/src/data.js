import { v4 as uuidv4 } from "uuid";

export const Data = () => {

    return [
        {
            name: "Kinsfolk",
            artist: "Aarigod",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
            id: uuidv4(),
            active: true,
            audio: "https://mp3.chillhop.com/serve.php/?mp3=12997",
            color: ["#a276ff", "white"]
        },

        {
            name: "Beyond Clouds",
            artist: "Saib",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/08cbb0848f669e1bd8b5a5152c4b7d20edf1b499-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9297",
            color: ["#a276ff", "white"]
        },

        {
            name: "Melancholy",
            artist: "Makzo",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11778",
            color: ["#a276ff", "white"]
        },

        {
            name: "Peaches",
            artist: "The Field Tapes",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11246",
            color: ["#a276ff", "white"]
        }
    ]
}

