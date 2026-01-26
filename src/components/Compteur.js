import { useState } from "react";

function Compteur(){
    const [nom, setNom] = useState("");

    return(
        <div>
            <input placeholder="votre nom" type="text" value={nom} onChange={(val) => setNom(val.target.value)}/>
            <p>Bonjour M/Mme {nom} !</p>
        </div>
    );
}

export default Compteur;