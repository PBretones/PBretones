import { Lista } from './Lista';
import Tabla from './Tabla';
import Counter from './Counter';

function Tienda() {
    const tienda = {

        eurogames: [
            { id: 27, productos: "Mountain King", marca: "Burnt Island Games", modelo: "Deluxe", precio: 60 },
            { id: 28, productos: "El Foro de Trajano", marca: "Maldito Games", modelo: "Retail", precio: 30 },
            { id: 29, productos: "Bunny Kingdom", marca: "DEVIR", modelo: "Retail", precio: 45 }
        ],

        kickstarter: [
            { id: 30, productos: "Nemesis", marca: "Awaken Realms", pledge: "Captain Collection", precio: 100 },
            { id: 31, productos: "Rising Sun", marca: "CMON", pledge: "Daimyo", precio: 90 },
            { id: 32, productos: "Tidal Blades", marca: "Druid City Games", pledge: "Deluxe Edition", precio: 75 }
        ],

        wargames: [
            { id: 33, productos: "Twilight Struggle", marca: "GMT Games", theme: "Cold War", precio: 50 },
            { id: 34, productos: "Root", marca: "Leder Games", theme: "Forest Tales", precio: 50 },
            { id: 35, productos: "War of the Ring", marca: "Ares Games", theme: "LOTR", precio: 60 }

        ]


    };

    return (
        <>
            <div>
                <Lista categoria="Eurogames" amigos={tienda.eurogames} />
                <Lista categoria="Kickstarter" amigos={tienda.kickstarter} />
                <Lista categoria="Wargames" amigos={tienda.wargames} />

            </div>

            <div>
                <Tabla amigos={tienda.eurogames} />
            </div>

            <Counter />
        </>
    );

}

export default Tienda;