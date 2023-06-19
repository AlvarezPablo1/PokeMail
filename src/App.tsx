import { useState } from "react";
import ListadoMensajes from "./components/ListadoMensajes";
import VistaMensaje from "./components/VistaMensaje";
import { Mensaje, mensajes } from "./data/mensajes";

import "./App.css";

function App() {


const [mensaje, setMensaje] = useState<Mensaje | undefined>();

    const seleccionarMensaje = (id : number) => { 
            setMensaje(mensajes.find((m) => m.id === id));
    }


    return (
        <div className="App">
            <h1>Bandeja de Entrada</h1>
            <div className="bandejaDeEntrada">
                <ListadoMensajes
                    mensajes={mensajes}
                    seleccionarMensaje={seleccionarMensaje}
                />
                <VistaMensaje mensaje={mensaje} />
            </div>
        </div>
    )
}

export default App
