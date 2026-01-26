import { useEffect, useState } from "react";

function HooksEffect(){
    const [compteur, modifierValeur] = useState(0)

    useEffect(()=>{
        console.log(`Le compteur a changé : ${compteur}`);
    }, [compteur]);

    return (<div>
        <p>Compteur : {compteur}</p>
        <button onClick={() => modifierValeur(compteur+1)}>ajouter</button>
    </div>)
}

export default HooksEffect;